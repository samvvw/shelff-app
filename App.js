import { NativeBaseProvider, StatusBar } from "native-base";
import AppStack from "./src/stacks/AppStack";
import { SSRProvider } from "@react-aria/ssr";

const App = () => {
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <AppStack />
      </NativeBaseProvider>
    </SSRProvider>
  );
};

export default App;
