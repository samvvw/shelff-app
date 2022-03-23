import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addItemBarcodeStyle } from '../../styles/addItemBarcode'
import { Text, HStack, Button } from 'native-base'
import List from './List'
import { theme } from '../../styles/theme'
const NoItems = ({ textNoItems }) => {
    return <Text style={addItemBarcodeStyle.noItemsText}>{textNoItems}</Text>
}

const ItemsList = ({
    navigation,
    handleArrowButton,
    arrowButton,
    arrItems,
    setArrItems,
}) => {
    return (
        <List
            header={
                <HStack style={addItemBarcodeStyle.boxItems}>
                    {!arrItems?.length ? (
                        <NoItems
                            key="l-header-noitems"
                            textNoItems={"You have '0' items ready to add"}
                        />
                    ) : (
                        <NoItems key="l-header-noitems" textNoItems={''} />
                    )}

                    <Button
                        style={addItemBarcodeStyle.buttonArrow}
                        onPress={handleArrowButton}
                        key="l-header-button"
                    >
                        <Icon
                            size={16}
                            name={arrowButton}
                            color={theme.primaryColour.crimson}
                        />
                    </Button>
                </HStack>
            }
            arrItems={arrItems}
            setArrItems={setArrItems}
            navigation={navigation}
        />
    )
}

export default ItemsList
