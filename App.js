/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ImpressionsScreen from './screens/Impressions';
import BitsScreen from './screens/Bits';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Home' ,
            headerTitleStyle: { fontFamily: 'RibeyeMarrow-Regular'}
          }}
        />
        <Stack.Screen name="Impressions" component={ImpressionsScreen} />
        <Stack.Screen name="Bits" component={BitsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
