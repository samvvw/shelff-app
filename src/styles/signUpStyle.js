import { StyleSheet } from "react-native";
import { styleSizes } from "./styleSizes";

export const signUpStyle = StyleSheet.create({
  container: {
    width: styleSizes.screen.width,
    height: styleSizes.screen.height,
    padding: 10,
  },
  input: {
    width: styleSizes.formInput.width,
  },
  box: {
    paddingBottom: 15,
  },
  button: {
    marginTop: 25,
  },
  checkbox: {
    paddingLeft: 10,
    fontSize: 12,
  },
});
