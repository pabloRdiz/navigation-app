import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicDrawer } from './src/navigator/BasicDrawer';
import { SideMenu } from './src/navigator/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
