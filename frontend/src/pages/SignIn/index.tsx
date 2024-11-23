import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuthInput } from "../../hooks/useAuthInput";
import {
  ValidationStatuses,
  Validator,
} from "../../services/validation/Validator";

const SignIn = () => {
  const email = useAuthInput("", (s: string) => ValidationStatuses.CORRECT);
  const password = useAuthInput("", (s: string) => ValidationStatuses.CORRECT);

  const onPressLogin = () => {
    console.log("pressed");
  };

  return (
    <form action="">
      <Header>SignIn</Header>
      <Input
        value={email.inputValue}
        setter={email.setInputValue}
        label={email.fallbackMessage}
        placeholder={"email"}
      />
      <Input
        value={password.inputValue}
        setter={password.setInputValue}
        label={password.fallbackMessage}
        placeholder="password"
      />
      <Button active onPress={onPressLogin}>
        Login
      </Button>
    </form>
  );
};

export default SignIn;
