import React from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {Center} from 'native-base'
import Chart from './Chart'
import SwipableList from './SwipableList'


const Expiring = (props) => {

    //Temporary hard coding
    const {navigation, expiringItems, totalItems, allItems, setShelfItems} = props
    const numOfItems = expiringItems.length
    const status = 'Expiring'

    return (
        <SafeAreaView backgroundColor={'white'}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Chart numOfItems={numOfItems} totalItems={totalItems} status={status}/>}
                ListFooterComponent={<SwipableList items={expiringItems} status={status} nestedScrollEnabled={true} allItems={allItems} setShelfItems={setShelfItems}/>}
            />
        </SafeAreaView>
    )
}


export default Expiring

