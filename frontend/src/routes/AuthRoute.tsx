import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AuthRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuth = Boolean(useAuth()?.user);
  return isAuth ? <Navigate to="/" /> : children;
};

export default AuthRoute;
