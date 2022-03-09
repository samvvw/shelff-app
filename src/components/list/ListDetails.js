import React, {useState, useEffect} from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import { filter } from 'lodash'
import SwipableList from '../myShelff/SwipableList'
import { listDetailsStyles } from "../../styles/styles"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const ListDetails = (props) => {

    const {listType, selectedList, shelfItems, setShelfItems, allItems, setListDetailsOpen} = props

    const [listItems, setListItems] = useState(filter(allItems, item => {
        return listType === 'Category' ? item.category === selectedList : item.location === selectedList
    }))

    useEffect(() => {
        setListItems(filter(shelfItems, item => {return listType === 'Category' ? (item.action === '' && item.category === selectedList) : (item.action === '' && item.location === selectedList) }))
    }, [shelfItems])

    return (
        <SafeAreaView style={listDetailsStyles.container}>
            <TouchableOpacity 
                onPress={() => setListDetailsOpen(false)}
                style={listDetailsStyles.goBack}
            >
                <Text style={listDetailsStyles.icon}> 
                    <MaterialCommunityIcons
                        name="chevron-double-left"
                        size={30}
                        color="#535657"
                    />
                </Text>
                <Text style={listDetailsStyles.text}>
                    {listType} List
                </Text>
            </TouchableOpacity>
            
            <SwipableList 
                items={listItems} 
                allItems={allItems} 
                setShelfItems={setShelfItems}
                selectedList={selectedList}
            />
        </SafeAreaView>
    )
}

export default ListDetails