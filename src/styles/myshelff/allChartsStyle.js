import { screenWidth } from "../../layout/layout";
import { StyleSheet } from "react-native";
import {Platform} from 'react-native'

export const allChartsStyle = StyleSheet.create({
    outer: {
        position: 'relative',
        marginVertical: 30,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '180deg'}], //to start from the bottom 

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
        position: 'absolute',
        bottom: 7,
        left: 220,
        height: 80,
        display: 'flex',
        justifyContent: 'space-around'
    },
    detail: {
        fontSize: 15,
        fontWeight: 'bold',
    }
    
});