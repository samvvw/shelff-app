import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

const EssentialItem = ({ item, isAdd = false }) => {
    const itemInfo = item?.item ? item?.item : item
    console.log('itemInfo', itemInfo)
    const navigation = useNavigation()
    const { user } = useContext(UserContext)

    const setCategoryIcon = (item) => {
        switch (item) {
            case 'Fruits':
                return require('../../../assets/images/icons/Fruits.png')
            case 'Vegetables':
                return require('../../../assets/images/icons/Veggies.png')
            case 'Meat':
                return require('../../../assets/images/icons/Meat.png')
            case 'Seafood':
                return require('../../../assets/images/icons/Fish.png')
            case 'Cold cuts':
                return require('../../../assets/images/icons/Chicken.png')
            case 'Dairy':
                return require('../../../assets/images/icons/Dairy.png')
            case 'Bread cake':
                return require('../../../assets/images/icons/Bread.png')
            case 'Canned food':
                return require('../../../assets/images/icons/CanFood.png')
            default:
                return require('../../../assets/icon.png')
        }
    }


    const diffDates = (itemDate) => {
        let dateComing
        if (user?.uid) {
            dateComing = dayjs(+itemDate)
        } else {
            dateComing = dayjs(itemDate)
        }
        const currentDate = dayjs()

        const days = currentDate.diff(dateComing, 'day')
        if (days > 0) return days.toFixed(0) + ' days ago'
        else return 'Today'
    }

    const rowHeightAnimatedValue = new Animated.Value(60)

    return (
        <Animated.View style={[
            styles.rowFront,                     
            {height: rowHeightAnimatedValue}
        ]}>
            <TouchableHighlight style={styles.rowFrontVisible}>
                <View style={styles.container}>
                    <Image
                            source={setCategoryIcon(itemInfo.categoryName)}
                            alt={itemInfo.categoryName}
                            style={styles.imageContainer}
                    />
                    <View style={styles.row}>
                        <View style={styles.content}>
                            <Text style={styles.title}>
                                {itemInfo?.itemName}
                            </Text>
                            {!isAdd && (
                                <Text style={styles.subtitle}>
                                    <Text style={styles.highlight}>
                                        Added to my shelff
                                    </Text>
                                    : {diffDates(itemInfo?.creationDate)}
                                </Text>
                            )}
                        </View>
                        {isAdd && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    navigation.navigate('EssentialForm', {
                                        item: itemInfo,
                                    })
                                }
                            >
                                <View>
                                    <Text style={styles.subtitle}>Add</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableHighlight>
        </Animated.View>
    )
}

const styles = new StyleSheet.create({

    rowFront: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 80,
        margin: 20,
        marginBottom: 40,
        elevation: 5,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 35 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    rowFrontVisible: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 80,
        marginBottom: 15,
    },
    container: {
        height: 95,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: '#fff',
        display: 'flex',        
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 5,
    },
    imageContainer: {
        width: Platform.OS === 'ios' ? 70 : 60,
        height: Platform.OS === 'ios' ? 70 : 60,
        borderRadius: 5,
        marginRight: 20,
    },
    row: {
        width: '70%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    contetnt: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 13,
        marginTop: 3,
        color: '#000',
    },
    highlight: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 60,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: '#ed4074',
        marginTop: 5,
    },
})

export default EssentialItem
