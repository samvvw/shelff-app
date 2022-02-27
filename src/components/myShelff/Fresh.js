import React, {useState, useEffect} from 'react'
import {Center} from 'native-base'
import {View, Text} from 'react-native'
import Chart from './Chart'

const Fresh = (props) => {

    //Temporary hard coding
    const {navigation, freshItems, totalItems} = props
    const numOfItems = freshItems.length
    const status = 'Fresh'

    return (
        <Center>
            <Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>
            <View>
                <Text>Food Inventory - Here to put swiperble Lists</Text>
            </View>
        </Center>
    )
}


export default Fresh

