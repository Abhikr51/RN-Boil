import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import useAppDarkMode from '../Context/hooks/useAppDarkMode';
import AppText from './AppText';
import AppColors from '../configs/AppColors'
import { SafeAreaView } from 'react-native-safe-area-context';
const Screen = ({children,style,...rest}) => {
    
    const {mode} = useAppDarkMode();
    const isDarkMode = mode === 'dark' ;

  return (
      <View style={[styles.screen,{backgroundColor  : isDarkMode ? AppColors.appBackgroundDark : AppColors.appBackgroundLight ,},style]}>        
        <StatusBar translucent backgroundColor='transparent' barStyle={isDarkMode? 'light-content':'dark-content'} />
        {children}
      </View>
  );
};

export default Screen;
const styles = StyleSheet.create({
    screen : {
        flex : 1,
        
    },
    textStyle : {
        fontSize : 20,
    }
});