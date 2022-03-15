import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/onboarding/OnboardingScreen'
import GetStartedScreen from '../screens/getStarted/GetStartedScreen'
import Sign from '../screens/Sign'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/logIn/LogIn'
import VerticalMenu from '../layout/VerticalMenu'
import AddItemBarcode from '../screens/AddItemBarcode'
import ManualEntryItem from '../components/barcode/ManualEntryItem'
import EssentialsAddItemScreen from '../screens/essentials/EssentialsAddItemScreen'
import EssentialForm from '../components/essentials/EssentialForm'

const Stack = createNativeStackNavigator()

const AppStack = () => {
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
