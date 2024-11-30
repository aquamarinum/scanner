import React, { useState } from "react";
import SingleScreen from "../components/SingleScreen";
import Centralized from "../components/Centralized";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Headline from "../components/Headline";
import TupleList from "../components/TupleList";
import Chart from "../components/Chart";
import ButtonWrapper from "../components/ButtonWrapper";
import { useNavigate } from "react-router-dom";
import Paragraph from "../components/Paragraph";

const fakedata1 = [
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
];

const Scan = () => {
  const [searchValue, setSearchValue] = useState<string>(
    "http://localhost:8080/scuns"
  );
  const [state, setState] = useState<"pending" | "success" | "error">(
    "success"
  );
  const [isUrlEntered, setUrlEntered] = useState(false);
  const navigate = useNavigate();

  const onChangeUrl = () => {
    setUrlEntered(false);
  };

  const startScanning = () => {
    setUrlEntered(true);
  };

  if (!isUrlEntered) {
    return (
      <SingleScreen>
        <Centralized>
          <Form>
            <Input
              value={searchValue}
              setter={setSearchValue}
              placeholder="URL..."
            />
            <Button active={searchValue.length > 0} onPress={startScanning}>
              Start
            </Button>
          </Form>
        </Centralized>
      </SingleScreen>
    );
  }

  return (
    <Wrapper>
      <Headline>Results</Headline>
      <div className="scan-url">
        <div className="search-block" onClick={onChangeUrl}>
          <Paragraph>{searchValue}</Paragraph>
        </div>
      </div>
      <div className="scan-status-bar">
        <TupleList data={fakedata1} />
        <Chart value={75} state={state} />
        <TupleList data={fakedata1} />
      </div>
      {state === "success" && (
        <ButtonWrapper>
          <Button onPress={() => navigate("/reports/1234567890")}>
            Report
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default Scan;
