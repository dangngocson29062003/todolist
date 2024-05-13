/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { fontFamilies } from './src/constants/fontFamilies';


const App = () => {
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: '#fafafa', fontFamily: fontFamilies.regular}}>
        Welcome to my first app
      </Text>
      <Text style={styles.title}>Todo list</Text>
      <Button title='Hello' onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    color: '#fff',
  }
});

export default App;
