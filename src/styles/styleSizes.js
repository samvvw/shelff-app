import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../services/layout";

export const styleSizes = StyleSheet.create({
  bigButton: {
    width: screenWidth / 2,
  },
  formInput: {
    maxWidth: 100,
  },
  screen: {
    width: screenWidth,
    height: screenHeight,
  },
});
