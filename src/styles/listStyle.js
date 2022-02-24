import { StyleSheet } from "react-native";


export const listStyle = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        width: '100%'
    },
    card: {
        backgroundColor: 'gray',
        width: '100%',
        borderRadius: 20,
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
    }
});