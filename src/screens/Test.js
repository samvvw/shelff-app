import React from "react";
import Footer from "../layout/Footer";
import { View } from "native-base";
import { StyleSheet } from "react-native";

import ReadialMenu from "../layout/RadialMenu";

import { screenHeight, screenWidth } from "../layout/layout";
const Test = () => {
  return (
    <View style={styleTest.screen}>
      <ReadialMenu />
      <Footer />
    </View>
  );
};

export default Test;

const styleTest = StyleSheet.create({
  screen: {
    width: screenWidth,
    height: "100%",

    backgroundColor: "red",
  },
});
