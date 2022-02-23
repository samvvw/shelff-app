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
  // const [selected, setSelected] = useState(1);
  // return (
  //   <Box
  //     //   flex={1}
  //     bg="white"
  //     safeAreaTop
  //     width={screenWidth}
  //     //   maxW="300px"
  //     alignSelf="center"
  //     padding={0}
  //     margin={0}
  //   >
  //     {/* s */}
  //     <HStack bg="indigo.600" alignItems="center" shadow={6}>
  //       <Pressable
  //         //   style={{ cursor: "pointer" }}
  //         //   cursor="pointer"
  //         opacity={selected === 0 ? 1 : 0.5}
  //         py="3"
  //         flex={1}
  //         onPress={() => setSelected(0)}
  //       >
  //         <Center>
  //           <Icon
  //             mb="1"
  //             //   as={
  //             //     <MaterialCommunityIcons
  //             //       name={selected === 0 ? "home" : "home-outline"}
  //             //     />
  //             //   }
  //             color="white"
  //             size="sm"
  //           />
  //           <Text color="white" fontSize="12">
  //             My Shelff
  //           </Text>
  //         </Center>
  //       </Pressable>
  //       <Pressable
  //         //   cursor="pointer"
  //         opacity={selected === 1 ? 1 : 0.5}
  //         py="2"
  //         flex={1}
  //         onPress={() => setSelected(1)}
  //       >
  //         <Center>
  //           <Icon
  //             mb="1"
  //             //   as={<MaterialIcons name="search" />}
  //             color="white"
  //             size="sm"
  //           />
  //           <Text color="white" fontSize="12">
  //             Essentials
  //           </Text>
  //         </Center>
  //       </Pressable>

  //       <Pressable flex={1}></Pressable>

  //       <Pressable
  //         //   cursor="pointer"
  //         opacity={selected === 2 ? 1 : 0.6}
  //         py="2"
  //         flex={1}
  //         onPress={() => setSelected(2)}
  //       >
  //         <Center>
  //           <Icon
  //             mb="1"
  //             //   as={
  //             //     <MaterialCommunityIcons
  //             //       name={selected === 2 ? "cart" : "cart-outline"}
  //             //     />
  //             //   }
  //             color="white"
  //             size="sm"
  //           />
  //           <Text color="white" fontSize="12">
  //             Category
  //           </Text>
  //         </Center>
  //       </Pressable>
  //       <Pressable
  //         //   cursor="pointer"
  //         opacity={selected === 3 ? 1 : 0.5}
  //         py="2"
  //         flex={1}
  //         onPress={() => setSelected(3)}
  //       >
  //         <Center>
  //           <Icon
  //             mb="1"
  //             //   as={
  //             //     <MaterialCommunityIcons
  //             //       name={selected === 3 ? "account" : "account-outline"}
  //             //     />
  //             //   }
  //             color="white"
  //             size="sm"
  //           />
  //           <Text color="white" fontSize="12">
  //             Profile
  //           </Text>
  //         </Center>
  //       </Pressable>
  //     </HStack>
  //   </Box>
};

export default Footer;
