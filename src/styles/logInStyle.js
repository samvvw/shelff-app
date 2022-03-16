import { screenWidth, screenHeight } from '../layout/layout'
import { StyleSheet } from 'react-native'
// import { styleSizes } from "./styleSizes";
import { theme } from './theme'

export const loginInStyle = StyleSheet.create({
    screenContainer: {
        height: screenHeight,
        width: screenWidth,
        padding: 16,
    },
    heading: {
        marginTop: 21,
    },
    hedingText: {
        paddingTop: 10,
        fontSize: 28,
        fontWeight: 'bold',
    },
    input: {},
    required: {
        color: 'red',
    },
    text: {
        fontSize: 15,
    },
    box: {
        marginTop: 5,
    },

    forgotPasswordText: {
        width: screenWidth - 32,
        textAlign: 'right',
        color: theme.primaryColour.crimson,
        fontSize: 11,
    },
    buttonsBox: {
        marginTop: 15,
    },
    buttonText: {
        fontSize: 17,
    },
    boxTerm: {
        marginTop: 42,
        borderBottomColor: 'gray',
        borderStyle: 'solid',
        paddingBottom: 20,
        borderBottomWidth: 1,
    },

    termsText: {
        fontSize: 12,
    },
    buttonTermsText: {
        color: theme.primaryColour.crimson,
        fontSize: 12,
        marginLeft: 7,
    },
    signUpText: {
        fontSize: 16,
        color: theme.primaryColour.crimson,
        fontWeight: 'bold',
    },
    signUpNotOnShelff: {
        color: 'black',
        marginLeft: 13,
        marginRight: 5,
        fontWeight: 'bold',
    },
    button: {
        margin: 8,
        height: 46,
        width: '97%',
        backgroundColor: theme.primaryColour.crimson,
        borderRadius: 10,
    },
    buttonOutline: {
        margin: 8,
        height: 46,
        width: '97%',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.primaryColour.crimson,
    },
    buttonText: {
        color: theme.primaryColour.crimson,
    },
})
