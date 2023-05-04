import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicDrawer } from './src/navigator/BasicDrawer';
import { SideMenu } from './src/navigator/SideMenu';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <SideMenu />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
