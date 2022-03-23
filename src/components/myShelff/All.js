import React from 'react'
import { Center } from 'native-base'
import {
    View,
    Text,
    Image,
    Platform,
    FlatList,
    SafeAreaView,
} from 'react-native'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
import { allChartsStyles } from '../../styles/styles'
import { theme } from '../../styles/theme'
import SwipableList from './SwipableList'

import Logo from '../../../assets/images/FinalShelff-Logo.png'

const All = (props) => {
    const {
        navigation,
        allItems,
        freshItems,
        expiringItems,
        expiredItems,
        totalItems,
    } = props

    const ChartAll = () => {
        return (
            <View style={allChartsStyles.outer}>
                <View style={allChartsStyles.container}>
                    <CircularProgressWithChild
                        value={freshItems.length}
                        maxValue={totalItems}
                        radius={Platform.OS === 'ios' ? 170 : 160}
                        activeStrokeColor={theme.statusColour.darkCyan}
                        inActiveStrokeColor={theme.statusColour.darkCyan}
                        activeStrokeWidth={23}
                        inActiveStrokeWidth={23}
                        inActiveStrokeOpacity={0.2}
                    >
                        <CircularProgressWithChild
                            value={expiringItems.length}
                            maxValue={totalItems}
                            radius={Platform.OS === 'ios' ? 145 : 137}
                            activeStrokeColor={theme.statusColour.orange}
                            inActiveStrokeColor={theme.statusColour.orange}
                            activeStrokeWidth={25}
                            inActiveStrokeWidth={25}
                            inActiveStrokeOpacity={0.2}
                        >
                            <CircularProgressWithChild
                                value={expiredItems.length}
                                maxValue={totalItems}
                                radius={Platform.OS === 'ios' ? 120 : 112}
                                activeStrokeColor={
                                    theme.statusColour.firebrickRed
                                }
                                inActiveStrokeColor={
                                    theme.statusColour.firebrickRed
                                }
                                activeStrokeWidth={25}
                                inActiveStrokeWidth={25}
                                inActiveStrokeOpacity={0.2}
                            >
                                <View style={allChartsStyles.innerWrapper}>
                                    <Image
                                        source={Logo}
                                        alt="Logo"
                                        style={allChartsStyles.image}
                                    />
                                </View>
                            </CircularProgressWithChild>
                        </CircularProgressWithChild>
                    </CircularProgressWithChild>
                </View>

                <View style={allChartsStyles.details}>
                    <Text style={allChartsStyles.detailsText}>
                        Fresh: {freshItems.length} item{freshItems.length <= 1? '' : 's'} ・ Expiring: {expiringItems.length} item{expiringItems.length <= 1? '' : 's'} ・ Expired: {expiredItems.length} item{expiringItems.length <= 1? '' : 's'}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView backgroundColor={'white'}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<ChartAll />}
                ListFooterComponent={
                    <SwipableList items={allItems} allItems={allItems} />
                }
            />
        </SafeAreaView>
    )
}

export default All
