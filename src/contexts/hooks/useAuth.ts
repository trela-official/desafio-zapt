import { useContext } from 'react';
import { AuthContext } from '../providers/auth';
import { AuthTypes } from '../types/authTypes';

const useAuth = (): AuthTypes => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whit AuthContext');
  }

  return context;
};

export default useAuth;
