import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { openDatabase, createTables } from '../services/sqllite'
import { View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'

const SplashScreen = ({ navigation }) => {
    const checkFirstLaunch = async () => {
        // AsyncStorage.clear() //to check onboarding
        const firstTimeCheck = await AsyncStorage.getItem('isFirstTimeOpen')
        console.log('firstTimeCheck', firstTimeCheck)
        if (firstTimeCheck == null) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        const db = openDatabase()
        createTables(db)
    }, [])

    useEffect(() => {
        ;(async () => {
            const isFirst = await checkFirstLaunch()

            if (isFirst) {
                setTimeout(() => {
                    navigation.replace('Onboarding')
                }, 4000)
            } else {
                const token = await AsyncStorage.getItem('token')
                if (token) {
                    navigation.navigate('VerticalMenu')
                } else {
                    navigation.replace('GetStarted')
                }
            }
        })()
    }, [])

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <LottieView
                source={require('../assets/splash-better-animation.json')}
                autoPlay
                loop={false}
                style={{
                    width: Dimensions.get('window').width - 200,
                    height: Dimensions.get('window').height - 200,
                    backgroundColor: '#f2f2f2',
                }}
            />
        </View>
    )
}

export default SplashScreen
