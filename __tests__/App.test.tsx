/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required aft

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: jest.fn((prop: number) => prop),
}));

jest.mock('react-native-shadow-2', () => ({
  Shadow: jest.fn(),
}));

jest.mock('react-native-modalize', () => ({
  Modalize: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: jest.fn(),
}));

it('renders correctly', async () => {
  const { toJSON } = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
