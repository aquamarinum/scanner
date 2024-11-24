import React from "react";
import Form from "../components/Form";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuthInput } from "../hooks/useAuthInput";
import { ValidationStatuses } from "../services/validation/Validator";
import Paragrapgh from "../components/Paragraph";
import SingleScreen from "../components/SingleScreen";
import { Link } from "react-router-dom";

const Register = () => {
  const email = useAuthInput("", "email");
  const password = useAuthInput("", "password");
  const passwordConfirm = useAuthInput("", "password");

  const onPressLogin = () => {
    console.log("pressed");
  };

  return (
    <SingleScreen>
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
          type="password"
        />
        <Input
          value={passwordConfirm.inputValue}
          setter={passwordConfirm.setInputValue}
          label={passwordConfirm.fallbackMessage}
          placeholder="confirm password"
          type="password"
        />
        <Button
          active={
            email.fallbackMessage === ValidationStatuses.CORRECT &&
            password.fallbackMessage === ValidationStatuses.CORRECT &&
            password.inputValue.length !== 0 &&
            password.inputValue === passwordConfirm.inputValue
          }
          onPress={onPressLogin}
        >
          Register
        </Button>
        <Paragrapgh>
          Or return to <Link to="/login">login</Link>
        </Paragrapgh>
      </Form>
    </SingleScreen>
  );
};

export default Register;
