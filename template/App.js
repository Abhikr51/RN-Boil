/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  LogBox,
} from 'react-native';
import { Provider } from 'react-redux';
import AppDarkMode from './app/Context/Providers/AppDarkMode';
import Navigation from './app/Navigation';
import store from './app/store';

const App = () => {
  
  return (
    <Provider store={store} >
      <AppDarkMode>
          <Navigation/>
      </AppDarkMode>
    </Provider>
  );
};

export default App;


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
