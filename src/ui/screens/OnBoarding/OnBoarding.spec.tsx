import 'react-native';

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import OnBoarding from '.';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';
import { Provider } from 'react-redux';
import store from '../../../infra/redux/store';

describe('On Boarding Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', async () => {
    const { toJSON, queryByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={styledTheme}>
          <OnBoarding />
        </ThemeProvider>
      </Provider>,
    );

    // const container =
    //   queryByTestId('onboarding-container') ||
    //   getByTestId('onboarding-container');

    const loginButton = queryByTestId('login-button');

    // expect(container).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();

    if (loginButton) {
      fireEvent(loginButton!, 'press');
    }
  });
});
