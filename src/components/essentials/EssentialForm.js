import { useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native'
import LocationList from '../elements/LocationList'
import QuantityCounter from './QuantityCounter'
import DateTimePicker from '@react-native-community/datetimepicker'
import { saveItemsToLocalStorage } from '../barcode/saveItems'
import uuid from 'react-native-uuid'

const EssentialForm = ({ navigation, route }) => {
    const todayDate = new Date()
    const { item } = route.params
    const [location, setLocation] = useState()
    const [quantity, setQuantity] = useState(1)
    const [showCalendar, setShowCalendar] = useState(
        Platform.OS === 'ios' ? true : false,
    )
    const [today, setToday] = useState(
        new Date(
            todayDate.getFullYear(),
            todayDate.getMonth(),
            todayDate.getDate(),
        ),
    )

    const [date, setDate] = useState('')
    const [currentDate, setCurrentDate] = useState(today)

    const onChange = (_, selectedDate) => {
        if (Platform.OS === 'android') setShowCalendar(false)

        setDate(formatDate(selectedDate))

        setCurrentDate(
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
            ),
        )
    }

    function formatDate(dateToFormat) {
        return [
            padTo2Digits(dateToFormat.getMonth() + 1),
            padTo2Digits(dateToFormat.getDate()),
            dateToFormat.getFullYear(),
        ].join('/')
    }

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0')
    }

    const onSubmit = () => {
        if (currentDate && location && quantity) {
            const id = uuid.v4()
            saveItemsToLocalStorage([
                {
                    idItem: id,
                    cItemName: item.itemName,
                    iQuantity: quantity,
                    dexpirationdate: date,
                    idCategory: item.categoryId,
                    idLocation: location,
                    essential: item.isEssential,
                    barcode: item?.barcode ? item.barcode : item.itemId,
                },
            ])
            navigation.goBack()
        }
    }

    return (
        <>
            <View
                style={{
                    height: '95%',
                    marginTop: 'auto',
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.itemCodeContainer}>
                        <Text>
                            {item?.barcode ? item.barcode : item.itemId}
                        </Text>
                    </View>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item?.itemName}</Text>
                    </View>
                    <View style={styles.row}>
                        {item?.categoryName && (
                            <View style={styles.pair}>
                                <View style={styles.icon}></View>
                                <Text>{item?.categoryName}</Text>
                            </View>
                        )}

                        <View style={styles.pair}>
                            <TouchableOpacity
                                onPress={() => setShowCalendar(true)}
                            >
                                {Platform.OS === 'android' && (
                                    <>
                                        <View style={styles.icon}></View>
                                        <Text>
                                            {date || `Expiration Date`}
                                            <Text style={{ color: '#f00' }}>
                                                *
                                            </Text>
                                        </Text>
                                    </>
                                )}
                                {showCalendar && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={currentDate}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                        minimumDate={today}
                                        style={{ width: 150 }}
                                    />
                                )}
                                {Platform.OS === 'ios' && (
                                    <Text>
                                        Expiration Date
                                        <Text style={{ color: '#f00' }}>*</Text>
                                    </Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Storage Location{' '}
                            <Text style={{ color: '#f00' }}>*</Text>
                        </Text>
                        <LocationList
                            location={location}
                            setLocation={setLocation}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Quantity</Text>
                        <QuantityCounter
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={() => onSubmit()}>
                            <View style={[styles.button, styles.primary]}>
                                <Text style={{ color: 'white' }}>
                                    Add to my shelf
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                                <Text>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* {showCalendar && (
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
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    itemCodeContainer: {
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        borderColor: '#ccc',
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius: 5,
    },
    itemName: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        marginVertical: 6,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#e8e8e8',
    },
    primary: {
        backgroundColor: '#ed4074',
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    pair: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#f899b5',
        borderRadius: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ed4074',
    },
    formControl: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: '#eee',
    },
    label: {
        alignSelf: 'center',
    },
    buttonsContainer: {
        marginTop: 20,
    },
})

export default EssentialForm
