import React, {useState} from 'react'
import {Center} from 'native-base'
import {View, Text, StyleSheet, Image } from 'react-native'
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
                radius={180}
                activeStrokeColor={'green'}
                inActiveStrokeColor={'green'}
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
                inActiveStrokeOpacity={0.2}
                >
                    <CircularProgressWithChild
                        value={expiringItems.length}
                        maxValue={totalItems}
                        radius={155}
                        activeStrokeColor={'orange'}
                        inActiveStrokeColor={'orange'}
                        activeStrokeWidth={25}
                        inActiveStrokeWidth={25}
                        inActiveStrokeOpacity={0.2}
                    >
                        <CircularProgressWithChild
                        value={expiredItems.length}
                        maxValue={totalItems}
                        radius={130}
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
                                <Text>will expire in 7days</Text>
                            </View>
                        </CircularProgressWithChild>
                    </CircularProgressWithChild>
                </CircularProgressWithChild>
            </View>

            <View style={allChartsStyles.details}>
                <Text>{expiredItems.length} Expired</Text>
                <Text>{expiringItems.length} Expiring</Text>
                <Text>{freshItems.length} Fresh</Text>
            </View>

            <View>
                <Text>Food Inventory - Here to put swiperble Lists</Text>
            </View>
        </Center>
    )
}

export default All
