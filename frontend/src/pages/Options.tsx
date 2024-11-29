import { useState } from "react";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const tempoptions = ["personal", "appearance", "system"];

const Options = () => {
  const [activeOption, setActiveOption] = useState(0);
  const { data, loading, error } = useFetch("options GET");

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <div className="options-container">
        <div className="options-tab">
          <Title>Tab</Title>
          <ul className="options-tab-list">
            {tempoptions.map((val, idx) => (
              <li
                className={activeOption === idx ? "active" : ""}
                onClick={() => setActiveOption(idx)}
              >
                <Paragraph>{val}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
        <div className="options-config">
          <Title>Option Block</Title>
          <ul className="options-category-list">
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
          </ul>
          <Title>Option Block</Title>
          <ul className="options-category-list">
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
            <li>
              <Paragraph>Option 1</Paragraph>
              <Paragraph>Value 1</Paragraph>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Options;
