import React, { useState } from "react";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuthInput } from "../hooks/useAuthInput";
import { ValidationStatuses } from "../services/validation/Validator";
import Form from "../components/Form";
import SingleScreen from "../components/SingleScreen";
import { Link } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Popup from "../components/Popup";
import { usePopup } from "../hooks/usePopup";

const Login = () => {
  const email = useAuthInput("", "free");
  const password = useAuthInput("", "free");

  const { popupState, openPopup, closePopup } = usePopup();

  const onPressLogin = () => {
    openPopup();
  };

  return (
    <SingleScreen>
      {popupState && (
        <Popup
          title="Error"
          content="Lorem ipsum dolor sit amet consequitur msectur ame. Le abbede o nette ra sem unto il."
          buttons={
            <Button active onPress={() => closePopup()}>
              OK
            </Button>
          }
        />
      )}
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
          type="password"
        />
        <Button
          active={email.inputValue.length > 0 && password.inputValue.length > 0}
          onPress={onPressLogin}
        >
          Login
        </Button>
        <Paragraph>
          Or create a <Link to="/register">new account</Link>
        </Paragraph>
      </Form>
    </SingleScreen>
  );
};

export default Login;
