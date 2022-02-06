import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppColors from '../configs/AppColors';

const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    const splashTimeout = setTimeout(()=>{
      navigation.dispatch(   
        StackActions.replace('Screen1') 
      );
    },2000)
    return ()=>{
      clearTimeout(splashTimeout);
    }
  },[])
  return (
    <Screen style={{alignItems : 'center',justifyContent : 'center'}} >
      <AppText style={{fontSize:40, textAlign : 'center'}} >Splash</AppText>
      <AppText style={{fontSize:70, textAlign : 'center' , color : AppColors.primary}}>Screen</AppText>
      <ActivityIndicator size='large' style={{position : 'absolute', width  :40,height : 40 , bottom : 100}} color={AppColors.primary} />
    </Screen>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({

});