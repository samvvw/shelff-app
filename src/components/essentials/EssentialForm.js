import { useContext, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
    Image,
} from 'react-native'
import LocationList from '../elements/LocationList'
import QuantityCounter from './QuantityCounter'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { saveItemsToLocalStorage } from '../barcode/saveItems'
// import uuid from 'react-native-uuid'
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UserContext } from '../../context/UserContext'
import { UserItemsContext } from '../../context/UserItemsContext'
import { ItemsContext } from '../../context/ItemsContext'
import CategoryIcon from '../../../assets/images/icons/categoryIcon.png'
import CalendarIcon from '../../../assets/images/icons/calendarIcon.png'
import { newItemStyles } from '../../styles/styles'

const EssentialForm = ({ navigation, route }) => {
    const { user } = useContext(UserContext)
    const { addUserItemList } = useContext(UserItemsContext)
    const { categories } = useContext(ItemsContext)
    const [loading, setLoading] = useState(false)

    const todayDate = new Date()
    const { item } = route.params
    const [category, setCategory] = useState()
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
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

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

    const onSubmit = async () => {
        if (currentDate && location && quantity) {
            setLoading(true)
            if (user?.uid) {
                await sendUserItemToServer()
            } else {
                // const id = uuid.v4()
                saveItemsToLocalStorage([
                    {
                        idItem: item?.barcode ? item.barcode : item.itemId,
                        cItemName: item.itemName,
                        iQuantity: quantity,
                        dexpirationdate: date,
                        idCategory: item.categoryId,
                        idLocation: location,
                        essential: item.isEssential,
                        barcode: item?.barcode ? item.barcode : item.itemId,
                    },
                ])
            }
            setLoading(false)
            navigation.navigate('VerticalMenu')
        }
    }

    const sendUserItemToServer = async () => {
        const expDateFormatted = new Date(date).toISOString().split('T')[0]

        const userItem = {
            itemId: item?.barcode ? item.barcode : item.itemId,
            userId: user.uid,
            quantity: quantity,
            expirationDate: expDateFormatted,
            locationId: +location,
            shelfId: 1,
            isEssential: true,
        }
        // console.log('userItem', userItem)
        await addUserItemList([userItem])
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (date) => {
        const newDate = new Date(date)

        setDate(formatDate(newDate))

        setCurrentDate(
            new Date(
                newDate.getFullYear(),
                newDate.getMonth(),
                newDate.getDate(),
            ),
        )
        hideDatePicker()
    }

    useEffect(() => {
        if (categories) {
            const category = categories.find(
                (category) => category.categoryId === item.categoryId,
            )
            setCategory(category?.categoryName)
        }
    }, [categories])

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
                        {item?.categoryId && (
                            <View style={styles.pair}>
                                <View style={styles.iconWrapper}>
                                    <Image
                                        source={CategoryIcon}
                                        alt={'category'}
                                    />
                                </View>
                                <Text>{category}</Text>
                            </View>
                        )}

                        <View style={styles.pair}>
                            <View>
                                <Button
                                    leftIcon={
                                        <Image
                                            source={CalendarIcon}
                                            alt={'calendar'}
                                            onPress={showDatePicker}
                                        />
                                    }
                                    style={styles.iconWrapper}
                                    onPress={showDatePicker}
                                />
                                <DateTimePickerModal
                                    minimumDate={today}
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    display={
                                        Platform.OS === 'ios'
                                            ? 'inline'
                                            : 'default'
                                    }
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
                        {/* <TouchableOpacity onPress={() => onSubmit()}>
                            <View style={[styles.button, styles.primary]}>
                                <Text style={{ color: 'white' }}>
                                    Add to my shelf
                                </Text>
                            </View>
                        </TouchableOpacity> */}
                        <Button
                            onPress={() => onSubmit()}
                            style={[
                                newItemStyles.saveButton,
                                styles.button,
                                styles.primary,
                            ]}
                            isLoading={loading}
                        >
                            <Text style={[newItemStyles.buttonText]}>Done</Text>
                        </Button>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                                <Text>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        height: 50,
    },
    primary: {
        backgroundColor: '#ed4074',
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    iconWrapper: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        marginRight: 5,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
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
