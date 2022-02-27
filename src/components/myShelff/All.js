import React, {useState} from 'react'
import {Center} from 'native-base'
import {View, Text, Image, Platform } from 'react-native'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
import { allChartsStyles } from "../../styles/styles"

const All = (props) => {

    const {navigation, freshItems, expiringItems, expiredItems, totalItems} = props


    return (
        <Center>
            <View style={allChartsStyles.container}>
                <CircularProgressWithChild
                value={freshItems.length}
                maxValue={totalItems}
                radius={Platform.OS === 'ios' ? 170 : 160}
                activeStrokeColor={'green'}
                inActiveStrokeColor={'green'}
                activeStrokeWidth={23}
                inActiveStrokeWidth={23}
                inActiveStrokeOpacity={0.2}
                >
                    <CircularProgressWithChild
                        value={expiringItems.length}
                        maxValue={totalItems}
                        radius={Platform.OS === 'ios' ? 145 : 137}
                        activeStrokeColor={'orange'}
                        inActiveStrokeColor={'orange'}
                        activeStrokeWidth={25}
                        inActiveStrokeWidth={25}
                        inActiveStrokeOpacity={0.2}
                    >
                        <CircularProgressWithChild
                        value={expiredItems.length}
                        maxValue={totalItems}
                        radius={Platform.OS === 'ios' ? 120 : 112}
                        activeStrokeColor={'red'}
                        inActiveStrokeColor={'red'}
                        activeStrokeWidth={25}
                        inActiveStrokeWidth={25}
                        inActiveStrokeOpacity={0.2}
                        >
                            <View style={allChartsStyles.innerWrapper}>
                                <Image 
                                    source={require('../../../assets/icon.png')} 
                                    alt={'All'}
                                    style={allChartsStyles.image}    
                                />
                                <Text style={allChartsStyles.text}>
                                    {expiringItems.length} items
                                </Text>
                                <Text style={allChartsStyles.message}>
                                    will expire in 7days
                                </Text>
                            </View>
                        </CircularProgressWithChild>
                    </CircularProgressWithChild>
                </CircularProgressWithChild>
            </View>

            <View style={allChartsStyles.details}>
                <Text style={allChartsStyles.detail}>
                    {expiredItems.length} Expired
                </Text>
                <Text style={allChartsStyles.detail}>
                    {expiringItems.length} Expiring
                </Text>
                <Text style={allChartsStyles.detail}>
                    {freshItems.length} Fresh
                </Text>
            </View>

            <View>
                <Text>Food Inventory - Here to put swiperble Lists</Text>
            </View>
        </Center>
    )
}

export default All
