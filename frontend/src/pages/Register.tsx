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
          title="Ошибка"
          content="Данные введены неправильно или плохое подключение к интернету. Проверьте и попробуйте ещё раз"
          buttons={
            <Button active onPress={onClosePopup}>
              OK
            </Button>
          }
        />
      )}
      <Form>
        <Headline>Регистрация</Headline>
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
          Зарегистрироваться
        </Button>
        <Paragrapgh>
          Вернуться к <Link to="/login">авторизации</Link>
        </Paragrapgh>
      </Form>
    </SingleScreen>
  );
};

export default Register;
