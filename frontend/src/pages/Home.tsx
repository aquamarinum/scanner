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

const aboutFeaturesArray: { icon: JSX.Element; text: string }[] = [
  { icon: <MicrochipIcon />, text: "Automated Scanning" },
  { icon: <DatabaseIcon />, text: "Vulnerability Database" },
  { icon: <FileIcon />, text: "Detailed Reports" },
  { icon: <UserInterfaceIcon />, text: "User-Friendly Interface" },
  { icon: <GitIcon />, text: "Open-Source" },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <SingleScreen>
        <Centralized>
          <div className="home-logo-container">
            <LogoIcon />
          </div>
          <Headline>AVSS</Headline>
          <Subtitle>
            Welcome to the Automated System for Searching for Vulnerabilities in
            Web Applications. The system engine allows you to perform real-time
            scanning and receive a detailed report on possible vulnerabilities
            and how to solve them
          </Subtitle>
          <div className="home button-container">
            <Button active onPress={() => navigate("/categories")}>
              Get started
            </Button>
          </div>
        </Centralized>
      </SingleScreen>
      <Wrapper>
        <Headline>About</Headline>
        <Title>Introduction</Title>
        <Paragraph>
          In today's digital world, the security of web applications is
          critically important. Our vulnerability scanning system is designed to
          identify and prevent potential threats that could jeopardize the data
          and functionality of your applications.
        </Paragraph>
        <Title>Goal</Title>
        <Paragraph>
          The primary goal of our system is to provide reliable protection for
          web applications against known and emerging vulnerabilities. We aim to
          enable developers and companies to focus on creating high-quality
          software without worrying about security.
        </Paragraph>
        <Title>What We Offer</Title>
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
        <Title>Why It Matters</Title>
        <Paragraph>
          With the rise of cyber threats and the constant emergence of new
          attack methods, securing web applications has never been more
          critical. Vulnerabilities can lead to data breaches, financial losses,
          and damage to a company's reputation. Our system helps minimize risks
          by allowing you to identify and address issues before they can be
          exploited by malicious actors.
        </Paragraph>
        <Title>Conclusion</Title>
        <Paragraph>
          The vulnerability scanning system for web applications is your trusted
          partner in ensuring security. We provide the tools and resources
          necessary to protect your software and user data. Trust us, and we
          will help you create a safer digital environment.
        </Paragraph>
      </Wrapper>
    </>
  );
};

export default Home;
