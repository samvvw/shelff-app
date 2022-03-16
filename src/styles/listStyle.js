import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const listStyle = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        width: '100%',
    },
    card: {
        backgroundColor: 'white',
        borderColor: theme.secondaryColour.chip,
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        padding: 15,
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    text: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
})
