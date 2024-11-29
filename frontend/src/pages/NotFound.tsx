import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Centralized from "../components/Centralized";
import Subtitle from "../components/Subtitle";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <SingleScreen>
      <Centralized>
        <Headline>NOT FOUND</Headline>
        <div className="error-text-container">
          <Subtitle>
            Awkward!!! The resource you looking for does not exist or probably
            you have no connection to the internet. Check the URL and try again.
          </Subtitle>
        </div>
        <div className="button-container">
          <Button active onPress={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </Centralized>
    </SingleScreen>
  );
};

export default NotFound;
