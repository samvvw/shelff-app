import React from 'react'
import {Flex, Image, Text, Button} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Onboarding3 = ({navigation}) => {

    const toMain = () => {
        navigation.replace('Main')
        AsyncStorage.setItem('isFirstTimeOpen', 'no')
    }

    return (
        <Flex alignItems='center'>
            <Image source={require('../../../assets/images/onboarding/onboarding3.jpg')} alt='onboarding3' height='60%'/>
            <Text mt='12' mb='5' fontWeight='bold' fontSize='25'>Feature C</Text>
            <Text w='80%' fontSize='16'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            <Flex flexDirection="row" justifyContent="flex-end" alignItems='center' w='80%' my='5'>
                <Button onPress={toMain} w='30%'>NEXT</Button>
            </Flex>
        </Flex>
    )
}

export default Onboarding3