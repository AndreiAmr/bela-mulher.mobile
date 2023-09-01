/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required aft

it('renders correctly', async () => {
  const { toJSON } = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
