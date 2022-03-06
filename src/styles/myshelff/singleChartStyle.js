import { screenWidth } from "../../layout/layout";
import { StyleSheet } from "react-native";
import {Platform} from 'react-native'

export const singleChartStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        transform: [{ rotate: '180deg'}] //to start from the bottom 
    },
    innerWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: Platform.OS === 'ios' ? 70 : 60,
        height: Platform.OS === 'ios' ? 70 : 60,
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