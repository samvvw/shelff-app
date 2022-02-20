import { screenWidth, screenHeight } from "../layout/layout";
import { StyleSheet } from "react-native";


export const onboardingStyle = StyleSheet.create({
    screenContanier: {
        height: screenHeight,
        width: screenWidth,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '50%'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 30    
    },
    textWrapper: {
        width: '100%',
        height: '60%',
        justifyContent: 'space-around',
        alignItems:  'center',
        marginBottom: 20 
    },
    heading: {
        fontSize: 24
    },
    text: {
        fontSize: 18
    },
    buttonWrapper: {
        width: '100%',
        height: '35%',
        justifyContent: 'space-between',
        alignItems:  'center',
    },
    button: {
        flex: 0,
        alignItems:  'center',
        backgroundColor:'#007AFF',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    },
    skip: {
        color: '#007AFF'
    },
});