import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export type AuthProps = {
  authRedirect: () => void;
};

const Auth = () => {
  const [isAuthRegistration, setAuthRegistration] = useState(true);

  const onChangeAuthMode = () => {
    setAuthRegistration((prev) => !prev);
  };

  return isAuthRegistration ? (
    <SignIn authRedirect={onChangeAuthMode} />
  ) : (
    <SignUp authRedirect={onChangeAuthMode} />
  );
};

export default Auth;
