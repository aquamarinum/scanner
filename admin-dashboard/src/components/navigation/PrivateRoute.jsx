import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { adminToken } = useAuth();
  return adminToken ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
