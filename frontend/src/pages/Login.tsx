import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";
import SingleScreen from "../components/SingleScreen";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Popup from "../components/Popup";
import { usePopup } from "../hooks/usePopup";
import { useSignInOut } from "../hooks/useSignInOut";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const Login = () => {
  const { loading, error, login, resetError } = useSignInOut();
  const { popupState, openPopup, closePopup } = usePopup();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (error) openPopup();
  }, [error]);

  const onPressLogin = () => {
    login(email, password);
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
        <Headline>Авторизация</Headline>
        <Input value={email} setter={setEmail} placeholder={"почта"} />
        <Input
          value={password}
          setter={setPassword}
          placeholder="пароль"
          type="password"
        />
        <Button
          active={email.length > 0 && password.length > 0}
          onPress={onPressLogin}
        >
          Войти
        </Button>
        <Paragraph>
          Создать <Link to="/register">новый аккаунт</Link>
        </Paragraph>
      </Form>
    </SingleScreen>
  );
};

export default Login;
