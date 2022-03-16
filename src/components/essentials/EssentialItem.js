import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

const EssentialItem = ({ item: { item }, isAdd = false }) => {
    const navigation = useNavigation()
    const { user } = useContext(UserContext)

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

    return (
        <Animated.View>
            <TouchableHighlight>
                <View style={styles.container}>
                    <View style={styles.imageContainer}></View>
                    <View style={styles.row}>
                        <View style={styles.content}>
                            <Text style={styles.title}>{item?.itemName}</Text>
                            {!isAdd && (
                                <Text style={styles.subtitle}>
                                    <Text style={styles.highlight}>
                                        Added to my shelff
                                    </Text>
                                    : {diffDates(item?.creationDate)}
                                </Text>
                            )}
                        </View>
                        {isAdd && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    navigation.navigate('EssentialForm', {
                                        item,
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
    container: {
        width: '100%',
        borderColor: '#e8e8e8',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 20,
        paddingLeft: 30,
        alignItems: 'center',
        marginVertical: 5,
    },
    imageContainer: {
        width: 55,
        height: 55,
        backgroundColor: '#ed4074',
        borderRadius: 10,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        marginTop: 3,
    },
    highlight: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
    },
    button: {
        borderWidth: 2,
        borderRadius: 60,
        paddingVertical: 13,
        paddingHorizontal: 11,
        borderColor: '#2763de',
    },
})

export default EssentialItem
