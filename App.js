import { useContext } from 'react'
import { NativeBaseProvider, extendTheme, StatusBar } from 'native-base'
import AppStack from './src/stacks/AppStack'
import AppLoading from 'expo-app-loading'
// import * as Font from 'expo-font'
import { useFonts } from 'expo-font'
import { UserProvider } from './src/context/UserContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { UserContext } from './src/context/UserContext'
import { ItemsProvider } from './src/context/ItemsContext'
import { UserItemsProvider } from './src/context/UserItemsContext'
import { LogBox } from 'react-native'

//for native-base font customization
//https://docs.nativebase.io/customizing-fonts
//https://github.com/GeekyAnts/NativeBase/issues/4406
const theme = extendTheme({
    fontConfig: {
        googleSans: {
            regular: {
                normal: 'GoogleSans-Regular',
                italic: 'GoogleSans-Italic',
            },
            medium: {
                normal: 'GoogleSans-Medium',
                italic: 'GoogleSans-MediumItalic',
            },
            bold: {
                normal: 'GoogleSans-Bold',
                italic: 'GoogleSans-BoldItalic',
            },
            700: {
                normal: 'GoogleSans-Bold',
                italic: 'GoogleSans-BoldItalic',
            },
            600: {
                normal: 'GoogleSans-Medium',
                italic: 'GoogleSans-MediumItalic',
            },
            500: {
                normal: 'GoogleSans-Medium',
                italic: 'GoogleSans-MediumItalic',
            },
        },
    },
    fonts: {
        heading: 'googleSans',
        body: 'googleSans',
        mono: 'googleSans',
    },
    colors: {
        primary: {
            300: '#007AFF',
            400: '#007AFF',
            500: '#007AFF',
        },
    },
    components: {
        Checkbox: {
            baseStyle: {
                borderRadius: 50,
                borderColor: 'primary.500',
                borderWidth: 1,
            },
        },
        FormControlLabel: {
            baseStyle: {
                astrickColor: 'primary.500',
            },
        },
    },
})

const App = () => {
    //with hook
    LogBox.ignoreAllLogs()
    const client = new ApolloClient({
        // uri: 'http://10.0.0.227:8080/graphql',
        uri: 'https://api.shelff.ca/graphql',
        cache: new InMemoryCache(),
    })
    const [fontsLoaded] = useFonts({
        'GoogleSans-Regular': require('./assets/fonts/GoogleSans-Regular.ttf'),
        'GoogleSans-Italic': require('./assets/fonts/GoogleSans-Italic.ttf'),
        'GoogleSans-Medium': require('./assets/fonts/GoogleSans-Medium.ttf'),
        'GoogleSans-MediumItalic': require('./assets/fonts/GoogleSans-MediumItalic.ttf'),
        'GoogleSans-Bold': require('./assets/fonts/GoogleSans-Bold.ttf'),
        'GoogleSans-BoldItalic': require('./assets/fonts/GoogleSans-BoldItalic.ttf'),
    })

    if (!fontsLoaded) {
        return (
            //with hook
            <AppLoading />
        )
    }

    return (
        <ApolloProvider client={client}>
            <ItemsProvider>
                <UserProvider>
                    <UserItemsProvider>
                        <NativeBaseProvider theme={theme}>
                            <StatusBar barStyle={'dark-content'} />
                            <AppStack />
                        </NativeBaseProvider>
                    </UserItemsProvider>
                </UserProvider>
            </ItemsProvider>
        </ApolloProvider>
    )
}

export default App
