import { screenWidth, screenHeight } from "../services/layout";
import { StyleSheet } from "react-native";


export const getStartedStyle = StyleSheet.create({
    screenContanier: {
        height: screenHeight,
        width: screenWidth,
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 30    
    },
    indicator: {
        width: '100%',
        height: '10%',
        flex: 1,
        flexDirection: 'row',
    },
    indicatorOne: {
        width: '50%',
        height: '5%',
        backgroundColor: '#007AFF'
    },
    indicatorTwo: {
        width: '50%',
        height: '5%',
        backgroundColor: '#E5E5EA'
    },
    indicatorDone: {
        width: '50%',
        height: '5%',
        backgroundColor: '#007AFF'
    },
    textWrapper: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-start',
        alignItems:  'flex-start',
        marginBottom: 20 
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
    },
    timeSelector: {
        width: '100%',
    },
    timeSelectorLabel: {
        fontSize: 18,
        color: '#007AFF'
    },
    buttonWrapper: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-between',
        alignItems:  'center',
        marginBottom: 40
    },
    buttonWrapperBottom: {
        width: '100%',
        height: '20%',
        justifyContent: 'flex-end',
        alignItems:  'center',
        marginBottom: 40
    },
    whiteButton: {
        flex: 0,
        alignItems:  'center',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#007AFF",
    },
    blueText: {
        color: '#007AFF'
    },
    blueButton: {
        flex: 0,
        alignItems:  'center',
        backgroundColor:'#007AFF',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    grayButton: {
        flex: 0,
        alignItems:  'center',
        backgroundColor:'#C4C4C4',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    whiteText: {
        color: 'white'
    },
});