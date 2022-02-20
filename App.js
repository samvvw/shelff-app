import { SSRProvider } from "@react-aria/ssr";
import { NativeBaseProvider, StatusBar } from "native-base";
import AppStack from "./src/stacks/AppStack";

import React, {useState} from "react";
import AppLoading  from 'expo-app-loading'
import * as Font from "expo-font";
import { useFonts } from 'expo-font';

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


const App = () => {

  //with function
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  //with hook
  const [fontsLoaded] = useFonts ({
    "GoogleSans-Regular": require("./assets/fonts/GoogleSans-Regular.ttf"),
    "GoogleSans-Italic": require("./assets/fonts/GoogleSans-Italic.ttf"),
    "GoogleSans-Medium": require("./assets/fonts/GoogleSans-Medium.ttf"),
    "GoogleSans-MediumItalic": require("./assets/fonts/GoogleSans-MediumItalic.ttf"),
    "GoogleSans-Bold": require("./assets/fonts/GoogleSans-Bold.ttf"),
    "GoogleSans-BoldItalic": require("./assets/fonts/GoogleSans-BoldItalic.ttf"),
  })


  if(!fontsLoaded){
    return (
      //with function
      // <AppLoading
      //   startAsync={fetchFonts}
      //   onFinish={() => {setFontsLoaded(true)}}
      //   onError={() => console.log("error on font loading")}
      // />

      //with hook
      <AppLoading />
    )
  }

  return (
    <SSRProvider>
      <NativeBaseProvider>
        <AppStack />
      </NativeBaseProvider>
    </SSRProvider>
  );
};

export default App;
