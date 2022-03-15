import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const newItemListStyle = StyleSheet.create({
    doneButton: {
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: theme.primaryColour.crimson,
    },
    doneButtonText: {
        color: 'white',
    },
    removeButton: {
        backgroundColor: 'transparent',
    },
    removeButtonText: {
        color: theme.primaryColour.crimson,
        fontWeight: 'bold',
    },
})
