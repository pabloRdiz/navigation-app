import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './src/navigator/SideMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
