import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EssentialItem = ({ item, isAdd = false, setVisible }) => {
    const navigation = useNavigation()

    return (
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
                        onPress={() => setVisible(true)}
                    >
                        <View>
                            <Text style={styles.subtitle}>Add</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        paddingVertical: 20,
        paddingLeft: 30,
        alignItems: 'center',
    },
    imageContainer: {
        width: 55,
        height: 55,
        backgroundColor: '#dfdfdf',
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
