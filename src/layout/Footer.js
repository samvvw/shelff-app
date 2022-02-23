import {
  HStack,
  Center,
  Pressable,
  View,
  Text,
  Icon,
  MaterialIcons,
  Box,
} from "native-base";
import React from "react";
import { useState } from "react";
import { screenWidth } from "./layout";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
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
        component={Feed}
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
        component={Feed}
        options={{
          tabBarItemStyle: { height: 0 },
        }}
      />
      <Tab.Screen
        name="Category"
        component={Profile}
        options={{
          tabBarLabel: "Category",
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
