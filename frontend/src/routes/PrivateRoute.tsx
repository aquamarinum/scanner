import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
