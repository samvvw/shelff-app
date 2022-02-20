import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import GetStartedScreen from "../screens/getStarted/GetStartedScreen";
import Sign from "../screens/Sign";
import SignUp from "../screens/SignUp";
import MyShelff from "../screens/MyShelff";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="GetStarted" 
          component={GetStartedScreen} 
          options={{ title: 'Shelff' }}/>
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="MyShelff"
          component={MyShelff}
          options={{ headerShown: true }}  //Temporal 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
