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
import EssentialsAddItemScreen from '../screens/essentials/EssentialsAddItemScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    // const { user, refreshIdToken } = useContext(UserContext)
    // const [hasToken, setHasToken] = useState(false)

    // useEffect(() => {
    //     if (user?.token) {
    //         ;(async () => {
    //             try {
    //                 await refreshIdToken()
    //                 const token = await AsyncStorage.getItem('token')
    //                 if (token) setHasToken(true)
    //             } catch (error) {
    //                 console.log(error)
    //                 setHasToken(false)
    //             }
    //         })()
    //     }
    // }, [user])

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
                    option={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddEssentialsItem"
                    component={EssentialsAddItemScreen}
                    options={{ title: 'Your essentials list' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack
