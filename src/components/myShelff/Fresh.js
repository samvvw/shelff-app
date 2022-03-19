import React from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {Center} from 'native-base'
import Chart from './Chart'
import SwipableList from './SwipableList'

const Fresh = (props) => {

    //Temporary hard coding
    const {navigation, freshItems, totalItems, allItems, setShelfItems} = props
    const numOfItems = freshItems.length
    const status = 'Fresh'

    return (
        <SafeAreaView backgroundColor={'white'}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>}
                ListFooterComponent={<SwipableList items={freshItems} status={status} nestedScrollEnabled={true} allItems={allItems} setShelfItems={setShelfItems}/>}
            />
        </SafeAreaView>
    )
}


export default Fresh

