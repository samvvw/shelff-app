import { StyleSheet } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";


export const allChartsStyle = StyleSheet.create({
    container: {
        marginTop: 120,
        height: '50%',
        transform: [{ rotate: '180deg'}], //to start from the bottom 
        position: 'relative'
    },
    innerWrapper: {
        transform: [{ rotate: '180deg'}], 
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10
    },
    details: {
        position: 'relative',
        bottom: 85,
        left: 50,
        height: 80,
        display: 'flex',
        justifyContent: 'space-around'
    }
});