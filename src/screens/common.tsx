/**
 * @format
 */

import 'react-native';
import React from 'react';

import { StackParamList } from '../components/Annotations';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<StackParamList>();

export const ScreenInStackNavigator = ({ screenComponent, screenName, screenOptions }) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screenName}
            component={screenComponent}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default ScreenInStackNavigator;