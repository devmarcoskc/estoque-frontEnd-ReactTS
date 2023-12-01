import { UserType } from "../types/UserType";
import { AuthState } from "../contexts/AuthContext";

export type AuthAction = LOGIN | LOGOUT;

type LOGIN = {
  type: 'LOGIN';
  payload: {user: UserType; token: string }
}

type LOGOUT = {
  type: 'LOGOUT'
};

export const authReducer = (auth: AuthState, action: AuthAction): AuthState => {
  switch(action.type) {
    case 'LOGIN':
      return {...auth, user: action.payload.user, token: action.payload.token}
    case 'LOGOUT':
      return {...auth, user: null, token: null}
    default:
      return auth;
  }
}