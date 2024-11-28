import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import LogoIcon from "../components/Icons/LogoIcon";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Centralized from "../components/Centralized";

const Home = () => {
  return (
    <SingleScreen>
      <Centralized>
        <div className="home-logo-container">
          <LogoIcon />
        </div>
        <Headline>Home</Headline>
        <Paragraph>
          Welcome to the Automatized Vulnerability Scanning System...
        </Paragraph>
        <div className="home button-container">
          <Button active onPress={() => {}}>
            Get started
          </Button>
        </div>
      </Centralized>
    </SingleScreen>
  );
};

export default Home;
