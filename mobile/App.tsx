import { StatusBar } from 'react-native';
import { Background }from './src/components/Background';
import { useFonts, Inter_400Regular,Inter_600SemiBold, Inter_900Black, Inter_700Bold} from '@expo-google-fonts/inter';
import {Routes} from './src/routes';
import {Loading} from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({Inter_400Regular,Inter_600SemiBold, Inter_900Black, Inter_700Bold});

  return (
    <>
      <Background >
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </Background>
    </>
  );
}




