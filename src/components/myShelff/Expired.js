import React from 'react'
import {FlatList} from 'react-native'
import {Center} from 'native-base'
import Chart from './Chart'
import SwipableList from './SwipableList'

const Expired = (props) => {

    //Temporary hard coding
    const {navigation, expiredItems, totalItems} = props
    const numOfItems = expiredItems.length
    const status = 'Expired'

    return (
        <Center>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>}
                ListFooterComponent={<SwipableList items={expiredItems} status={status} nestedScrollEnabled={true}/>}
            />
        </Center>
    )
}


export default Expired

