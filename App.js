import { NativeBaseProvider } from 'native-base'
import AppStack from './src/stacks/AppStack'


const App = () => {

  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>

  )
}

export default App