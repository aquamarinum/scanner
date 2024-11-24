import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuthInput } from "../hooks/useAuthInput";
import Form from "../components/Form";
import SingleScreen from "../components/SingleScreen";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Popup from "../components/Popup";
import { usePopup } from "../hooks/usePopup";
import { useSignInOut } from "../hooks/useSignInOut";
import Loader from "../components/Loader";
import { useEffect } from "react";

const Login = () => {
  const email = useAuthInput("", "free");
  const password = useAuthInput("", "free");
  const { loading, error, login, resetError } = useSignInOut();
  const { popupState, openPopup, closePopup } = usePopup();

  useEffect(() => {
    if (error) openPopup();
  }, [error]);

  const onPressLogin = () => {
    login(email.inputValue, password.inputValue);
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
          content="Invalid data or bad connection. Check your credentials and internet connection and try again"
          buttons={
            <Button active onPress={onClosePopup}>
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
