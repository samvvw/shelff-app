import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { filter } from 'lodash'
import SwipableList from '../myShelff/SwipableList'
import { listDetailsStyles } from '../../styles/styles'

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
            <SwipableList
                items={listItems}
                allItems={allItems}
                selectedList={selectedList}
            />
        </SafeAreaView>
    )
}

export default ListDetails
