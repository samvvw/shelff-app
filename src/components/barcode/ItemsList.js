import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addItemBarcodeStyle } from "../../styles/addItemBarcode";
import { Text, HStack, Button, VStack, Box } from "native-base";
import { openDatabase, executeTransaction } from "../../services/sqllite";
import List from "./List";
import { useState, useEffect } from "react";

const NoItems = ({ textNoItems }) => {
  return <Text style={addItemBarcodeStyle.noItemsText}>{textNoItems}</Text>;
};

const ItemsList = ({
  navigation,
  handleArrowButton,
  arrowButton,
  itemListChange,
}) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const db = openDatabase();
    const sql = "select * from items where permanent = 0";
    const query = executeTransaction(sql, db, setItems);
    console.log(items);
  }, [itemListChange]);

  return (
    <>
      <VStack>
        <HStack style={addItemBarcodeStyle.boxItems}>
          {!items?.length ? (
            <NoItems textNoItems={"You have '0' items ready to add"} />
          ) : (
            <NoItems textNoItems={""} />
          )}

          <Button
            style={addItemBarcodeStyle.buttonArrow}
            onPress={handleArrowButton}
          >
            <Icon size={18} name={arrowButton} />
          </Button>
        </HStack>

        <List items={items} navigation={navigation} />
      </VStack>
    </>
  );
};

export default ItemsList;
