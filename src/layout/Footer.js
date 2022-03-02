import {
  // HStack,
  // Center,
  // Pressable,
  View,
  Text,
  // Icon,
  // MaterialIcons,
  // Box,
} from "native-base";
import React from "react";

import Category from "../components/list/Category";
import Storage from "../components/list/Storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyShelff from "../components/myShelff/MyShelff";

function List({ navigation }) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Category"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, textTransform: "none" },
        tabBarActiveTintColor: "#2c3e50",
        tabBarIndicatorStyle: { backgroundColor: "#2c3e50" },
        lazy: true,
      }}
    >
      <Tab.Screen name="Category" component={Category} navigation={navigation} />
      <Tab.Screen name="Storage" component={Storage} navigation={navigation} />
    </Tab.Navigator>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Footer = () => {
  const Tab = createBottomTabNavigator();
  //tabBarActiveTintColor: "#e91e63",
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingBottom: 20,

          backgroundColor: "white",
        },

        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="MyShelff"
        component={MyShelff}
        options={{
          tabBarLabel: "My Shelff",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Essentials"
        component={Notifications}
        options={{
          tabBarLabel: "Essentials",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="center"
        component={MyShelff}
        options={{
          tabBarItemStyle: { height: 0 },
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shape" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Footer;
