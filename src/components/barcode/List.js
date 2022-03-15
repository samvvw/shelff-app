import react from 'react'
import { newItemListStyles } from '../../styles/styles'

import {
    Box,
    FlatList,
    HStack,
    Text,
    Spacer,
    VStack,
    Button,
    Center,
} from 'native-base'

import { saveItemsToLocalStorage } from './saveItems'

const List = ({ navigation, arrItems, setArrItems, header }) => {
    const saveItems = () => {
        saveItemsToLocalStorage(arrItems)
        setArrItems([])
        navigation.push('VerticalMenu')
    }

    const handleRemoveItem = (idItem) => {
        console.log('Full Array', arrItems)
        const newArrayItems = arrItems.filter((item) => {
            return item.idItem != idItem
        })
        console.log('New Array', newArrayItems)
        setArrItems(newArrayItems)
    }

    return (
        <FlatList
            style={{ height: '100%' }}
            ListHeaderComponent={header}
            data={arrItems}
            keyExtractor={(item) => item.idItem}
            renderItem={({ item }) => (
                <Box
                    borderBottomWidth="1"
                    _dark={{
                        borderColor: 'gray.600',
                    }}
                    borderColor="coolGray.200"
                    pl="4"
                    pr="5"
                    py="2"
                >
                    <HStack space={3} justifyContent="space-between">
                        <VStack>
                            <Text
                                _dark={{
                                    color: 'warmGray.50',
                                }}
                                color="coolGray.800"
                                bold
                            >
                                {item.cItemName}
                            </Text>
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: 'warmGray.200',
                                }}
                            >
                                {item.dexpirationdate}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Button
                            style={newItemListStyles.removeButton}
                            onPress={() => handleRemoveItem(item.idItem)}
                        >
                            <Text style={newItemListStyles.removeButtonText}>
                                Remove
                            </Text>
                        </Button>
                    </HStack>
                </Box>
            )}
            ListFooterComponent={
                arrItems?.length && (
                    <Center>
                        <Button
                            style={newItemListStyles.doneButton}
                            onPress={saveItems}
                        >
                            <Text style={newItemListStyles.doneButtonText}>
                                Done
                            </Text>
                        </Button>
                    </Center>
                )
            }
        />
    )
}

export default List
