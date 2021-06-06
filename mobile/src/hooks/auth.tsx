import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  user: any;
  signIn(formData: SignInProps): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState({});

  const signIn = useCallback(async formData => {
    try {
      const {data} = await api.post('/auth', formData);

      setUser(data.user);
      await AsyncStorage.setItem('@auth/user', JSON.stringify(data.user));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await api.delete('/auth');

      setUser({});
      await AsyncStorage.removeItem('@auth/user');
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    async function loadStoragedUser() {
      const foundUser = await AsyncStorage.getItem('@auth/user');

      if (foundUser) {
        const parsedUser = JSON.parse(foundUser);
        setUser(parsedUser);
      }
    }

    loadStoragedUser();
  }, []);

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};
