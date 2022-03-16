import React, { useState } from 'react'
import { Center, View } from 'native-base'
import List from './List'
import ListDetails from './ListDetails'

import Bread from '../../../assets/images/icons/Bread.png'
import CanFood from '../../../assets/images/icons/CanFood.png'
import Chicken from '../../../assets/images/icons/Chicken.png'
import Dairy from '../../../assets/images/icons/Dairy.png'
import Fish from '../../../assets/images/icons/Fish.png'
import Veggies from '../../../assets/images/icons/Veggies.png'
import Meat from '../../../assets/images/icons/Meat.png'
import Fruits from '../../../assets/images/icons/Fruits.png'

const Category = (props) => {
    const { shelfItems, setShelfItems, allItems } = props
    const [listDetailsOpen, setListDetailsOpen] = useState(false)
    const [selectedList, setSelectedList] = useState()

    const categoryList = [
        { name: 'Fruits', icon: Fruits },
        { name: 'Canned Food', icon: CanFood },
        { name: 'Vegetables', icon: Veggies },
        { name: 'Seafoods', icon: Fish },
        { name: 'Bread & Cake', icon: Bread },
        { name: 'Meat', icon: Meat },
        { name: 'Dairy', icon: Dairy },
        { name: 'Chicken', icon: Chicken },
    ]

    return (
        <View backgroundColor={'white'}>
            <Center>
                {!listDetailsOpen ? (
                    <List
                        listItems={categoryList}
                        setSelectedList={setSelectedList}
                        setListDetailsOpen={setListDetailsOpen}
                    />
                ) : (
                    <ListDetails
                        listType="Category"
                        selectedList={selectedList}
                        shelfItems={shelfItems}
                        setShelfItems={setShelfItems}
                        allItems={allItems}
                        setListDetailsOpen={setListDetailsOpen}
                    />
                )}
            </Center>
        </View>
    )
}

export default Category
