/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/homes/HomeScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers/Router';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
