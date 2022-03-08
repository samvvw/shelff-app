import react from 'react'

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

const List = ({ navigation, arrItems, setArrItems }) => {
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
            paddingBottom={20}
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
                                {item.dExpirationDate}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Button onPress={() => handleRemoveItem(item.idItem)}>
                            Remove
                        </Button>
                    </HStack>
                </Box>
            )}
            ListFooterComponent={
                arrItems?.length && (
                    <Center>
                        <Button
                            style={{ width: '70%', marginTop: 20 }}
                            onPress={saveItems}
                        >
                            <Text>Done</Text>
                        </Button>
                    </Center>
                )
            }
        />
    )
}

export default List
