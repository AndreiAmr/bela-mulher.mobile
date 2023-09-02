import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../ui/screens/OnBoarding';

import AppRoutes from './app.routes';

const Stack = createNativeStackNavigator<{
  Authenticated: undefined;
  Auth: undefined;
}>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Auth" component={OnBoarding} />
      <Stack.Screen name="Authenticated" component={AppRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
