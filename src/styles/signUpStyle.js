import { StyleSheet } from 'react-native'
import { styleFonts } from './styleFonts'
import { styleSizes } from './styleSizes'
import { theme } from './theme'
export const signUpStyle = StyleSheet.create({
    heading: {
        padding: 10,
        fontSize: 24,
    },
    formStackContainer: {
        // padding: 10,

        // width: "100%",
        flex: 1,
        margin: 0,
    },
    input: {
        width: styleSizes.formInput.width,
        height: 100,
    },
    box: {
        // paddingBottom: 10,
        // padding: 10,
        paddingLeft: 10,
    },
    button: {
        marginTop: 18,
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: theme.primaryColour.crimson,
        height: 44,
    },
    textPriority: {
        fontSize: 13,
        marginLeft: 10,
        marginRight: 10,
    },
    checkboxBox: {
        marginTop: 5,
        marginLeft: 15,
        marginRight: 10,
    },
    checkbox: {
        borderColor: theme.primaryColour.crimson,
    },
    checkboxText: {
        marginLeft: 10,
        fontSize: 12,
    },
    termsOfService: {
        marginLeft: 22,
        color: theme.primaryColour.crimson,
    },
    alreadyAccount: {
        paddingTop: 10,
        width: styleSizes.screen.width,
    },
    buttonLogin: {
        backgroundColor: 'transparent',
        fontSize: 16,
        color: theme.primaryColour.crimson,
    },
    hStack: {
        alignItems: 'center',
        paddingBottom: 20,
    },
})
