import { screenWidth, screenHeight } from "../services/layout";
import { StyleSheet } from "react-native";

export const signStyle = StyleSheet.create({
  screenContanier: {
    height: screenHeight,
    padding: 10,
  },
  heading: {
    paddingTop: 180,
  },
  headingText: {
    fontSize: 72,
  },
  buttonBox: {
    marginTop: screenHeight / 2.7,
  },
  button: {
    margin: 3,
    width: screenWidth / 2,
  },
  buttonLink: {
    backgroundColor: "#fff",
  },
  buttonLinkText: {
    color: "#000",
  },
});
