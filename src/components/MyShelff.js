import React from "react";
import { View, Box, Text, VStack } from "native-base";
import { myShelffStyles } from "../styles/styles";

const Empty = () => {
  return (
    <Box style={myShelffStyles.emptyBox}>
      <Box style={myShelffStyles.box}></Box>
      <Text style={myShelffStyles.textEmpty}>Your Shelf is empty.</Text>
      <Text style={myShelffStyles.subTextEmpty}>
        Tap the add icon below to add items
      </Text>
    </Box>
  );
};

const MyShelff = () => {
  return (
    <View style={myShelffStyles.container}>
      <Empty />
    </View>
  );
};

export default MyShelff;
