import React, { createContext, useState } from "react";
import { UserType } from "../@types/UserType";

type AuthProviderProps = {
  children: JSX.Element;
};

type AuthContextProps = {
  user: UserType | null;
  signin: (newUser: UserType, callback: () => void) => void;
  signout: (callback: () => void) => void;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const signin = (newUser: UserType, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
