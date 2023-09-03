import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../ui/screens/OnBoarding';
import Home from '../ui/screens/Home';
import Boot from '../ui/screens/Boot';

const Stack = createNativeStackNavigator<{
  Home: undefined;
  Auth: undefined;
  Boot: undefined;
}>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Boot" component={Boot} />
      <Stack.Screen name="Auth" component={OnBoarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
