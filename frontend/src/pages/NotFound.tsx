import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <SingleScreen>
      <div className="error-container">
        <Headline>NOT FOUND</Headline>
        <div className="error-text-container">
          <Paragraph>
            Awkward!!! The resource you looking for does not exist or probably
            you have no connection to the internet. Check the URL and try again.
          </Paragraph>
        </div>
        <div className="error-button-container">
          <Button active onPress={() => navigate("/")}>
            Go Back
          </Button>
        </div>
      </div>
    </SingleScreen>
  );
};

export default NotFound;
