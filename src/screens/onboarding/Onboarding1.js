import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { onboardingStyles } from '../../styles/styles'

const Onboarding1 = ({ navigation, handleNext, handleSkip }) => {
    const toNext = () => {
        handleNext()
    }

    const toGetStarted = () => {
        handleSkip()
    }

    return (
        <View style={onboardingStyles.screenContainer}>
            <Image
                source={require('../../../assets/images/onboarding/onboarding1.jpg')}
                alt="onboarding1"
                style={onboardingStyles.image}
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.heading}>
                        How to Add New Item
                    </Text>
                    <Text style={onboardingStyles.text}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page.
                    </Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    {/* <TouchableOpacity
                        onPress={toNext}
                        style={onboardingStyles.button}
                    >
                        <Text style={onboardingStyles.buttonText}>
                            Continue
                        </Text>
                    </TouchableOpacity> */}
                    <Text onPress={toGetStarted} style={onboardingStyles.skip}>
                        Skip
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Onboarding1
