import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AuthRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? <Navigate to="/" /> : children;
};

export default AuthRoute;
