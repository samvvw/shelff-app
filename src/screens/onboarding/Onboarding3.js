import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { onboardingStyles } from '../../styles/styles'

const Onboarding3 = ({ navigation, handleSkip }) => {
    const toGetStarted = () => {
        handleSkip()
    }

    return (
        <View style={onboardingStyles.screenContainer}>
            <Image
                source={require('../../../assets/images/onboarding/onboarding3.jpg')}
                alt="onboarding3"
                style={onboardingStyles.image}
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.heading}>
                        Learn Preservation Tips
                    </Text>
                    <Text style={onboardingStyles.text}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page.
                    </Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={toGetStarted}
                        style={onboardingStyles.button}
                    >
                        <Text style={onboardingStyles.buttonText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                    <Text onPress={toGetStarted} style={onboardingStyles.skip}>
                        Skip
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Onboarding3
