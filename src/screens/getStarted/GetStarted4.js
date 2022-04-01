import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { onboardingStyles } from '../../styles/styles'

import Logo from '../../../assets/images/logo-with-letter.png'

const GetStarted4 = ({ navigation, handleSign, handleMain }) => {
    const toSign = () => {
        handleSign()
    }

    const toMyShelff = () => {
        handleMain()
    }

    return (
        <View style={onboardingStyles.screenContainer}>
            <View style={onboardingStyles.logoImage}>
                <Image
                    source={Logo}
                    alt="Logo"
                />
            </View>
            <View style={[onboardingStyles.wrapper, onboardingStyles.wrapperGS]}>
                <View style={onboardingStyles.textWrapper}>
                    <Text style={onboardingStyles.text}>
                        Let's get started!
                    </Text>
                </View>
                <View style={onboardingStyles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={toSign}
                        style={onboardingStyles.button}
                    >
                        <Text style={onboardingStyles.buttonText}>
                            Create an account
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        Would you want to test first our App?
                        <Text
                            onPress={toMyShelff}
                            style={onboardingStyles.skip}
                        >
                            {' '}
                            Start
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default GetStarted4
