import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const QuantityCounter = ({ quantity, setQuantity }) => {
    const increase = () => {
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => decrease()}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counter}>{quantity}</Text>
            <TouchableOpacity style={styles.button} onPress={() => increase()}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f94f82',
        borderWidth: 2,
    },
    counter: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#000',
    },
})

export default QuantityCounter
