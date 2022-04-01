import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { onboardingStyles } from '../../styles/styles'

const Onboarding2 = ({ navigation, handleNext, handleSkip }) => {
    const toNext = () => {
        handleNext()
    }

    const toGetStarted = () => {
        handleSkip()
    }

    return (
        <View style={onboardingStyles.screenContainer}>
            <Image
                source={require('../../../assets/images/onboarding/onboarding2.png')}
                alt="onboarding2"
                style={onboardingStyles.image}
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.heading}>
                        Manage an Item
                    </Text>
                    <Text style={onboardingStyles.text}>
                        You can manage your Shelff items individualy by swipping on each card. The status of each item will identify the possible actions for them.
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

export default Onboarding2
