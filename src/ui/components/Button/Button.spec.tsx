import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Button from '.';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: jest.fn((prop: number) => prop),
}));

describe('Button Component', () => {
  it('Should render correctly', () => {
    const pressFN = () => {
      console.log('pressed');
    };

    const { toJSON } = render(
      <ThemeProvider theme={styledTheme}>
        <Button
          color="gray"
          label="Click me"
          onPress={pressFN}
          testId="button-testid"
        />
      </ThemeProvider>,
    );

    const element = screen.getByTestId('button-testid');

    expect(element).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
