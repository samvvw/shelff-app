import react, { useContext } from 'react'
import { View, VStack, Text, Box, HStack, Button, Switch } from 'native-base'
import NewItemBackground from './NewItemBackground'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useState, useEffect } from 'react'
import { newItemStyles } from '../../styles/styles'
import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { TextInput } from 'react-native'

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
import { findBarcodeinLocalDB, updateItemNameForAll } from './saveItems'
import { ItemsContext } from '../../context/ItemsContext'

const ManualEntryItem = ({ navigation }) => {
    const { addNewItemToDB } = useContext(ItemsContext)
    /*states to save data from user*/
    const [items, setItems] = useState([])
    const [itemsToUpdate, setItemsToUpdate] = useState([])
    const [barCodeNumber, setBarCodeNumber] = useState('')
    const [itemName, setItemName] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [counter, setCounter] = useState(1)
    const [essential, setEssential] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

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
        handleNotificationDates(selectedDate)
    }

    //this shows the calendar
    // const showDatepicker = () => {
    //     // showMode(date);
    //     setShow(true)
    // }

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
        navigation.push('VerticalMenu')
    }

    const handleValidation = () => {
        let toast
        let msg = ''

        if (!itemName) {
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

    const sendItemtoLocalStorage = () => {
        let markAsEssential = 0
        if (essential) markAsEssential = 1
        const id = uuid.v4()
        let barcode = id
        if (barCodeNumber !== '') {
            barcode = barCodeNumber
        }
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

        //save item in server
        addNewItemToDB(
            lastItem.barcode,
            lastItem.cItemName,
            +lastItem.idCategory,
        )
        //search the barcode after saving it to check if it exists to update all items
        findBarcodeinLocalDB(barCodeNumber, setItemsToUpdate)
    }

    const handleDone = () => {
        const msg = handleValidation()
        if (msg === '') {
            sendItemtoLocalStorage()
            navigation.push('VerticalMenu')
            setNotification()
        }
    }

    const cleanFields = () => {
        setCounter(1)
        setCategory('')
        setLocation('')
        setDate('Expiration Date')
        setEssential(false)
        setItemName('')
        setBarCodeNumber('')
        setBarCodeNumber('')
    }

    const handleSaveContinue = () => {
        //This code is for saving items into table items

        const msg = handleValidation()
        if (msg === '') {
            sendItemtoLocalStorage()
            cleanFields()
            let toast = Toast.show('Item saved', {
                duration: Toast.durations.LONG,
            })
        }
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

    const handleFechBarCode = () => {
        fetchBarcodeLocalStorage()
    }

    const fetchBarcodeLocalStorage = () => {
        findBarcodeinLocalDB(barCodeNumber, setItems)
    }

    useEffect(() => {
        if (items.length) {
            setItemName(items[0].itemName)
            setCategory(items[0].categoryId)
        }
    }, [items])

    useEffect(() => {
        if (itemsToUpdate.length) {
            updateItemNameForAll(itemsToUpdate[0].barcode, itemName, category)
        }
    }, [itemsToUpdate])

    /*****************************/
    /**** Nortification Setup ****/
    /*****************************/
    const [notificationTimings, setNotificationTimings] = useState([])

    //When to send Notifications
    const handleNotificationDates = async (selectedDate) => {
        //in second
        const duration = (Date.parse(selectedDate) - Date.parse(today)) / 1000

        //notification date for expiring
        if (duration < 3 * 86400) {
            setNotificationTimings([])
        } else if (duration >= 3 * 86400 && duration < 8 * 86400) {
            const first = duration * 0.5
            const second = duration * 0.75
            const expired = duration
            setNotificationTimings([first, second, expired])
        } else if (duration >= 8 * 86400 && duration < 15 * 86400) {
            const first = duration * 0.5
            const second = duration * 0.75
            const third = duration - 86400 //expiry-1day
            const expired = duration
            setNotificationTimings([first, second, third, expired])
        } else if (duration >= 15 * 86400 && duration < 31 * 86400) {
            const first = duration * 0.5
            const second = duration * 0.75
            const third = duration * 0.9
            const fourth = duration - 3 * 86400 //expiry-3days
            const expired = duration
            setNotificationTimings([first, second, third, fourth, expired])
        } else if (duration >= 31 * 86400 && duration < 91 * 86400) {
            const first = duration * 0.75
            const second = duration * 0.8
            const third = duration * 0.9
            const fourth = duration - 7 * 86400 //expiry-3days
            const expired = duration
            setNotificationTimings([first, second, third, fourth, expired])
        } else if (duration >= 91 * 86400) {
            const first = duration * 0.75
            const second = duration * 0.8
            const third = duration * 0.9
            const fourth = duration - 15 * 86400 //expiry-3days
            const expired = duration
            setNotificationTimings([first, second, third, fourth, expired])
        }
    }

    //Setting up Notification
    const setNotification = async () => {
        const permission = await AsyncStorage.getItem('permission')
        // console.log(permission)

        if (permission == 'granted') {
            //getreminder time
            AsyncStorage.getItem('reminder')
                .then((data) => {
                    let reminderTime = JSON.parse(data)

                    const hInSec = reminderTime.hour * 60 * 60
                    const mInSec = reminderTime.minute * 60

                    notificationTimings.map((notificate) => {
                        const flatNotificate = notificate - (notificate % 86400)
                        const dateTime = flatNotificate + hInSec + mInSec

                        //To show the notification alert
                        Notifications.setNotificationHandler({
                            handleNotification: async () => ({
                                shouldShowAlert: true,
                                shouldPlaySound: true,
                                shouldSetBadge: false,
                            }),
                        })

                        //Instant Notification
                        Notifications.scheduleNotificationAsync({
                            content: {
                                title: `Instant Notification`,
                                body: `[${date}] ${itemName} in ${location}`,
                            },
                            trigger: null,
                        }).catch((error) => {
                            console.log('error', error)
                        })

                        //Scheduled Notification (it can be passed with UNIXTIME wich is mmsecond)
                        Notifications.scheduleNotificationAsync({
                            content: {
                                title: 'Expiring Alert',
                                body: `[${date}] ${itemName} in ${location}`,
                            },
                            trigger: { seconds: dateTime },
                        }).catch((error) => {
                            console.log('error', error)
                        })

                        //To Check Scheduled Notifications
                        Notifications.getAllScheduledNotificationsAsync()
                            .then((data) => {
                                console.log(data)
                            })
                            .catch((error) => {
                                console.log('error', error)
                            })
                    })
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (date) => {
        hideDatePicker()
    }

    return (
        <View>
            <NewItemBackground />

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
                            <TextInput
                                placeholder="Type Barcode Number"
                                style={newItemStyles.codeNumberText}
                                onChangeText={setBarCodeNumber}
                                value={barCodeNumber}
                                onBlur={handleFechBarCode}
                            ></TextInput>
                        </Box>

                        <TextInput
                            size={'xl'}
                            style={{ paddingBottom: 20, paddingTop: 30 }}
                            fontSize={24}
                            onChangeText={setItemName}
                            value={itemName}
                            placeholder="Item name"
                            autoFocus={true}
                        />

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
                                                backgroundColor: 'transparent',
                                            }}
                                            backgroundColor={'red'}
                                            onPress={showDatePicker}
                                        />
                                        {/* {show && (
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={currentDate}
                                                mode={'date'}
                                                is24Hour={true}
                                                display="default"
                                                onChange={onChange}
                                                minimumDate={today}
                                            />
                                        )} */}
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
                                            isDarkModeEnabled={false}
                                            display="inline"
                                        />
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
                                                color={'gray'}
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
                                                color={'gray'}
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
                                />
                            </HStack>
                        </Box>
                        <Button
                            onPress={() => handleDone()}
                            style={newItemStyles.saveButton}
                        >
                            <Text>Done</Text>
                        </Button>
                        <Button
                            onPress={() => handleSaveContinue()}
                            style={newItemStyles.moreItemsButton}
                        >
                            <Text>Save and add more items</Text>
                        </Button>
                    </VStack>
                </View>
            </RootSiblingParent>
        </View>
    )
}

export default ManualEntryItem
