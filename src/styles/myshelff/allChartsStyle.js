import { StyleSheet } from "react-native";
import {Platform} from 'react-native'



export const allChartsStyle = StyleSheet.create({
    container: {
        marginTop: 140,
        height: '50%',
        transform: [{ rotate: '180deg'}], //to start from the bottom 
        position: 'relative'
    },
    innerWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: Platform.OS === 'ios' ? 70 : 60,
        height: Platform.OS === 'ios' ? 70 : 60,
        borderRadius: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5
    },
    message: {
        fontSize: 15,
    },
    details: {
        position: 'relative',
        bottom: 86,
        left: 50,
        height: 80,
        display: 'flex',
        justifyContent: 'space-around'
    },
    detail: {
        fontSize: 15,
        fontWeight: 'bold',
    }
    
});