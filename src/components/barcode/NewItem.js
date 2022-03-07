import react from "react";
import {
  View,
  VStack,
  Text,
  Box,
  HStack,
  Button,
  ScrollView,
  Select,
  Input,
  Switch,
  FormControl,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import { newItemStyles } from "../../styles/styles";
import { Platform } from "react-native";
import Modal from "react-native-modal";

//dropdownlists
import CategoryList from "../elements/CategoryList";
import LocationList from "../elements/LocationList";
//************ */
import {
  openDatabase,
  createTables,
  executeTransaction,
} from "../../services/sqllite";

//create id
import uuid from "react-native-uuid";

const NewItem = (props) => {
  /*states to save data from user*/

  const [itemName, setItemName] = useState(props.productName);
  const [category, setCategory] = useState("fruits");
  const [location, setLocation] = useState("Fridge");
  const [counter, setCounter] = useState(1);
  const [essential, setEssential] = useState(false);
  /****************************** */
  /*Date picker*/

  //todayDate is to set minimum date in calendar
  const todayDate = new Date();
  const [today, setToday] = useState(
    new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())
  );

  //Current date is initialized as today's date and changes when user select a date, is used inside the
  //calendar component
  const [currentDate, setCurrentDate] = useState(today);

  //date is used to be displayed in the label "Expiration date" after the user selected a date
  //formate is different from the used in the calendar component
  const [date, setDate] = useState("");

  const [mode, setMode] = useState(date);
  const [show, setShow] = useState(false);

  //this handle when the item name change
  const handleItemNameChanged = (e) => {
    console.log(e.target.value);
    setItemName(e.target.value);
  };

  //this handle if the item is marked as essential or not
  const handleEssential = () => {
    setEssential(!essential);
  };

  //this handles the event when the user select a date from calendar
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(dateToFormat) {
    return [
      padTo2Digits(dateToFormat.getMonth() + 1),
      padTo2Digits(dateToFormat.getDate()),
      dateToFormat.getFullYear(),
    ].join("/");
  }

  const onChange = (event, selectedDate) => {
    setDate(formatDate(selectedDate));

    setCurrentDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      )
    );

    // setShow(false);
  };

  //this shows the calendar
  const showDatepicker = () => {
    // showMode(date);
    setShow(true);
  };

  //this handles the quantity
  const handleCounter = (value) => {
    if (value < 1) {
      setCounter(1);
    } else {
      setCounter(value);
    }
  };

  //this close modal of scanned item
  const handleCancel = () => {
    props.setcameraHeight("50%");
    props.setScanned(false);
  };

  const handleSaveItem = () => {
    const id = uuid.v4();
    const db = openDatabase();
    let markAsEssential = 0;
    if (essential) markAsEssential = 1;
    // createTables(db);

    console.log("itemName", itemName);

    const sql = `insert into tmpItems  (idItem, cItemName, iQuantity, dexpirationdate, idCategory, idLocation, idShelff,essential) values ("${id}","${props.productName}","${counter}","${date}", "${category}", "${location}",1,"${markAsEssential}")`;

    // console.log(sql);

    executeTransaction(sql, db);

    // const query = executeTransaction("select * from tmpItems", db);
    // console.log("res ", query);

    //this variable allows to update the list of items
    props.setItemListChange(!props.itemListChange);

    handleCancel();
  };

  return (
    <View>
      <Modal
        isVisible={props.scanned}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        coverScreen={true}
        deviceHeight={70}
        style={newItemStyles.modal}
      >
        <View>
          <Box>
            <Button onPress={handleCancel} style={newItemStyles.cancelButton}>
              <Text style={newItemStyles.cancelButtonText}>Cancel</Text>
            </Button>
          </Box>

          <VStack style={newItemStyles.mainStack}>
            <Box style={newItemStyles.codeNumberBox}>
              <Text style={newItemStyles.codeNumberText}>
                {props.barCodeNumber}
                {}
              </Text>
            </Box>

            {/* <FormControl isRequired > */}
            <Input
              size={"xl"}
              paddingBottom={3}
              mb={5}
              mt={5}
              fontSize={24}
              onChange={(e) => handleItemNameChanged(e)}
              defaultValue={props.productName}
              value={itemName}
              // value={itemName}
            />
            {/* <FormControl.ErrorMessage>
                Item's name is required
              </FormControl.ErrorMessage>
            </FormControl> */}
            <Box style={newItemStyles.labelBoxDate}>
              <HStack style={newItemStyles.counterHBarDate}>
                <HStack style={newItemStyles.category}>
                  <Icon
                    color={"gray"}
                    size={16}
                    name="shapes"
                    style={{ marginRight: 15 }}
                  />

                  <CategoryList setCategory={setCategory} />
                </HStack>

                <HStack
                  style={{
                    alignItems: "center",
                  }}
                >
                  <View>
                    <View>
                      <Button
                        backgroundColor={"transparent"}
                        onPress={showDatepicker}
                      />
                    </View>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={currentDate}
                        mode={"date"}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        minimumDate={today}
                      />
                    )}
                  </View>
                  <Text style={{ marginTop: 15, marginLeft: 8 }}>
                    {date || "Expiration Date"}
                    {!date && <Text>*</Text>}
                  </Text>
                </HStack>
              </HStack>
            </Box>

            <Box style={newItemStyles.labelBox}>
              <HStack style={newItemStyles.counterHBar}>
                <Text style={newItemStyles.labels}>
                  Storage Location<Text>*</Text>
                </Text>
                <LocationList setLocation={setLocation} />
              </HStack>
            </Box>
            <Box style={newItemStyles.labelBox}>
              <HStack style={newItemStyles.counterHBar}>
                <Text style={newItemStyles.labels}>Quantity</Text>
                <Box>
                  <HStack style={newItemStyles.counterButtonsHStack}>
                    <Button
                      style={newItemStyles.counterButton}
                      onPress={() => handleCounter(counter - 1)}
                    >
                      <Icon color={"gray"} size={16} name="minus" />
                    </Button>
                    <Text>{counter}</Text>
                    <Button
                      style={newItemStyles.counterButton}
                      onPress={() => handleCounter(counter + 1)}
                    >
                      <Icon color={"gray"} size={16} name="plus" />
                    </Button>
                  </HStack>
                </Box>
              </HStack>
            </Box>
            <Box style={newItemStyles.labelBox}>
              <HStack style={newItemStyles.counterHBar}>
                <Text style={newItemStyles.labels}>Add to essential Items</Text>
                <Switch isChecked={essential} onToggle={handleEssential} />
              </HStack>
            </Box>
            <Button
              style={newItemStyles.saveButton}
              onPress={() => handleSaveItem()}
            >
              <Text>Done</Text>
            </Button>
            <Button style={newItemStyles.moreItemsButton}>
              <Text>Save and keep scanning</Text>
            </Button>
          </VStack>
        </View>
      </Modal>
    </View>
  );
};

export default NewItem;
