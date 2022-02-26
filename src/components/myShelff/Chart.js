import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'
import { singleChartStyles } from "../../styles/styles"
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
//using 'WithChild' as it accept any child, which I need texts and image here inside of chart

const Fresh = (props) => {

    const { totalItems, numOfItems, status } = props


    return (
        <View style={singleChartStyles.container}>
            <CircularProgressWithChild
                value={numOfItems}
                maxValue={totalItems}
                radius={155}
                activeStrokeColor={status=='Fresh' ? 'green' : status=='Expiring' ? 'orange' : 'red'}
                inActiveStrokeColor={status=='Fresh' ? 'green' : status=='Expiring' ? 'orange' : 'red'}
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
                    <Text style={singleChartStyles.numOfItem}>
                        {numOfItems} items
                    </Text>
                    <Text style={singleChartStyles.message}>
                        {status=='Fresh' ? 'Fresh ready to consume' : status=='Expiring' ? 'About to expire,\ndonate or eat them' : 'Expired'}
                    </Text>
                </View>
            </CircularProgressWithChild>
    
        </View>
    )
}


export default Fresh


