import { screenWidth, screenHeight } from "../layout/layout";
import { StyleSheet } from "react-native";
// import { styleSizes } from "./styleSizes";

export const loginInStyle = StyleSheet.create({
  screenContanier: {
    height: screenHeight,
    width: screenWidth,
    padding: 16,
  },
  heading: {
    marginTop: 21,
  },
  hedingText: {
    paddingTop: 10,
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
    marginTop: 20,
  },

  forgotPasswordText: {
    width: screenWidth - 32,
    textAlign: "right",
    color: "blue",
    fontSize: 11,
  },
  buttonsBox: {
    marginTop: 46,
  },
  buttonText: {
    fontSize: 17,
  },
  boxTerm: {
    marginTop: 42,
    borderBottomColor: "gray",
    borderStyle: "solid",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },

  termsText: {
    fontSize: 12,
  },
  buttonTermsText: {
    color: "blue",
    fontSize: 12,
    marginLeft: 7,
  },
  signUpText: {
    fontSize: 16,
  },
  signUptext: {
    color: "blue",
    marginLeft: 12,
  },
});
