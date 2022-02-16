import { NativeBaseProvider, StatusBar } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

import SignUp from "./src/screens/SignUp";

export default function App() {
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <SignUp />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
