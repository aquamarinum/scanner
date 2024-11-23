import React from "react";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useAuthInput } from "../../../hooks/useAuthInput";
import { ValidationStatuses } from "../../../services/validation/Validator";
import Form from "../../../components/Form";
import Subtitle from "../../../components/Subtitle";
import { Link } from "react-router-dom";
import Underlined from "../../../components/Underlined";
import { AuthProps } from "..";

const SignIn: React.FC<AuthProps> = ({ authRedirect }) => {
  const email = useAuthInput("", "email");
  const password = useAuthInput("", "password");

  const onPressLogin = () => {
    console.log("pressed");
  };

  return (
    <Form>
      <Header>Sign In</Header>
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
      <Underlined onClick={() => authRedirect()}>
        Or create a new account
      </Underlined>
    </Form>
  );
};

export default SignIn;
