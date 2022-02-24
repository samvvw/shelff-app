import React from 'react'
import {Center, Text} from 'native-base'
import List from './List'


const Storage = ({navigation}) => {

    //Temporary hard coding
    const storageList = ['Fridge', 'Freezer', 'Pantry']

    return (
        <Center>
            <List listItems={storageList} navigation={navigation}/>
        </Center>
    )
}

export default Storage