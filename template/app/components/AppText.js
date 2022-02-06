import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import useAppDarkMode from '../Context/hooks/useAppDarkMode';

const AppText = ({numberOfLines,style,children, ...rest}) => {
    const {mode} = useAppDarkMode();
    const isDarkMode = mode === 'dark'
    return (
    <Text style={[{color : isDarkMode ? 'white' : 'black',},style]} numberOfLines={numberOfLines} {...rest} >{children}</Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
    
});
