import React, { useReducer } from 'react';
import { ReactNode, createContext } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authItinialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  changeFavoriteIcon: (iconName: string) => void;
  signIn: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, authItinialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        changeFavoriteIcon,
        signIn,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
