import React from 'react'
import {FlatList} from 'react-native'
import {Center} from 'native-base'
import Chart from './Chart'
import SwipableList from './SwipableList'

const Fresh = (props) => {

    //Temporary hard coding
    const {navigation, freshItems, totalItems} = props
    const numOfItems = freshItems.length
    const status = 'Fresh'

    return (
        <Center>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>}
                ListFooterComponent={<SwipableList items={freshItems} status={status} nestedScrollEnabled={true} />}
            />
        </Center>
    )
}


export default Fresh

