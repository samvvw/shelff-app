import React, {useState} from 'react'
import {View, Text, Image, Platform} from 'react-native'
import { singleChartStyles } from "../../styles/styles"
import { theme } from "../../styles/theme"
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
//using 'WithChild' as it accept any child, which I need texts and image here inside of chart

const Fresh = (props) => {

    const { totalItems, numOfItems, status } = props


    return (
        <View style={singleChartStyles.container}>

            <View style={singleChartStyles.numOfItem}>
                <Text>{status}: {numOfItems} items</Text>
            </View>

            <CircularProgressWithChild
                value={numOfItems}
                maxValue={totalItems}
                radius={Platform.OS === 'ios' ? 150 : 140}
                activeStrokeColor={status=='Fresh' ? theme.statusColour.darkCyan : status=='Expiring' ? theme.statusColour.orange : theme.statusColour.firebrickRed}
                inActiveStrokeColor={status=='Fresh' ? theme.statusColour.darkCyan : status=='Expiring' ? theme.statusColour.orange : theme.statusColour.firebrickRed}
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
                inActiveStrokeOpacity={0.2}
            >
                <View style={singleChartStyles.innerWrapper}>
                    <Image 
                        source={require('../../../assets/icon.png')} 
                        alt={'Fresh'}
                        style={singleChartStyles.image}    
                    />
                </View>
            </CircularProgressWithChild>
    
        </View>


    )
}


export default Fresh


