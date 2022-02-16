import React from 'react'
import {Flex, Image, Text, Button} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Onboarding2 = ({navigation, handleNext}) => {

    const toMain = () => {
        navigation.replace('Main')
        AsyncStorage.setItem('isFirstTimeOpen', 'no')
    }

    const toNext = () => {
        handleNext()
    }

    return (
        <Flex alignItems='center'>
            <Image source={require('../../../assets/images/onboarding/onboarding2.jpg')} alt='onboarding2' height='60%'/>
            <Text mt='12' mb='5' fontWeight='bold' fontSize='25'>Feature B</Text>
            <Text w='80%' fontSize='16'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            <Flex flexDirection="row" justifyContent="space-between" alignItems='center' w='80%' my='5'>
                <Text onPress={toMain} w='30%'>SKIP</Text>
                <Button onPress={toNext} w='30%'>NEXT</Button>
            </Flex>
        </Flex>
    )
}

export default Onboarding2