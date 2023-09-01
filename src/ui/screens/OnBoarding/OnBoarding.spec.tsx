import 'react-native';
import React, { useRef } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import OnBoarding from '.';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';
import { NavigationContainer } from '@react-navigation/native';
import store from '../../../infra/redux/store';

// const ComponentToTest = ()=> {

//     const ref = useRef(null);

//     return (

//     )
// }

describe('On Boarding Screen', () => {
  it('should render correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <NavigationContainer>
          <ThemeProvider theme={styledTheme}>
            <OnBoarding />
          </ThemeProvider>
        </NavigationContainer>
      </Provider>,
    );
    const container = screen.getByTestId('onboarding-container');

    expect(container).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
