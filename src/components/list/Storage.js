import React from 'react'
import { Center, View } from 'native-base'
import List from './List'
import Fridge from '../../../assets/images/icons/Fridge.png'
import Freezer from '../../../assets/images/icons/Freezer.png'
import Pantry from '../../../assets/images/icons/Pantry.png'

const Storage = ({navigation}) => {

    const storageList = [
        { name: 'Fridge', icon: Fridge },
        { name: 'Freezer', icon: Freezer },
        { name: 'Pantry', icon: Pantry },
    ]

    return (
        <View backgroundColor={'white'}>
            <Center>
                <List
                    listType="Storage"
                    listItems={storageList}
                    navigation={navigation}
                />
            </Center>
        </View>
    )
}

export default Storage
