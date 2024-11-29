import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../hooks/usePopup";
import { useSignInOut } from "../hooks/useSignInOut";

import Form from "../components/Form";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import Paragrapgh from "../components/Paragraph";
import SingleScreen from "../components/SingleScreen";
import Loader from "../components/Loader";
import Popup from "../components/Popup";
import { useValidation } from "../hooks/useValidation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValidator] = useValidation("email", email);
  const [passValidator] = useValidation("password", password);

  const { loading, error, register, resetError } = useSignInOut();
  const { popupState, openPopup, closePopup } = usePopup();

  useEffect(() => {
    if (error) openPopup();
  }, [error]);

  const onPressLogin = () => {
    register(email, password);
  };

  const onClosePopup = () => {
    closePopup();
    resetError();
  };

  if (loading) return <Loader />;

  return (
    <SingleScreen>
      {popupState && (
        <Popup
          title="Error"
          content="Incorrect data or bad internet connection. Try to fix and do it again"
          buttons={
            <Button active onPress={onClosePopup}>
              OK
            </Button>
          }
        />
      )}
      <Form>
        <Headline>Sign Up</Headline>
        <Input
          value={email}
          setter={setEmail}
          label={emailValidator}
          placeholder={"email"}
        />
        <Input
          value={password}
          setter={setPassword}
          label={passValidator}
          placeholder="password"
          type="password"
        />
        <Input
          value={confirmPassword}
          setter={setConfirmPassword}
          label={""}
          placeholder="confirm password"
          type="password"
        />
        <Button
          active={
            password.length !== 0 &&
            !emailValidator &&
            !passValidator &&
            password === confirmPassword
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
