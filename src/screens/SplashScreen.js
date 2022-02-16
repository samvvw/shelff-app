import React, { useEffect, useState } from 'react'
import {Center} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {

    const [isFirstLaunch, setIsFirstLaunch] = useState(true)

    const checkFirstLaunch = async () => {
        const result = await AsyncStorage.getItem('isFirstTimeOpen')
        if(result == null) {
            setIsFirstLaunch(true)
        } else {
            setIsFirstLaunch(false)
        }
    }

    useEffect(async () => {
        checkFirstLaunch() 

        setTimeout(() => {
            navigation.replace(isFirstLaunch ? 'Onboarding' : 'Main')
        }, 5000);

    }, [])



    return (
        <Center h='100%'>
            <Center 
                bg='primary.400' 
                _text={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 40
                }} 
                h='30%'
                w='50%'
            >
            Shelff
            </Center>
        </Center>
    )
}

export default SplashScreen