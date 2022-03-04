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
    const query = executeTransaction("select * from tmpItems", db);

    // console.log("resultados de select", JSON.stringify(res1));
    // console.log("query", query);
    setItems(query);
    console.log("res sin JSON . array", query);
    // { rows: { _array } }) => setItems(_array)
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
