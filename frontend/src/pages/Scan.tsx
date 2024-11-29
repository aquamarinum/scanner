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

const Scan = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    // <SingleScreen>
    //   <Centralized>
    //     <Form>
    //       <Input
    //         value={searchValue}
    //         setter={setSearchValue}
    //         placeholder="URL..."
    //       />
    //       <Button
    //         active={searchValue.length > 0}
    //         onPress={() => alert("submttd")}
    //       >
    //         Search
    //       </Button>
    //     </Form>
    //   </Centralized>
    // </SingleScreen>
    <Wrapper>
      <Headline>Results</Headline>
      <div className="scan-status-bar">
        <TupleList />
        <Chart />
        <TupleList />
      </div>
    </Wrapper>
  );
};

export default Scan;
