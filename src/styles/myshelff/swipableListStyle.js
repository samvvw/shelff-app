import { screenWidth } from '../../layout/layout'
import { StyleSheet } from 'react-native'

export const swipableListStyle = StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 100,
        margin: 20,
        marginBottom: 0,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderLeftWidth: 10,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 100,
        marginBottom: 15,
    },
    flex: {
        height: 115,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: Platform.OS === 'ios' ? 70 : 60,
        height: Platform.OS === 'ios' ? 70 : 60,
        borderRadius: 20,
    },
    flexRight: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    },
    flexRightChild: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    flexRightChildBottomText: {
        fontSize: 12,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#f786e1',
        right: 75,
    },
    backRightBtnRight: {
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    consumed: {
        backgroundColor: '#28b522',
    },
    expired: {
        backgroundColor: 'red',
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
})
