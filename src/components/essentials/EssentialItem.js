import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EssentialItem = ({ item: { item }, isAdd = false }) => {
    const navigation = useNavigation()

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
                                    : {item?.creationDate}
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
        backgroundColor: '#0a0',
        borderRadius: 10,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
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
