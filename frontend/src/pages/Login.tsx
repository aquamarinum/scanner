import React from "react";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuthInput } from "../hooks/useAuthInput";
import { ValidationStatuses } from "../services/validation/Validator";
import Form from "../components/Form";
import Underlined from "../components/Underlined";

const Login = () => {
  const email = useAuthInput("", "email");
  const password = useAuthInput("", "password");

  const onPressLogin = () => {
    console.log("pressed");
  };

  return (
    <Form>
      <Headline>Sign In</Headline>
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
      <Button
        active={
          email.fallbackMessage === ValidationStatuses.CORRECT &&
          password.fallbackMessage === ValidationStatuses.CORRECT
        }
        onPress={onPressLogin}
      >
        Login
      </Button>
      <Underlined onClick={() => {}}>Or create a new account</Underlined>
    </Form>
  );
};

export default Login;
