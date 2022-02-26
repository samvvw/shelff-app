import { screenWidth, screenHeight } from "../../layout/layout";
import { StyleSheet } from "react-native";

export const myShelffStyle = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  textEmpty: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTextEmpty: {
    fontSize: 16,
    textAlign: "center",
  },
  emptyBox: {
    height: screenHeight / 2,
    width: screenWidth,

    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    marginBottom: 20,
    height: 80,
    width: 80,
    borderRadius: 20,
    backgroundColor: "lightgray",
  },
});
