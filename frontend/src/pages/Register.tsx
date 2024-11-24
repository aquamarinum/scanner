import React from "react";
import Form from "../components/Form";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuthInput } from "../hooks/useAuthInput";
import { ValidationStatuses } from "../services/validation/Validator";
import Underlined from "../components/Underlined";

const Register = () => {
  const email = useAuthInput("", "email");
  const password = useAuthInput("", "password");
  const passwordConfirm = useAuthInput("", "password");

  const onPressLogin = () => {
    console.log("pressed");
  };

  return (
    <Form>
      <Headline>Sign Up</Headline>
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
      <Input
        value={passwordConfirm.inputValue}
        setter={passwordConfirm.setInputValue}
        label={passwordConfirm.fallbackMessage}
        placeholder="confirm password"
      />
      <Button
        active={
          email.fallbackMessage === ValidationStatuses.CORRECT &&
          password.fallbackMessage === ValidationStatuses.CORRECT &&
          password.inputValue.length === passwordConfirm.inputValue.length &&
          password.inputValue.length !== 0
        }
        onPress={onPressLogin}
      >
        Create an account
      </Button>
      <Underlined onClick={() => {}}>Or return to sign in</Underlined>
    </Form>
  );
};

export default Register;
