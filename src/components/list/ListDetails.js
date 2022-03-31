import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Image, Text } from 'react-native'
import { filter } from 'lodash'
import SwipableList from '../myShelff/SwipableList'
import { listDetailsStyles } from '../../styles/styles'

const Empty = (selectedList) => {
    return (
        <View style={listDetailsStyles.empty}>
            <Image 
                source={require('../../../assets/icon.png')} 
                alt={'icon'}
                style={listDetailsStyles.logo}    
            />
            <Text style={listDetailsStyles.text}>{selectedList} is empty.</Text>
        </View>
    )
}

const ListDetails = ({route}) => {
    const { listType, selectedList, shelfItems, allItems } = route.params

    const [listItems, setListItems] = useState(
        filter(allItems, (item) => {
            return listType === 'Category'
                ? item.category === selectedList
                : item.location === selectedList
        }),
    )

    useEffect(() => {
        setListItems(
            filter(shelfItems, (item) => {
                return listType === 'Category'
                    ? item.action === '' && item.category === selectedList
                    : item.action === '' && item.location === selectedList
            }),
        )
    }, [shelfItems])

    return (
        <SafeAreaView style={listDetailsStyles.container}>
            {listItems.length == 0 ? 
            <Empty />
            :
            <SwipableList
                items={listItems}
                allItems={allItems}
                selectedList={selectedList}
            />
            }
        </SafeAreaView>
    )
}

export default ListDetails
