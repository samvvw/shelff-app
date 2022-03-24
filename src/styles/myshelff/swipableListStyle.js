import { screenWidth, screenHeight } from '../../layout/layout'
import { StyleSheet } from 'react-native'
import { theme } from "../theme"

export const swipableListStyle = StyleSheet.create({
    container: {
        width: screenWidth,
        paddingBottom: 50,
        backgroundColor: 'white',
        minHeight: screenHeight/2.7,
    },
    containerForList: {
        height: screenHeight * 0.7,
    },
    essentialContainer: {
        width: screenWidth,
        backgroundColor: 'white',
        height: screenHeight,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    noItem: {
        marginTop: 40,
        textAlign: 'center',
        height: 350,
        fontSize:25,
    },
    backTextWhite: {
        color: 'white',
    },
    rowFront: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 80,
        margin: 20,
        marginBottom: 0,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderLeftWidth: 5,
    },
    rowFrontVisible: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 80,
        marginBottom: 15,
    },
    flex: {
        height: 95,
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
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    flexRightChild: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    essential: {
        position: 'relative',
        left: 20,
        bottom: 10
    },
    flexRightChildBottomText: {
        fontSize: 13,
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
    rowBackEssential: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 20,
        marginBottom: 5,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 90,
        padding: 0,
    },
    backRightBtnLeft: {
        backgroundColor: theme.primaryColour.violetRed,
        right: 90,
    },
    backRightBtnRight: {
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    consumed: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColour.crimson,
    },
    donated: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColour.violetRed,
    },
    expired: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColour.violetRed,
    },
    removeEssential: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColour.violetRed,
    },
    trash: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 11,
        marginTop: 5,
    }
})
