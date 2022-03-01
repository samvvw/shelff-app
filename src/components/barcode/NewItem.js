import react from "react";
import {
  View,
  VStack,
  Text,
  Box,
  Select,
  HStack,
  Button,
  ScrollView,
  Switch,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { newItemStyles } from "../../styles/styles";
import { Platform } from "react-native";
const NewItem = (props) => {
  /*Date picker*/
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    if (value < 0) {
      setCounter(0);
    } else {
      setCounter(value);
    }
  };

  const handleCancel = () => {
    props.setcameraHeight("50%");
    props.setScanned(false);
  };

  return (
    <View>
      <ScrollView>
        <Box>
          <Button onPress={handleCancel} style={newItemStyles.cancelButton}>
            <Text style={newItemStyles.cancelButtonText}>Cancel</Text>
          </Button>
        </Box>

        <VStack style={newItemStyles.mainStack}>
          <Box style={newItemStyles.codeNumberBox}>
            <Text style={newItemStyles.codeNumberText}>
              {props.barCodeNumber}{" "}
            </Text>
          </Box>

          <Text style={newItemStyles.title}>{props.productName}</Text>

          <Box style={newItemStyles.labelBox}>
            <HStack style={newItemStyles.counterHBarDate}>
              <Box style={newItemStyles.dateBox}>
                <HStack style={newItemStyles.category}>
                  <Icon color={"gray"} size={16} name="shapes" />
                  <Text style={newItemStyles.CategoryText}>Dairy</Text>
                </HStack>
              </Box>
              <Box>
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
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                  <Text style={{ marginTop: 15, marginLeft: 8 }}>
                    Expiration Date<Text>*</Text>
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Box>

          <Box style={newItemStyles.labelBox}>
            <HStack style={newItemStyles.counterHBar}>
              <Text style={newItemStyles.labels}>
                Storage Location<Text>*</Text>
              </Text>
              <Select
                w={"140"}
                placeholderTextColor="blue"
                borderRadius={15}
                placeholder="select location"
                // selectedValue={service}
                accessibilityLabel="select location"
                // onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Fridge" value="Fridge" />
                <Select.Item label="Freezer" value="Freezer" />
                <Select.Item label="Pantry" value="Pantry" />
              </Select>
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
              <Switch />
            </HStack>
          </Box>
          <Button style={newItemStyles.saveButton}>
            <Text>Save</Text>
          </Button>
          <Button style={newItemStyles.moreItemsButton}>
            <Text>Add more items</Text>
          </Button>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default NewItem;
