import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

import Sign from "../screens/Sign";
import SplashScreen from "../screens/SplashScreen";
import SignUp from "../screens/SignUp";
import LogIn from "../screens/logIn/LogIn";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: true }}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
