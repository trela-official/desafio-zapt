export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthTypes = {
  signIn: (username: string) => void;
  logged: boolean;
};
