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
                source={require('../../../assets/images/onboarding/onboarding1.png')}
                alt="onboarding1"
                style={onboardingStyles.image}
            />
            <View style={[onboardingStyles.wrapper, onboardingStyles.wrapperGS]}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.heading}>
                        Add New Items
                    </Text>
                    <Text style={onboardingStyles.text}>
                        They are three ways to add a new items to your Shelff. You just need to click on the “Add button” to choose the way that best suits you.
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
