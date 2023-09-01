import 'react-native';
import React from 'react';
import LoginBottomSheet from '.';
import { render } from '@testing-library/react-native';

const createRef = () => {
  const refObj = {
    current: null,
  };
  return refObj;
};

describe('Login Bottom Sheet', () => {
  it('should render correctly', () => {
    const ref = createRef();
    render(<LoginBottomSheet ref={ref} />);
  });
});
