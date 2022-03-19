import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getStartedStyles } from '../../styles/styles'

const GetStarted2 = ({ navigation, handleNext, handleMain }) => {
    const toNext = () => {
        handleNext()
    }

    const toMyShelff = () => {
        handleMain()
    }

    return (
        <View style={getStartedStyles.screenContainer}>
            <View style={getStartedStyles.wrapper}>
                <View style={getStartedStyles.indicator}>
                    <View style={getStartedStyles.indicatorOne}></View>
                    <View style={getStartedStyles.indicatorTwo}></View>
                </View>
                <View style={getStartedStyles.textWrapper}>
                    <Text style={getStartedStyles.heading}>
                        Would you like to receive reminders?
                    </Text>
                    <Text style={getStartedStyles.text}>
                        With reminders, you're twice as likely to stay
                        consistent.
                    </Text>
                </View>
                <View style={getStartedStyles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={toNext}
                        style={getStartedStyles.blueButton}
                    >
                        <Text style={getStartedStyles.whiteText}>
                            Yes(Recommended)
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toMyShelff}
                        style={getStartedStyles.whiteButton}
                    >
                        <Text style={getStartedStyles.blueText}>Not now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted2
