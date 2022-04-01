import { screenWidth, screenHeight } from '../layout/layout'
import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const onboardingStyle = StyleSheet.create({
    screenContainer: {
        height: screenHeight,
        width: screenWidth,
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '55%',
    },
    logoImage: {
        width: '100%',
        height: '55%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 40,
        marginBottom: 30,
    },
    wrapperGS: {
        marginBottom: 60,
    },
    textWrapper: {
        width: '100%',
        height: '60%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonWrapper: {
        width: '100%',
        height: '35%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        flex: 0,
        alignItems: 'center',
        backgroundColor: theme.primaryColour.crimson,
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    },
    skip: {
        color: theme.primaryColour.crimson,
        marginTop: 20,
    },
})
