import React, { createContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthProviderProps, AuthTypes } from '../types/authTypes';

const AuthContext = createContext({} as AuthTypes);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();
  const [logged, setLogged] = useState(false);

  const signIn = useCallback((username: string) => {
    try {
      if (!username) {
        throw new Error('Your name should not be empty');
      }
      setLogged(true);
      sessionStorage.setItem(
        'username',
        JSON.stringify({
          username,
        })
      );

      history.push('/home');
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
