import { screenWidth } from "../../layout/layout";
import { theme } from "../theme"
import { StyleSheet } from "react-native";
import {Platform} from 'react-native'
import { Center } from "native-base";

export const allChartsStyle = StyleSheet.create({
    outer: {
        position: 'relative',
        marginTop: 30,
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
        width: Platform.OS === 'ios' ? 100 : 90,
        height: Platform.OS === 'ios' ? 100 : 90,
        borderRadius: 20,
    },
    // details: {
    //     position: 'absolute',
    //     bottom: 7,
    //     left: 220,
    //     height: 80,
    //     display: 'flex',
    //     justifyContent: 'space-around'
    // },
    details: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 30,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.textColour.inactiveText,
    },
    detailsText: {
        textAlign: 'center'
    },
});