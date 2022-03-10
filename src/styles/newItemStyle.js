import { StyleSheet } from 'react-native'

export const newItemStyle = StyleSheet.create({
    mainStack: { paddingLeft: 10, paddingRight: 10 },
    modal: {
        marginTop: 90,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
        backgroundColor: 'white',
    },

    labels: {
        fontSize: 17,
    },
    labelBoxDate: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    labelBox: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    counterButton: {
        height: 40,
        width: 40,
        backgroundColor: 'transparent',
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 50,
        marginLeft: 5,
        marginRight: 5,
    },
    category: {
        marginRight: 20,

        alignContent: 'center',
        alignItems: 'center',
    },
    counterHBar: {
        width: '100%',

        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    counterHBarDate: {
        width: '100%',
        alignItems: 'flex-end',
    },
    dateBox: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    counterButtonsHStack: {
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'transparent',
        width: 80,
    },
    cancelButtonText: {
        color: 'blue',
        textAlign: 'left',
        width: 80,
        paddingLeft: 10,
        fontSize: 20,
    },
    codeNumberText: {
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '50%',
    },
    codeNumberBox: {
        width: '100%',
        alignItems: 'center',
    },
    saveButton: {
        marginBottom: 10,
        backgroundColor: 'rgba(0, 122, 255, 1)',
    },
    moreItemsButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(0, 122, 255, 1)',
    },
    CategoryText: {
        paddingLeft: 15,
        fontSize: 14,
    },

    noBarCode_Text1: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
    },
    noBarCode_Text2: {
        fontSize: 13,
    },
    itemNameText: {
        fontSize: 28,
        marginTop: 15,
        paddingTop: 10,
        marginBottom: 15,
    },
})
