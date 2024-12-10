import React, { useState } from "react";
import SingleScreen from "../SingleScreen";
import Centralized from "../Centralized";
import Headline from "../Headline";
import Input from "../Input";
import Form from "../Form";
import Button from "../Button";
import { useAppDispatch } from "../../redux/store";
import { setToken } from "../../redux/admin/slice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPressLogin = () => {
    if (inputValue === "adminadmin") {
      dispatch(setToken(inputValue));
    } else {
      navigate("/notfound");
    }
  };
  return (
    <SingleScreen>
      <Centralized>
        <Headline>Вход для администратора</Headline>
        <Form>
          <Input
            value={inputValue}
            setter={setInputValue}
            type="password"
            placeholder="Введите код"
          />
          <Button onPress={onPressLogin}>Войти</Button>
        </Form>
      </Centralized>
    </SingleScreen>
  );
};

export default AdminLogin;
