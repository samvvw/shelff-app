import { StyleSheet } from 'react-native'
import { screenHeight } from '../layout/layout'
import { theme } from './theme'

export const listDetailsStyle = StyleSheet.create({
    container: {
        height: screenHeight,
        backgroundColor: 'white'
    },
    empty: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.secondaryColour.chip,
        paddingTop: 150,
    },
    image: {
        width: Platform.OS === 'ios' ? 80 : 70,
        height: Platform.OS === 'ios' ? 80 : 70,
        borderRadius: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
