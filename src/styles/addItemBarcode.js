import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../layout/layout";

export const addItemBarcodeStyle = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    height: screenHeight / 2,
  },
  noItemsText: {
    marginTop: 10,
    marginLeft: 10,
  },
  boxItems: {
    justifyContent: "space-between",
    margin: 5,
    // height: "100%",
  },

  buttonArrow: {
    height: 38,
    width: 38,
    borderRadius: 50,
  },
});
