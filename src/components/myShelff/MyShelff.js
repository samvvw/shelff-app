import React, {useState, useEffect} from "react";
import { filter } from 'lodash'
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
  
/***********************************************/
/******  Temporal data                  ********/
/***********************************************/

  //Like this is in the database 
  const [shelfItems, setShelfItems] = useState([
    {id:'1', name: 'Apple', expiry: 'xxx', quantity: 5, location: 'Pantry', category: 'Fruits', essential: true, status: 'Fresh', action: ''}, 
    {id:'2', name: 'Banana', expiry: 'xxx', quantity: 10, location: 'Pantry', category: 'Fruits', essential: true, status: 'Fresh', action: ''}, 
    {id:'3', name: 'Mango', expiry: 'xxx', quantity: 2, location: 'Pantry', category: 'Fruits', essential: false, status: 'Fresh', action: ''}, 
    {id:'4', name: 'grape', expiry: 'xxx', quantity: 1, location: 'Fridge', category: 'Fruits', essential: false, status: 'Fresh', action: 'Consumed'},
    {id:'5', name: 'Milk', expiry: 'xxx', quantity: 1, location: 'Fridge', category: 'Dairy', essential: true, status: 'Expiring', action: ''}, 
    {id:'6', name: 'Cheese', expiry: 'xxx', quantity: 1, location: 'Fridge', category: 'Dairy', essential: false, status: 'Expiring', action: ''}, 
    {id:'7', name: 'egg', expiry: 'xxx', quantity: 12, location: 'Fridge', category: 'Dairy', essential: true, status: 'Expiring', action: ''} ,
    {id:'8', name: 'Donuts', expiry: 'xxx', quantity: 5, location: 'Pantry', category: 'Bread & Cake', essential: false, status: 'Expired', action: ''}, 
    {id:'9', name: 'Cookies', expiry: 'xxx', quantity: 3, location: 'Pantry', category: 'Bread & Cake', essential: false, status: 'Expired', action: ''} 
  ])

  //Notes for now, while not connecting to database
  //Just putting 'status' to finish wireframe, later need to change it to get fresh/expiring/expired from expiry or so, would like to check database/backend/howto get as team to be on the same page as well
  
  //When we get the whole items from DB, we already filter items to get only non-actioned items, this part is that part for now (I put item with id4 as action: "consumed" just for test, so it's not appearing in the list and chart )

  const [allItems, setAllItems] = useState(filter(shelfItems, item => {return item.action === ''}))
  const [freshItems, setFreshItems] = useState(filter(shelfItems, item => {return (item.action === '' && item.status === 'Fresh')}))
  const [expiringItems, setExpiringItems] = useState(filter(shelfItems, item => {return (item.action === '' && item.status === 'Expiring')}))
  const [expiredItems, setExpiredItems] = useState(filter(shelfItems, item => {return (item.action === '' && item.status === 'Expired')}))

  useEffect(() => {
    setAllItems(filter(shelfItems, item => {return item.action === ''}))
    setFreshItems(filter(shelfItems, item => {return (item.action === '' && item.status === 'Fresh')}))
    setExpiringItems(filter(shelfItems, item => {return (item.action === '' && item.status === 'Expiring')}))
    setExpiredItems(filter(shelfItems, item => {return (item.action === '' && item.status === 'Expired')}))

  },[shelfItems, setShelfItems])



/************************************************/
/************************************************/
/************************************************/


  const totalItems = shelfItems.length

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
        swipeEnabled: false,
      }}
    >
      <Tab.Screen 
        name="All" 
        children={()=><All 
          navigation={navigation} 
          shelfItems={shelfItems}
          allItems={allItems}
          freshItems={freshItems} 
          expiringItems={expiringItems} 
          expiredItems={expiredItems} 
          totalItems={totalItems}
          setShelfItems={setShelfItems}/>}
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
