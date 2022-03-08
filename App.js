import { useContext } from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import AppStack from "./src/stacks/AppStack";
import AppLoading from "expo-app-loading";
// import * as Font from 'expo-font'
import { useFonts } from "expo-font";
import { UserProvider } from "./src/context/UserContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { UserContext } from "./src/context/UserContext";
//with function
// const fetchFonts = () => {
//   return Font.loadAsync({
//     "GoogleSans-Regular": require("./assets/fonts/GoogleSans-Regular.ttf"),
//     "GoogleSans-Italic": require("./assets/fonts/GoogleSans-Italic.ttf"),
//     "GoogleSans-Medium": require("./assets/fonts/GoogleSans-Medium.ttf"),
//     "GoogleSans-MediumItalic": require("./assets/fonts/GoogleSans-MediumItalic.ttf"),
//     "GoogleSans-Bold": require("./assets/fonts/GoogleSans-Bold.ttf"),
//     "GoogleSans-BoldItalic": require("./assets/fonts/GoogleSans-BoldItalic.ttf"),
//   })
// }

//for native-base font customization
//https://docs.nativebase.io/customizing-fonts
//https://github.com/GeekyAnts/NativeBase/issues/4406
const theme = extendTheme({
  fontConfig: {
    googleSans: {
      regular: {
        normal: "GoogleSans-Regular",
        italic: "GoogleSans-Italic",
      },
      medium: {
        normal: "GoogleSans-Medium",
        italic: "GoogleSans-MediumItalic",
      },
      bold: {
        normal: "GoogleSans-Bold",
        italic: "GoogleSans-BoldItalic",
      },
    },
  },
  fonts: {
    heading: "googleSans",
    body: "googleSans",
    mono: "googleSans",
  },
});

const App = () => {
  //with function
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const { token } = useContext;

  //with hook
  const client = new ApolloClient({
    uri: "http://192.168.1.92:8080/graphql",
    cache: new InMemoryCache(),
  });
  const [fontsLoaded] = useFonts({
    "GoogleSans-Regular": require("./assets/fonts/GoogleSans-Regular.ttf"),
    "GoogleSans-Italic": require("./assets/fonts/GoogleSans-Italic.ttf"),
    "GoogleSans-Medium": require("./assets/fonts/GoogleSans-Medium.ttf"),
    "GoogleSans-MediumItalic": require("./assets/fonts/GoogleSans-MediumItalic.ttf"),
    "GoogleSans-Bold": require("./assets/fonts/GoogleSans-Bold.ttf"),
    "GoogleSans-BoldItalic": require("./assets/fonts/GoogleSans-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      //with function
      // <AppLoading
      //   startAsync={fetchFonts}
      //   onFinish={() => {setFontsLoaded(true)}}
      //   onError={() => console.log("error on font loading")}
      // />

      //with hook
      <AppLoading />
    );
  }

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <NativeBaseProvider theme={theme}>
          <StatusBar barStyle={"dark-content"} />
          <AppStack />
        </NativeBaseProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
