import React from 'react';
import PackagesProviders from './src/infra/packages';
import Routes from './src/routes';
import { StatusBar } from 'native-base';

const App = () => {
  return (
    <PackagesProviders>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </PackagesProviders>
  );
};

export default App;
