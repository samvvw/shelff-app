import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, View, Image, Text } from 'react-native'
import { filter } from 'lodash'
import SwipableList from '../myShelff/SwipableList'
import { listDetailsStyles } from '../../styles/styles'

import { UserContext } from '../../context/UserContext'
import { UserItemsContext } from '../../context/UserItemsContext'

const ListDetails = ({route}) => {
    const { listType, selectedList } = route.params

    const { user } = useContext(UserContext)

    const {
        getUserItems,
        shelfItems: shelfItems,
        allItems: allItems,
    } = useContext(UserItemsContext)

    useEffect(() => {
        if (user.uid) {
            getUserItems(user.uid)
        }
    }, [user])

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
            <View style={listDetailsStyles.empty}>
                <Image 
                    source={require('../../../assets/icon.png')} 
                    alt={'icon'}
                    style={listDetailsStyles.image}    
                />
                <Text style={listDetailsStyles.text}>{selectedList} is empty.</Text>
            </View>
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
