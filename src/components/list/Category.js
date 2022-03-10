import React, {useState} from 'react'
import {Center} from 'native-base'
import List from './List'
import ListDetails from './ListDetails'

const Category = (props) => {

    const { shelfItems, setShelfItems, allItems } = props
    const [listDetailsOpen, setListDetailsOpen] = useState(false)
    const [selectedList, setSelectedList] = useState()

    //Temporary hard coding
    const categoryList = ['Fruits', 'Canned Food', 'Vegetables', 'Seafoods', 'Bread & Cake', 'Meat', 'Dairy', 'Cold Cuts']
    

    return (
        <Center>
            {!listDetailsOpen ? 
                <List
                    listItems={categoryList} 
                    setSelectedList={setSelectedList}
                    setListDetailsOpen={setListDetailsOpen}
                />
            : 
                <ListDetails
                    listType='Category'
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

export default Category