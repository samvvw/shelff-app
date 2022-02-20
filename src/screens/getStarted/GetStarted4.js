import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { onboardingStyles } from "../../styles/styles";


const GetStarted4 = ({navigation, handleSign}) => {

    const toSign = () => {
        handleSign()
    }

    return (
        <View style={onboardingStyles.screenContanier}>
            <Image 
                source={require('../../../assets/images/onboarding/onboarding4.jpg')} 
                alt='Get Started'
                style={onboardingStyles.image}    
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.text}>Let's get started!</Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={toSign} style={onboardingStyles.button}
                    >
                        <Text style={onboardingStyles.buttonText}>Create an account</Text>
                    </TouchableOpacity>
                    <Text>Would you want to test first our App?
                        <Text style={onboardingStyles.skip}>  Start</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default GetStarted4