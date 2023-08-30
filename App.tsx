import React from 'react';
import OnBoarding from './src/ui/screens/OnBoarding';
import PackagesProviders from './src/infra/packages';

const App = () => {
  return (
    <PackagesProviders>
      <OnBoarding />
    </PackagesProviders>
  );
};

export default App;
