import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  adminToken: null,
  signin: () => {},
  signout: () => {},
});

const AuthProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("admin-key");
    if (token) {
      setAdminToken(token);
    }
  }, []);

  const signin = (newAuthToken = null) => {
    if (newAuthToken) {
      sessionStorage.setItem("admin-key", newAuthToken);
      setAdminToken(newAuthToken);
    }
  };

  const signout = () => {
    sessionStorage.removeItem("admin-key");
    setAdminToken(null);
  };

  const value = { adminToken, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
