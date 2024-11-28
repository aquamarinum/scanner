import React from "react";
import { useSignInOut } from "../hooks/useSignInOut";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { logout } = useSignInOut();
  const { signout } = useAuth();
  return (
    <button
      onClick={() => {
        logout();
        signout();
      }}
    >
      logout
    </button>
  );
};

export default Home;
