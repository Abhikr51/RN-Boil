import React, { useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const DemoScreen1 = ({navigation}) => {


  
  return (
    <Screen style={styles.screen} >
      <AppText style={{marginVertical : 30}} >Demo Screen 1</AppText>
      <Button title='Go to screen 2' onPress={()=>navigation.navigate('Screen2')} />
    </Screen>
  );
};

export default DemoScreen1;
const styles = StyleSheet.create({
  screen : {
    justifyContent : 'center',
    alignItems : 'center'
  }
});