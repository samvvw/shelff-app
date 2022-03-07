import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addItemBarcodeStyle } from "../../styles/addItemBarcode";
import { Text, HStack, Button, VStack, Box } from "native-base";
import { openDatabase, executeTransaction } from "../../services/sqllite";
import List from "./List";
import { useState, useEffect } from "react";

const Notems = () => {
  return (
    <Text style={addItemBarcodeStyle.noItemsText}>
      You have "0" items ready to add
    </Text>
  );
};

const ItemsList = (props) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const db = openDatabase();
    const sql = "select * from items";
    const query = executeTransaction(sql, db, setItems);
  }, [props.itemListChange]);

  return (
    <>
      <VStack>
        <HStack style={addItemBarcodeStyle.boxItems}>
          {!items && <Notems />}

          <Button
            style={addItemBarcodeStyle.buttonArrow}
            onPress={props.handleArrowButton}
          >
            <Icon size={18} name={props.arrowButton} />
          </Button>
        </HStack>

        <List items={items} />
      </VStack>
    </>
  );
};

export default ItemsList;
