import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const BasicDrawer = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Settings' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
