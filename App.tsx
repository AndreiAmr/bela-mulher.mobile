import React from 'react';
import { View } from 'react-native';
import OnBoarding from './src/ui/screens/OnBoarding';
import PackagesProviders from './src/infra/packages';

const App = () => {
  return (
    <PackagesProviders>
      <View testID="app-container">
        <OnBoarding />
      </View>
    </PackagesProviders>
  );
};

export default App;
