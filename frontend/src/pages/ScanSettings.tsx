import React, { useState } from "react";
import SingleScreen from "../components/SingleScreen";
import Centralized from "../components/Centralized";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { setSearch } from "../redux/filters/slice";

const ScanSettings = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onPressStart = () => {
    dispatch(setSearch(url));
    navigate("/scans/" + Date.now());
  };

  return (
    <SingleScreen>
      <Centralized>
        <Form>
          <Input value={url} setter={setUrl} placeholder="Введите URL" />
          <Button active={url.length > 0} onPress={onPressStart}>
            Запустить сканирование
          </Button>
        </Form>
      </Centralized>
    </SingleScreen>
  );
};

export default ScanSettings;
