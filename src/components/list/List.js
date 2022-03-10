import React from 'react'
import { TouchableOpacity, Image, Text} from 'react-native'
import { Center } from 'native-base'
import { FlatGrid } from 'react-native-super-grid';
import { listStyles } from "../../styles/styles";

const List = (props) => {

    const {listItems, setListDetailsOpen, setSelectedList} = props 

    const showListDetails = (item) => {
        setSelectedList(item)
        setListDetailsOpen(true)
    }


    return (
        <Center>
            <FlatGrid
                data={listItems}
                style={listStyles.gridView}  
                spacing={20}            
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => showListDetails(item)} //passing selected category or storage
                        style={listStyles.card}>

                        <Image 
                            source={require('../../../assets/icon.png')} 
                            alt={item}
                            style={listStyles.image}  
                        />
                        <Text style={listStyles.text} >{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </Center>
    )
}

export default List

