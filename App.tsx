/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/homes/HomeScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
