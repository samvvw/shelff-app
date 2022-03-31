import { screenWidth, screenHeight } from '../layout/layout'
import { StyleSheet } from 'react-native'
import { styleSizes } from './styleSizes'
import { styleFonts } from './styleFonts'
import { theme } from './theme'

export const signStyle = StyleSheet.create({
    screenContainer: {
        height: screenHeight,
        width: screenWidth,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    logoBox: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subheading: {
        paddingTop: 50,
        fontSize: 30,
    },
    buttonBox: {
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
    buttonLinkText: {
        color: '#000',
    },
})
