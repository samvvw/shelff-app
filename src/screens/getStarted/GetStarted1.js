import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { onboardingStyles } from '../../styles/styles'

const GetStarted1 = ({ navigation, handleNext, handleSign }) => {
    const toNext = () => {
        handleNext()
    }

    const toSign = () => {
        handleSign()
    }

    return (
        <View style={onboardingStyles.screenContainer}>
            <Image
                source={require('../../../assets/images/onboarding/onboarding4.jpg')}
                alt="Get Started"
                style={onboardingStyles.image}
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.text}>
                        Welcome to Shelff a food management program that adapts
                        to you.
                    </Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={toNext}
                        style={onboardingStyles.button}
                    >
                        <Text style={onboardingStyles.buttonText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        Already have an account?
                        <Text onPress={toSign} style={onboardingStyles.skip}>
                            {' '}
                            Login
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default GetStarted1
