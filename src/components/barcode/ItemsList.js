import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addItemBarcodeStyle } from '../../styles/addItemBarcode'
import { Text, HStack, Button, VStack, Box } from 'native-base'
import List from './List'

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
    // const [items, setItems] = useState();

    // useEffect(() => {
    //   const db = openDatabase();
    //   const sql = "select * from items where permanent = 0";
    //   const query = executeTransaction(sql, db, setItems);
    //   console.log(items);
    // }, [itemListChange]);

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
                        <Icon size={18} name={arrowButton} />
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
