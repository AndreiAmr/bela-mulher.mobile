/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../ui/screens/app/Home';
import Schedule from '../ui/screens/app/Schedule';
import NewClient from '../ui/screens/app/NewClient';
import NewSchedule from '../ui/screens/app/NewSchedule';
import BottomTabIcon from '../ui/components/BottomTabIcon';

const AppTabs = createBottomTabNavigator();

const AppRoutes = () => {
  const theme = useTheme();

  return (
    <AppTabs.Navigator>
      <AppTabs.Group
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.purple,
            paddingLeft: 10,
          },
        }}>
        <AppTabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',

            tabBarButton: props => {
              return <BottomTabIcon {...props} label="Home" />;
            },
          }}
        />
        <AppTabs.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: 'Agenda',
            tabBarButton: props => {
              return <BottomTabIcon {...props} label="Agenda" />;
            },
          }}
        />
        <AppTabs.Screen
          name="NewClient"
          component={NewClient}
          options={{
            tabBarLabel: 'Nova Client',
            tabBarButton: props => {
              return <BottomTabIcon {...props} label="Cliente" />;
            },
          }}
        />

        <AppTabs.Screen
          name="NewSchedule"
          component={NewSchedule}
          options={{
            tabBarLabel: 'Novo Procedimento',
            tabBarButton: props => {
              return <BottomTabIcon {...props} label="Procedimento" />;
            },
          }}
        />
      </AppTabs.Group>
    </AppTabs.Navigator>
  );
};

export default AppRoutes;
