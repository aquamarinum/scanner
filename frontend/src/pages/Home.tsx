import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import LogoIcon from "../components/Icons/LogoIcon";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Centralized from "../components/Centralized";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";
import {
  DatabaseIcon,
  FileIcon,
  GitIcon,
  MicrochipIcon,
  UserInterfaceIcon,
} from "../components/Icons";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import ButtonWrapper from "../components/ButtonWrapper";

const aboutFeaturesArray: { icon: JSX.Element; text: string }[] = [
  { icon: <MicrochipIcon />, text: "Автоматизированное сканирование" },
  { icon: <DatabaseIcon />, text: "База данных уязвимостей" },
  { icon: <FileIcon />, text: "Подробные отчеты" },
  { icon: <UserInterfaceIcon />, text: "Удобный интерфейс" },
  { icon: <GitIcon />, text: "Открытый код" },
];

const Home = () => {
  // const { data, loading, error } = useFetch("home URL");
  const navigate = useNavigate();

  // if (loading) return <Loader />;

  return (
    <>
      <SingleScreen>
        <Centralized>
          <div className="home-logo-container">
            <LogoIcon />
          </div>
          <Headline>АСПУ</Headline>
          <Subtitle>
            Добро пожаловать в Автоматизированную систему поиска уязвимостей в
            веб-приложениях. Движок системы позволяет выполнять сканирование в
            режиме реального времени и получать подробный отчет о возможных
            уязвимостях и способах их устранения.
          </Subtitle>
          <ButtonWrapper>
            <Button active onPress={() => navigate("/categories")}>
              Начать работу
            </Button>
          </ButtonWrapper>
        </Centralized>
      </SingleScreen>
      <Wrapper>
        <Title>Легенда</Title>
        <Paragraph>
          В современном цифровом мире безопасность веб-приложений имеет решающее
          значение. Наша система сканирования уязвимостей предназначена для
          выявления и предотвращения потенциальных угроз, которые могут
          поставить под угрозу данные и функциональность ваших приложений.
        </Paragraph>
        <Title>Цель</Title>
        <Paragraph>
          Основная цель нашей системы — обеспечить надежную защиту
          веб-приложений от известных и новых уязвимостей. Мы стремимся
          позволяют разработчикам и компаниям сосредоточиться на создании
          высококачественных программное обеспечение, не беспокоясь о
          безопасности.
        </Paragraph>
        <Title>Особенности системы</Title>
        <div className="card-list">
          {aboutFeaturesArray.map((card) => (
            <Card
              icon={card.icon}
              text={card.text}
              key={card.text}
              onClick={() => {}}
            />
          ))}
        </div>
        <Title>Почему это важно</Title>
        <Paragraph>
          С ростом киберугроз и постоянным появлением новых методов атаки,
          защита веб-приложений никогда не была более критический. Уязвимости
          могут привести к утечке данных, финансовым потерям, и ущерб репутации
          компании. Наша система помогает минимизировать риски позволяя вам
          выявлять и решать проблемы до того, как они могут быть решены.
          эксплуатируется злоумышленниками.
        </Paragraph>
        <Title>Заключение</Title>
        <Paragraph>
          Система сканирования уязвимостей для веб-приложений — ваш надежный
          помощник партнер в обеспечении безопасности. Мы предоставляем
          инструменты и ресурсы необходимо для защиты вашего программного
          обеспечения и пользовательских данных. Доверьтесь нам, и мы поможет
          вам создать более безопасную цифровую среду.
        </Paragraph>
      </Wrapper>
    </>
  );
};

export default Home;
