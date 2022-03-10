import React, {useState}  from 'react'
import {Center} from 'native-base'
import List from './List'
import ListDetails from './ListDetails'

const Storage = (props) => {

    const { shelfItems, setShelfItems, allItems} = props
    const [listDetailsOpen, setListDetailsOpen] = useState(false)
    const [selectedList, setSelectedList] = useState()

    //Temporary hard coding
    const storageList = ['Fridge', 'Freezer', 'Pantry']

    return (
        <Center>
            {!listDetailsOpen ? 
                <List
                    listItems={storageList} 
                    setSelectedList={setSelectedList}
                    setListDetailsOpen={setListDetailsOpen}
                />
            : 
                <ListDetails
                    listType='Storage'
                    selectedList={selectedList}
                    shelfItems={shelfItems}
                    setShelfItems={setShelfItems}
                    allItems={allItems} 
                    setListDetailsOpen={setListDetailsOpen}
                />
            }
        </Center>
    )
}

export default Storage