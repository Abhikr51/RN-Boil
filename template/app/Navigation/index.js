import React from 'react'
import { NavigationContainer ,DefaultTheme ,DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DemoScreen1 from '../Screens/DemoScreen1';
import DemoScreen2 from '../Screens/DemoScreen2';
import Screen from '../components/Screen';
import { View } from 'react-native';
import useAppDarkMode from '../Context/hooks/useAppDarkMode';
import AppColors from '../configs/AppColors';
import SplashScreen from '../Screens/SplashScreen';

const AppNavigator = createStackNavigator();

const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    background: AppColors.appBackgroundLight,
    text: AppColors.black,
    border: AppColors.grey,
  },
}
const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: AppColors.primary,
    background: AppColors.appBackgroundDark,
    card : AppColors.black
  },
}

const App = () => {

  return (
      <AppNavigator.Navigator  >
        <AppNavigator.Screen options={{headerShown : false}} name='SplashScreen' component={SplashScreen}  />
        <AppNavigator.Screen  name='Screen1' component={DemoScreen1}  />
        <AppNavigator.Screen name='Screen2' component={DemoScreen2}  />
      </AppNavigator.Navigator>
  );
}

const Navigation = () => {
  const {mode} = useAppDarkMode();

  return (
    <NavigationContainer theme={mode === 'dark' ? AppDarkTheme : AppLightTheme} >
        <App/>
      </NavigationContainer>
  );
}
export default Navigation;