import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from './styledComponents/theme';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PackagesProviders = ({ children }: PropsWithChildren) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default PackagesProviders;
