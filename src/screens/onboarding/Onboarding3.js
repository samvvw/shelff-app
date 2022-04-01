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
                source={require('../../../assets/images/onboarding/onboarding3.png')}
                alt="onboarding3"
                style={onboardingStyles.image}
            />
            <View style={onboardingStyles.wrapper}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.heading}>
                        Essential List
                    </Text>
                    <Text style={onboardingStyles.text}>
                        You can create an essential item list by toggling on the related button which you can edit on the item detailed page. This feature will help you to add the items in the future.
                    </Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    <Text onPress={toGetStarted} style={onboardingStyles.skip}>
                        Next
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Onboarding3
