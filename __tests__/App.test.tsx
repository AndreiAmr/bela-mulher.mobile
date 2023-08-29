/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {screen, render, waitFor} from '@testing-library/react-native';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required aft

it('renders correctly', async () => {
  render(<App />);

  const component = screen.getByTestId('app-container');

  waitFor(() => expect(component).toBeTruthy());
});
