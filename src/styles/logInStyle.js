import { screenWidth, screenHeight } from "../services/layout";
import { StyleSheet } from "react-native";
// import { styleSizes } from "./styleSizes";

export const loginInStyle = StyleSheet.create({
  screenContanier: {
    height: screenHeight,
    width: screenWidth,
    padding: 16,
  },
  heading: {
    // padding: 10
    padding: 0,
    marginTop: 21,
    backgroundColor: "red",
    height: 50,
    alignContent: "flex-end",
  },
  hedingText: {
    fontSize: 24,
  },
  input: {},
  required: {
    color: "red",
  },
  text: {
    fontSize: 14,
  },
  box: {
    marginTop: 24,
  },
  forgotPassword: {
    backgroundColor: "transparent",
  },
  forgotPasswordText: {
    width: screenWidth - 32,
    textAlign: "right",
    color: "blue",
  },
  buttonsBox: {
    marginTop: 46,
  },
  buttonText: {
    fontSize: 17,
  },
});
