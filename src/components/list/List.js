import { Container } from 'native-base';
import React from 'react'
import { TouchableOpacity, Image, Text} from 'react-native'
import { Center } from 'native-base'
import { FlatGrid } from 'react-native-super-grid';
import { listStyles } from "../../styles/styles";

const List = (props) => {

    // console.log(props.listItems)

    //Need to fix hander to show the items inside the category/storage pressed
    const showList = (item) => {
        console.log('pressed', item)
    }

    return (
        <Center>
            <FlatGrid
                data={props.listItems}
                style={listStyles.gridView}  
                spacing={20}            
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => showList(item)}
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
