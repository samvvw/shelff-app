import React, { useState } from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { singleChartStyles } from '../../styles/styles'
import { theme } from '../../styles/theme'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
import LottieView from 'lottie-react-native'
//using 'WithChild' as it accept any child, which I need texts and image here inside of chart

const Fresh = (props) => {
    const { totalItems, numOfItems, status } = props

    return (
        <View style={singleChartStyles.container}>
            <View style={singleChartStyles.numOfItem}>
                <Text>
                    {status}: {numOfItems} item{numOfItems <= 1 ? '' : 's'}
                </Text>
            </View>

            <CircularProgressWithChild
                value={numOfItems}
                maxValue={totalItems}
                radius={Platform.OS === 'ios' ? 150 : 140}
                activeStrokeColor={
                    status == 'Fresh'
                        ? theme.statusColour.darkCyan
                        : status == 'Expiring'
                        ? theme.statusColour.orange
                        : theme.statusColour.firebrickRed
                }
                inActiveStrokeColor={
                    status == 'Fresh'
                        ? theme.statusColour.darkCyan
                        : status == 'Expiring'
                        ? theme.statusColour.orange
                        : theme.statusColour.firebrickRed
                }
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
                inActiveStrokeOpacity={0.2}
            >
                <View style={singleChartStyles.innerWrapper}>
                    {status === 'Fresh' && (
                        <LottieView
                            source={require('../../assets/fresh-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 140,
                                height: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )}
                    {status === 'Expiring' && (
                        <LottieView
                            source={require('../../assets/expiring-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 140,
                                height: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )}
                    {status !== 'Fresh' && status !== 'Expiring' && (
                        <LottieView
                            source={require('../../assets/expired-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 140,
                                height: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )}
                </View>
            </CircularProgressWithChild>
        </View>
    )
}

export default Fresh
