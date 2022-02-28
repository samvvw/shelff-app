import React, {useState} from 'react'
import {Center} from 'native-base'
import {View, Text} from 'react-native'
import Chart from './Chart'

const Expiring = (props) => {

    //Temporary hard coding
    const {navigation, expiringItems, totalItems} = props
    const numOfItems = expiringItems.length
    const status = 'Expiring'

    return (
        <Center>
            <Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>
            <View>
                <Text>Food Inventory - Here to put swiperble Lists</Text>
            </View>
        </Center>
    )
}


export default Expiring

