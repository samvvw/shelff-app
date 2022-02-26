import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addItemBarcodeStyle } from "../../styles/addItemBarcode";
import { Text, HStack, Button } from "native-base";
const Notems = () => {
  return (
    <Text style={addItemBarcodeStyle.noItemsText}>
      You have "0" items ready to add
    </Text>
  );
};

const ItemsList = (props) => {
  return (
    <HStack style={addItemBarcodeStyle.boxItems}>
      <Notems />
      <Button
        style={addItemBarcodeStyle.buttonArrow}
        onPress={props.handleArrowButton}
      >
        <Icon size={18} name={props.arrowButton} />
      </Button>
    </HStack>
  );
};

export default ItemsList;
