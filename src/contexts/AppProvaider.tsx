import React from 'react';
import { AuthProvider } from './providers/auth';

type AppProviderProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
