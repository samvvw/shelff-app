import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboarding/OnboardingScreen'
// import MainScreen from '../screens/MainScreen'
import Sign from '../screens/Sign'
import SplashScreen from '../screens/SplashScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Onboarding' component={OnboardingScreen} />
                {/* <Stack.Screen name='Main' component={MainScreen} /> */}
                <Stack.Screen name='Sign' component={Sign} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AppStack