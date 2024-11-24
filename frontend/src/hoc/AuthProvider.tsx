import React, { createContext, useState } from "react";
import { UserType } from "../@types/UserType";
import { useLocalStorage } from "../hooks/useLocalStorage";

type AuthProviderProps = {
  children: JSX.Element;
};

type AuthContextProps = {
  authToken: string | null;
  signin: (newToken: string) => void;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  authToken: null,
  signin: (str: string) => {},
  signout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage<string>("user");

  const signin = (newAuthToken: string) => {
    setAuthToken(newAuthToken);
  };

  const signout = () => {
    setAuthToken(null);
  };

  const value = { authToken, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
