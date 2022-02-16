import { StyleSheet } from "react-native";
import { styleSizes } from "./styleSizes";

export const signUpStyle = StyleSheet.create({
  heading: {
    padding: 10,
  },
  formStackContainer: {
    width: styleSizes.screen.width,
    padding: 10,
  },
  input: {
    width: styleSizes.formInput.width,
    height: 100,
  },
  box: {
    paddingBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  checkbox: {
    paddingLeft: 10,
    fontSize: 12,
  },
  alreadyAccount: {
    paddingTop: 10,
    width: styleSizes.screen.width,
  },
  buttonLogin: {
    backgroundColor: "transparent",
    color: "#d3d3d3",
  },
  hStack: {
    alignItems: "center",
  },
});
