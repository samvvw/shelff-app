import { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/onboarding/OnboardingScreen'
import GetStartedScreen from '../screens/getStarted/GetStartedScreen'
import Sign from '../screens/Sign'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/logIn/LogIn'
import VerticalMenu from '../layout/VerticalMenu'
// import { UserContext } from '../context/UserContext'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import AddItemBarcode from '../screens/AddItemBarcode'
import ManualEntryItem from '../components/barcode/ManualEntryItem'
import EssentialsAddItemScreen from '../screens/essentials/EssentialsAddItemScreen'
import EssentialForm from '../components/essentials/EssentialForm'
import { ItemsContext } from '../context/ItemsContext'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    // const { categories, loading, error, locations, itemFoundDB, findItemInDB } =
    //     useContext(ItemsContext)

    // useEffect(() => {
    //     // console.log('Categories', locations)
    //     console.log('error', error)
    //     console.log('loading', loading)
    //     console.log('itemFound-->', itemFoundDB)
    // }, [itemFoundDB, loading, error])
    // useEffect(() => {
    //     findItemInDB('123456')
    // }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen
                    name="GetStarted"
                    component={GetStartedScreen}
                    options={{ title: 'Shelff' }}
                />
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
                <Stack.Screen
                    name="VerticalMenu"
                    component={VerticalMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddItemBarcode"
                    component={AddItemBarcode}
                    options={{
                        headerShown: true,
                        title: '',
                    }}
                />
                <Stack.Screen
                    name="ManualEntryItem"
                    component={ManualEntryItem}
                    options={{
                        headerShown: true,
                        title: '',
                    }}
                />
                <Stack.Screen
                    name="AddEssentialsItem"
                    component={EssentialsAddItemScreen}
                    options={{ title: 'Your essentials list' }}
                />
                <Stack.Screen
                    name="EssentialForm"
                    component={EssentialForm}
                    options={{ title: 'Add your essential item' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack
