import { StyleSheet } from "react-native";
import { styleSizes } from "./styleSizes";

export const signUpStyle = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 24,
  },
  formStackContainer: {
    // padding: 10,

    // width: "100%",
    flex: 1,
    margin: 0,
  },
  input: {
    width: styleSizes.formInput.width,
    height: 100,
  },
  box: {
    paddingBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  textPriority: {
    fontSize: 12,
    marginLeft: 27,
    marginRight: 27,
  },
  checkbox: {
    alignContent: "flex-start",
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 12,
  },
  alreadyAccount: {
    paddingTop: 10,
    width: styleSizes.screen.width,
  },
  buttonLogin: {
    backgroundColor: "transparent",
    color: "#d3d3d3",
    fontSize: 16,
  },
  hStack: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
