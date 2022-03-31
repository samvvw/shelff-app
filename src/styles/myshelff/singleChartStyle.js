import { screenWidth } from "../../layout/layout";
import { StyleSheet } from "react-native";
import {Platform} from 'react-native';
import { theme } from "../theme"

export const singleChartStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        transform: [{ rotate: '180deg'}] //to start from the bottom 
    },
    innerWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: Platform.OS === 'ios' ? 100 : 90,
        height: Platform.OS === 'ios' ? 100 : 90,
        borderRadius: 20,
    },
    numOfItem: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        fontSize: 16,
        marginBottom: 20,
        transform: [{ rotate: '180deg'}], //to flip the text
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.textColour.inactiveText 
    },
    messageWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center',
        width: '80%',
    },
    messageHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageBody: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    }
});