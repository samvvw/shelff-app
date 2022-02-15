import { NativeBaseProvider, StatusBar } from "native-base";

import Sign from "./src/screens/Sign";

export default function App() {
  return (
    <NativeBaseProvider>
      <Sign />
    </NativeBaseProvider>
  );
}
