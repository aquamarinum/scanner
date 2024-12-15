import { useEffect, useState } from "react";
import { usePopup } from "../hooks/usePopup";

import SingleScreen from "../components/layouts/SingleScreen";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Popup from "../components/Popup";
import Title from "../components/Title";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { popupState, openPopup, closePopup } = usePopup();
  const [inputValue, setInputValue] = useState("");
  const { signin } = useAuth();

  const navigate = useNavigate();

  const onPressLogin = () => {
    if (inputValue === "admin") {
      signin(inputValue);
      navigate("/");
    } else {
      openPopup();
    }
  };

  const onClosePopup = () => {
    closePopup();
  };

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
        <Title>Вход для администраторов</Title>
        <Input
          value={inputValue}
          setter={setInputValue}
          placeholder={"секретный ключ"}
          type="password"
        />
        <Button active={inputValue.length > 0} onPress={onPressLogin}>
          Войти
        </Button>
      </Form>
    </SingleScreen>
  );
};

export default Login;
