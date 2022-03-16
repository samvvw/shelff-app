import { screenWidth, screenHeight } from '../layout/layout'
import { StyleSheet } from 'react-native'
import { styleSizes } from './styleSizes'
import { styleFonts } from './styleFonts'
import { theme } from './theme'

export const signStyle = StyleSheet.create({
    screenContainer: {
        // height: screenHeight,
        width: screenWidth,
        padding: 10,
    },
    stack: {
        // height: screenHeight,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    image: {
        marginTop: 70,
    },
    heading: {
        paddingTop: 40,
    },
    subheading: {
        paddingTop: 20,
        fontSize: 28,
    },
    headingText: {
        fontSize: 72,
        fontFamily: styleFonts.medium.fontFamily,
    },
    buttonBox: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 100,
    },
    loginButtonBox: {
        marginTop: 20,
        marginBottom: 30,
    },
    button: {
        margin: 8,
        height: 46,
        width: '90%',
        backgroundColor: theme.primaryColour.crimson,
        borderRadius: 10,
    },
    buttonOutline: {
        margin: 8,
        height: 46,
        width: '90%',
        borderRadius: 10,
        borderColor: theme.primaryColour.crimson,
    },
    buttonText: {
        color: theme.primaryColour.crimson,
    },
    buttonLink: {
        // backgroundColor: 'transparent',
    },
    buttonLinkText: {
        color: '#000',
    },
})
