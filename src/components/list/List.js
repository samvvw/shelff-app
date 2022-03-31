import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { Center } from 'native-base'
import { FlatGrid } from 'react-native-super-grid'
import { listStyles } from '../../styles/styles'

const List = (props) => {
    const { listType, listItems, navigation } = props

    const goToListDetails = (item) => {
        navigation.push('ListDetails', {
            listType: listType, 
            selectedList: item, 
        })
    }

    return (
        <Center>
            <FlatGrid
                keyExtractor={(item) =>
                    item.itemId + item.creationDate + `${Math.random() * 1000}`
                }
                data={listItems}
                style={listStyles.gridView}
                spacing={20}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => goToListDetails(item.name) }
                        style={listStyles.card}
                    >
                        <Image
                            source={item.icon}
                            alt={item}
                            style={listStyles.image}
                        />
                        <Text style={listStyles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </Center>
    )
}

export default List
