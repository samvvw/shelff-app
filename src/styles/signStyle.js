import { screenWidth, screenHeight } from "../layout/layout";
import { StyleSheet } from "react-native";
import { styleSizes } from "./styleSizes";

export const signStyle = StyleSheet.create({
  screenContanier: {
    height: screenHeight,
    width: screenWidth,
    padding: 10,
  },
  stack: {
    height: screenHeight,
  },
  heading: {
    paddingTop: 100,
  },
  headingText: {
    fontSize: 72,
  },
  buttonBox: {
    position: "absolute",
    bottom: 70,
  },
  loginButtonBox: {
    position: "absolute",
    bottom: 30,

    width: screenWidth,
  },
  button: {
    margin: 3,
    width: screenWidth - 20,
  },
  buttonLink: {
    backgroundColor: "transparent",
  },
  buttonLinkText: {
    color: "#000",
  },
});
