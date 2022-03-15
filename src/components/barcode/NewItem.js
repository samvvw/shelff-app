import react from 'react'
import {
    View,
    VStack,
    Text,
    Box,
    HStack,
    Button,
    Switch,
    Center,
    ScrollView,
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState, useEffect } from 'react'
import { newItemStyles } from '../../styles/styles'
import { TextInput } from 'react-native'
import { theme } from '../../styles/theme'

//Toast to send messages validations
import Toast from 'react-native-root-toast'
//RootSiblingParent to show toast on top of modal
import { RootSiblingParent } from 'react-native-root-siblings'

//dropdownlists
import CategoryList from '../elements/CategoryList'
import LocationList from '../elements/LocationList'
//************ */

//create id
import uuid from 'react-native-uuid'

import { saveItemsToLocalStorage } from './saveItems'

const NewItem = ({
    barCodeNumber,
    setScanned,
    setcameraHeight,
    productName,
    setArrItems,
    arrItems,
    navigation,
}) => {
    /*states to save data from user*/
    const barcode = barCodeNumber
    const [itemName, setItemName] = useState(productName)
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [counter, setCounter] = useState(1)
    const [essential, setEssential] = useState(false)

    /****************************** */
    /*Date picker*/

    //todayDate is to set minimum date in calendar
    const todayDate = new Date()
    const [today, setToday] = useState(
        new Date(
            todayDate.getFullYear(),
            todayDate.getMonth(),
            todayDate.getDate(),
        ),
    )

    //Current date is initialized as today's date and changes when user select a date, is used inside the
    //calendar component
    const [currentDate, setCurrentDate] = useState(today)

    //date is used to be displayed in the label "Expiration date" after the user selected a date
    //formate is different from the used in the calendar component
    const [date, setDate] = useState('')

    const [mode, setMode] = useState(date)
    const [show, setShow] = useState(false)

    //this handle when the item name change
    //const handleItemNameChanged = (event) => {
    // setItemName(event.target.value);
    //};

    //this handle if the item is marked as essential or not
    const handleEssential = () => {
        setEssential(!essential)
    }

    //this handles the event when the user select a date from calendar
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0')
    }

    function formatDate(dateToFormat) {
        return [
            padTo2Digits(dateToFormat.getMonth() + 1),
            padTo2Digits(dateToFormat.getDate()),
            dateToFormat.getFullYear(),
        ].join('/')
    }

    const onChange = (event, selectedDate) => {
        setDate(formatDate(selectedDate))

        setCurrentDate(
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
            ),
        )

        // setShow(false);
    }

    //this shows the calendar
    const showDatepicker = () => {
        // showMode(date);
        setShow(true)
    }

    //this handles the quantity
    const handleCounter = (value) => {
        if (value < 1) {
            setCounter(1)
        } else {
            setCounter(value)
        }
    }

    //this close modal of scanned item
    const handleCancel = () => {
        setcameraHeight('50%')
        setScanned(false)
    }

    const handleValidation = () => {
        let toast
        let msg = ''

        if (!itemName && !productName) {
            msg = "Missing item's name"
        } else if (category == '') {
            msg = ' Select category'
        } else if (!date) {
            msg = ' Missing expiration date'
        } else if (!Date.parse(date)) {
            msg = ' Invalid expiration date'
        } else if (location == '') {
            msg = ' Select location'
        }

        if (msg !== '') {
            toast = Toast.show(msg, {
                duration: Toast.durations.LONG,
            })
        }
        return msg
    }

    const handleDoneScanning = () => {
        const msg = handleValidation()
        if (msg === '') {
            //send all item in the array state
            saveItemsToLocalStorage(arrItems)
            //send last item created
            let markAsEssential = 0
            if (essential) markAsEssential = 1
            const id = uuid.v4()
            const lastItem = createItemObj(
                id,
                itemName,
                counter,
                date,
                category,
                location,
                1,
                markAsEssential,
                barcode,
            )
            saveItemsToLocalStorage([lastItem])
            setArrItems([])
            navigation.push('VerticalMenu')
        }
    }

    const handleSaveContinueScanning = () => {
        //This code is for saving items into table items
        /*
        const db = openDatabase()
        const sql = `insert into items  (idItem, cItemName, iQuantity, dexpirationdate, idCategory, idLocation, idShelff,essential,permanent) values ("${id}","${itemName}","${counter}","${date}", "${category}", "${location}",1,"${markAsEssential}",0)`
        executeTransaction(sql, db)
        */
        const msg = handleValidation()
        if (msg === '') {
            saveItemIntoArray()
            handleCancel()
        }
    }

    const saveItemIntoArray = () => {
        let markAsEssential = 0
        if (essential) markAsEssential = 1

        const id = uuid.v4()
        const item = createItemObj(
            id,
            itemName,
            counter,
            date,
            category,
            location,
            1,
            markAsEssential,
            barcode,
        )

        setArrItems((prev) => [...prev, item])
    }

    const createItemObj = (
        idItem,
        cItemName,
        iQuantity,
        dexpirationdate,
        idCategory,
        idLocation,
        idShelff,
        essential,
        barcode,
    ) => {
        const item = {
            idItem: idItem,
            cItemName: cItemName,
            iQuantity: iQuantity,
            dexpirationdate: dexpirationdate,
            idCategory: idCategory,
            idLocation: idLocation,
            idShelff: 1,
            essential: essential,
            barcode: barcode,
        }
        return item
    }

    return (
        <ScrollView>
            <RootSiblingParent>
                <View>
                    <Box>
                        <Button
                            onPress={handleCancel}
                            style={newItemStyles.cancelButton}
                        >
                            <Text style={newItemStyles.cancelButtonText}>
                                Cancel
                            </Text>
                        </Button>
                    </Box>

                    <VStack style={newItemStyles.mainStack}>
                        <Box style={newItemStyles.codeNumberBox}>
                            <Text style={newItemStyles.codeNumberText}>
                                {barCodeNumber}
                                {}
                            </Text>
                        </Box>

                        {!productName && <NoBarcode />}
                        {!productName ? (
                            <TextInput
                                size={'xl'}
                                style={{ paddingBottom: 10, paddingTop: 15 }}
                                fontSize={24}
                                onChangeText={setItemName}
                                // value={itemName}
                                placeholder="Item name"
                                autoFocus={true}
                            />
                        ) : (
                            <Text style={newItemStyles.itemNameText}>
                                {productName}
                            </Text>
                        )}

                        <Box style={newItemStyles.labelBoxDate}>
                            <HStack style={newItemStyles.counterHBarDate}>
                                <HStack style={newItemStyles.category}>
                                    <Icon
                                        color={'gray'}
                                        size={16}
                                        name="shapes"
                                        style={{ marginRight: 15 }}
                                    />

                                    <CategoryList
                                        category={category}
                                        setCategory={setCategory}
                                    />
                                </HStack>

                                <HStack
                                    style={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <View style={{}}>
                                        <View>
                                            <Button
                                                leftIcon={
                                                    <Icon
                                                        color={'pink'}
                                                        size={20}
                                                        name="calendar"
                                                    />
                                                }
                                                style={{
                                                    backgroundColor:
                                                        'transparent',
                                                }}
                                                onPress={showDatepicker}
                                            />
                                        </View>
                                        {show && (
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={currentDate}
                                                mode={'date'}
                                                is24Hour={true}
                                                display="default"
                                                onChange={onChange}
                                                minimumDate={today}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={{
                                            marginTop: 5,
                                            marginLeft: 0,
                                        }}
                                    >
                                        {date || 'Expiration Date'}
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
                                <LocationList
                                    location={location}
                                    setLocation={setLocation}
                                />
                            </HStack>
                        </Box>
                        <Box style={newItemStyles.labelBox}>
                            <HStack style={newItemStyles.counterHBar}>
                                <Text style={newItemStyles.labels}>
                                    Quantity
                                </Text>
                                <Box>
                                    <HStack
                                        style={
                                            newItemStyles.counterButtonsHStack
                                        }
                                    >
                                        <Button
                                            style={newItemStyles.counterButton}
                                            onPress={() =>
                                                handleCounter(counter - 1)
                                            }
                                        >
                                            <Icon
                                                color={
                                                    theme.primaryColour.crimson
                                                }
                                                size={16}
                                                name="minus"
                                            />
                                        </Button>
                                        <Text>{counter}</Text>
                                        <Button
                                            style={newItemStyles.counterButton}
                                            onPress={() =>
                                                handleCounter(counter + 1)
                                            }
                                        >
                                            <Icon
                                                color={
                                                    theme.primaryColour.crimson
                                                }
                                                size={16}
                                                name="plus"
                                            />
                                        </Button>
                                    </HStack>
                                </Box>
                            </HStack>
                        </Box>
                        <Box style={newItemStyles.labelBox}>
                            <HStack style={newItemStyles.counterHBar}>
                                <Text style={newItemStyles.labels}>
                                    Add to essential Items
                                </Text>
                                <Switch
                                    isChecked={essential}
                                    onToggle={handleEssential}
                                    offTrackColor={theme.secondaryColour.lilac}
                                    onTrackColor={theme.primaryColour.crimson}
                                />
                            </HStack>
                        </Box>
                        <Button
                            onPress={() => handleDoneScanning()}
                            style={newItemStyles.saveButton}
                        >
                            <Text style={newItemStyles.saveButtonText}>
                                Done
                            </Text>
                        </Button>
                        <Button
                            onPress={() => handleSaveContinueScanning()}
                            style={newItemStyles.moreItemsButton}
                        >
                            <Text style={newItemStyles.moreItemsButtonText}>
                                Save and keep scanning
                            </Text>
                        </Button>
                    </VStack>
                </View>
            </RootSiblingParent>
        </ScrollView>
    )
}

const NoBarcode = () => {
    return (
        <Center>
            <Text style={newItemStyles.noBarCode_Text1}>
                No barcode match was found.
            </Text>
            <Text style={newItemStyles.noBarCode_Text2}>
                Please enter item name and category to
            </Text>
            <Text style={newItemStyles.noBarCode_Text2}>
                update the database
            </Text>
        </Center>
    )
}

export default NewItem
