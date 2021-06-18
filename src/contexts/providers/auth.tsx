import React, { createContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthProviderProps, AuthTypes } from '../types/authTypes';

const AuthContext = createContext({} as AuthTypes);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState(() => {
    const userLogged = localStorage.getItem('username');

    if (userLogged) return true;

    return false;
  });

  const signIn = useCallback((username: string) => {
    try {
      if (!username) {
        throw new Error('Your name should not be empty');
      }
      setLogged(true);
      localStorage.setItem(
        'username',
        JSON.stringify({
          username,
        })
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  console.log('logged', logged);

  return (
    <AuthContext.Provider value={{ signIn, logged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
