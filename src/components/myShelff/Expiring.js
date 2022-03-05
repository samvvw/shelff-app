import React from 'react'
import {FlatList} from 'react-native'
import {Center} from 'native-base'
import Chart from './Chart'
import SwipableList from './SwipableList'


const Expiring = (props) => {

    //Temporary hard coding
    const {navigation, expiringItems, totalItems} = props
    const numOfItems = expiringItems.length
    const status = 'Expiring'

    return (
        <Center>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>}
                ListFooterComponent={<SwipableList items={expiringItems} status={status} nestedScrollEnabled={true}/>}
            />
        </Center>
    )
}


export default Expiring

