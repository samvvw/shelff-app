import { StyleSheet } from 'react-native'
import { styleFonts } from './styleFonts'
import { styleSizes } from './styleSizes'

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
        paddingBottom: 10,
        padding: 10,
    },
    button: {
        marginTop: 18,
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    textPriority: {
        fontSize: 12,
        marginLeft: 27,
        marginRight: 27,
    },
    checkbox: {},
    checkboxText: {
        marginLeft: 10,
        fontSize: 12,
    },
    termsOfService: {
        marginLeft: 22,
    },
    alreadyAccount: {
        paddingTop: 10,
        width: styleSizes.screen.width,
    },
    buttonLogin: {
        backgroundColor: 'transparent',
        fontSize: 16,
    },
    hStack: {
        alignItems: 'center',
        paddingBottom: 20,
    },
})
