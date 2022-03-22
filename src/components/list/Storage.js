import React, { useState } from 'react'
import { Center, View } from 'native-base'
import List from './List'
import ListDetails from './ListDetails'
import Fridge from '../../../assets/images/icons/Fridge.png'
import Frezzer from '../../../assets/images/icons/Frezzer.png'
import Pantry from '../../../assets/images/icons/Pantry.png'

const Storage = (props) => {
    const { shelfItems, allItems } = props
    const [listDetailsOpen, setListDetailsOpen] = useState(false)
    const [selectedList, setSelectedList] = useState()

    const storageList = [
        { name: 'Fridge', icon: Fridge },
        { name: 'Freezer', icon: Frezzer },
        { name: 'Pantry', icon: Pantry },
    ]

    return (
        <View backgroundColor={'white'}>
            <Center>
                {!listDetailsOpen ? (
                    <List
                        listItems={storageList}
                        setSelectedList={setSelectedList}
                        setListDetailsOpen={setListDetailsOpen}
                    />
                ) : (
                    <ListDetails
                        listType="Storage"
                        selectedList={selectedList}
                        shelfItems={shelfItems}
                        allItems={allItems}
                        setListDetailsOpen={setListDetailsOpen}
                    />
                )}
            </Center>
        </View>
    )
}

export default Storage
