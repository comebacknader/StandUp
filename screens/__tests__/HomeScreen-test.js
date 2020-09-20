/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

it('renders the HomeScreen component', () => {
  const tree = create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});