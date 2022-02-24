import React from 'react'
import {Center} from 'native-base'
import List from './List'

const Category = ({navigation}) => {

    //Temporary hard coding
    const categoryList = ['Fruits', 'Canned Food', 'Vegetables', 'Seafoods', 'Bread & Cake', 'Meat', 'Dairy', 'Cold Cuts']


    return (
        <Center>
            <List listItems={categoryList} navigation={navigation}/>
        </Center>
    )
}

export default Category