import React, { useState, useEffect, useContext } from 'react'
import { Center, View } from 'native-base'
import List from './List'
import Bread from '../../../assets/images/icons/Bread.png'
import CanFood from '../../../assets/images/icons/CanFood.png'
import Chicken from '../../../assets/images/icons/Chicken.png'
import Dairy from '../../../assets/images/icons/Dairy.png'
import Fish from '../../../assets/images/icons/Fish.png'
import Veggies from '../../../assets/images/icons/Veggies.png'
import Meat from '../../../assets/images/icons/Meat.png'
import Fruits from '../../../assets/images/icons/Fruits.png'
// import { ItemsContext } from '../../context/ItemsContext'

const Category = ({navigation}) => {
    const [categoryListB, setCategoryList] = useState([])
    // const { categories } = useContext(ItemsContext)

    const categoryList = [
        { name: 'Fruits', icon: Fruits },
        { name: 'Vegetables', icon: Veggies },
        { name: 'Meat', icon: Meat },
        { name: 'Seafood', icon: Fish },
        { name: 'Cold cuts', icon: Chicken },
        { name: 'Dairy', icon: Dairy },
        { name: 'Bread & Cake', icon: Bread },
        { name: 'Canned Food', icon: CanFood },
    ]

    // useEffect(() => {
    //     if (categories?.length > 0) {
    //         console.log('categories', categories)
    //     }
    // }, [categories])

    return (
        <View backgroundColor={'white'}>
            <Center>
                <List
                    listType="Category"
                    listItems={categoryList}
                    navigation={navigation}
                />
            </Center>
        </View>
    )
}

export default Category
