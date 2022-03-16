import React, { useEffect, useState } from 'react'
import { Center } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { openDatabase, createTables } from '../services/sqllite'
import { Image } from 'react-native'

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
                }, 1200)
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
        <Center h="100%">
            <Center>
                <Image
                    source={require('../../assets/images/FinalShelff-Logo.png')}
                />
            </Center>
        </Center>
    )
}

export default SplashScreen
