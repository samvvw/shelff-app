import React, {useState} from "react";
import { View, Box, Text} from "native-base";
import { myShelffStyles } from "../../styles/styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "./All";
import Fresh from "./Fresh";
import Expiring from "./Expiring";
import Expired from "./Expired";

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


function MyShelff({ navigation }) {
  const Tab = createMaterialTopTabNavigator();

  //Temporal data
  const [freshItems, setFreshItems] = useState(['Apple', 'Banana', 'Mango', 'grape'])
  const [expiringItems, setExpiringItems] = useState(['Milk', 'Cheese', 'egg'])
  const [expiredItems, setExpiredItems] = useState(['Donuts', 'Cookies'])
  const totalItems = freshItems.length + expiringItems.length + expiredItems.length

  return (
    totalItems == 0 ? 
    <View style={myShelffStyles.container}>
      <Empty />
    </View>
    :
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, textTransform: "none" },
        tabBarActiveTintColor: "#2c3e50",
        tabBarIndicatorStyle: { backgroundColor: "#2c3e50" },
        lazy: true,
      }}
    >
      <Tab.Screen 
        name="All" 
        children={()=><All 
          navigation={navigation} 
          freshItems={freshItems} 
          expiringItems={expiringItems} 
          expiredItems={expiredItems} 
          totalItems={totalItems}/>}
      />
      <Tab.Screen 
        name="Fresh" 
        children={()=><Fresh 
          navigation={navigation} 
          freshItems={freshItems} 
          totalItems={totalItems}/>}
      />
      <Tab.Screen 
        name="Expiring" 
        children={()=><Expiring 
          navigation={navigation} 
          expiringItems={expiringItems} 
          totalItems={totalItems}/>}
      />
      <Tab.Screen 
        name="Expired" 
        children={()=><Expired 
          navigation={navigation} 
          expiredItems={expiredItems} 
          totalItems={totalItems}/>}
      />
    </Tab.Navigator>    
  );
}

export default MyShelff;
