import { AuthState } from './AuthContext';

type authAction =
  | {
      type: 'signIn';
    }
  | {
      type: 'changeFavIcon';
      payload: string;
    }
  | {
      type: 'logout';
    };

export const authReducer = (
  state: AuthState,
  action: authAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return { ...state, isLoggedIn: true, username: 'not-username-yet' };
    case 'changeFavIcon':
      return { ...state, favoriteIcon: action.payload };
    case 'logout':
      return {
        isLoggedIn: false,
        favoriteIcon: undefined,
        username: undefined,
      };
    default:
      return state;
  }
};
