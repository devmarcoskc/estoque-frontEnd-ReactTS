import { createContext, ReactNode, useEffect, 
useReducer, useState } from "react";
import { UserType } from "../types/UserType";
import { AuthAction, authReducer } from "../reducers/userReducer";

export interface AuthState {
  user: UserType | null;
  token: string | null;
};

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  auth: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (user: UserType, token: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const initialState:AuthState = {
    user: null,
    token: null,
  };

  const [auth, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if(storedUser && storedToken) {
      dispatch({
        type: 'LOGIN', 
        payload: {
          user: JSON.parse(storedUser), 
          token: storedToken 
        } 
      });

    }
    setLoading(false);
  }, []);

  const login = (userData: UserType, authToken: string) => {
    dispatch({
      type: 'LOGIN',
      payload: {
        user: userData,
        token: authToken
      }
    });

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    dispatch({type: 'LOGOUT'});

    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const contextValue: AuthContextProps = {auth, dispatch, login, logout, loading};

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
};
