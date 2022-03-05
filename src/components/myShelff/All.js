import React from 'react'
import {Center} from 'native-base'
import {View, Text, Image, Platform, FlatList } from 'react-native'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
import { allChartsStyles } from "../../styles/styles"
import SwipableList from './SwipableList'

const All = (props) => {

    const {navigation, allItems, freshItems, expiringItems, expiredItems, totalItems, setShelfItems} = props


    const ChartAll = () => {
        return (
        <View style={allChartsStyles.outer}>
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
                                    {allItems.length} items
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
        </View>
        )
    }

    return (
        <Center>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<ChartAll />}
                ListFooterComponent={<SwipableList items={allItems} setShelfItems={setShelfItems}/>}
            />
        </Center>
    )
}

export default All
