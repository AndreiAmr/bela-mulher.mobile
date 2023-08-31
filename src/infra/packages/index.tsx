import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from './styledComponents/theme';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { NativeBaseProvider } from 'native-base';

const PackagesProviders = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
          </NavigationContainer>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </Provider>
  );
};

export default PackagesProviders;
