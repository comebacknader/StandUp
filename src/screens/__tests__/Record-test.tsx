/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';
import StackScreenNavigator from '../common';
import Record from './../Record';

it('renders the Record component', () => {
  const tree = create(<StackScreenNavigator screenName={"Record"} screenComponent={Record} screenOptions={{
    headerShown: false, 
    title: 'Record' ,
  }} />).toJSON();
  expect(tree).toMatchSnapshot();
});