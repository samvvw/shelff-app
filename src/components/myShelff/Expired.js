import React, {useState} from 'react'
import {Center} from 'native-base'
import {View, Text} from 'react-native'
import Chart from './Chart'

const Expired = (props) => {

    //Temporary hard coding
    const {navigation, expiredItems, totalItems} = props
    const numOfItems = expiredItems.length
    const status = 'Expired'

    return (
        <Center>
            <Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>
            <View>
                <Text>Food Inventory - Here to put swiperble Lists</Text>
            </View>
        </Center>
    )
}


export default Expired

