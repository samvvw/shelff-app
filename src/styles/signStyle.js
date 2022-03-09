import { screenWidth, screenHeight } from '../layout/layout'
import { StyleSheet } from 'react-native'
import { styleSizes } from './styleSizes'
import { styleFonts } from './styleFonts'

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
    heading: {
        paddingTop: 100,
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
    },
    loginButtonBox: {
        marginTop: 20,
        marginBottom: 30,
    },
    button: {
        margin: 8,
        height: 46,
        width: '90%',
        backgroundColor: '#007AFF',
    },
    buttonOutline: {
        margin: 8,
        height: 46,
        width: '90%',
    },
    buttonLink: {
        // backgroundColor: 'transparent',
    },
    buttonLinkText: {
        color: '#000',
    },
})
