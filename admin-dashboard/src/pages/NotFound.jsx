import React from "react";
import { useNavigate } from "react-router-dom";

import SingleScreen from "../components/layouts/SingleScreen";
import Centralized from "../components/layouts/Centralized";

import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import ButtonWrapper from "../components/layouts/ButtonWrapper";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <SingleScreen>
      <Centralized>
        <Title>Не получилось ;(</Title>
        <div className="error-text-container">
          <Subtitle>
            Похоже что-то пошло не так... Проверьте подключение к интернету и
            правильность введенного адреса. Если это наша проблема, то мы уже
            занимаемся её решением.
          </Subtitle>
        </div>
        <ButtonWrapper>
          <Button active onPress={() => navigate(-2)}>
            Назад
          </Button>
        </ButtonWrapper>
      </Centralized>
    </SingleScreen>
  );
};

export default NotFound;
