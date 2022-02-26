import { StyleSheet } from "react-native";


export const singleChartStyle = StyleSheet.create({
    container: {
        marginVertical: 80,
        height: '50%',
        transform: [{ rotate: '180deg'}] //to start from the bottom 
    },
    innerWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    numOfItem: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10
    },
    message: {
        textAlign: 'center',
    }
});