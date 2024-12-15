import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { adminToken } = useAuth();
  return adminToken ? <Navigate to="/" /> : children;
};

export default AuthRoute;
