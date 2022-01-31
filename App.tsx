import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigator />;
}
