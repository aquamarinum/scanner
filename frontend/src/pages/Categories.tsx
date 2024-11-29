import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import {
  DatabaseIcon,
  FileIcon,
  GitIcon,
  MicrochipIcon,
  UserInterfaceIcon,
} from "../components/Icons";
import Card from "../components/Card";
import Centralized from "../components/Centralized";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const aboutFeaturesArray: { icon: JSX.Element; text: string }[] = [
  { icon: <MicrochipIcon />, text: "Automated Scanning" },
  { icon: <DatabaseIcon />, text: "Vulnerability Database" },
  { icon: <FileIcon />, text: "Detailed Reports" },
  { icon: <UserInterfaceIcon />, text: "User-Friendly Interface" },
  { icon: <GitIcon />, text: "Open-Source" },
  { icon: <GitIcon />, text: "Open-Source2" },
  { icon: <GitIcon />, text: "Open-Source3" },
];

const Categories = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("url");

  if (loading) return <Loader />;

  return (
    <SingleScreen>
      <Centralized>
        <Headline>Categories</Headline>
        <div className="card-list">
          {aboutFeaturesArray.map((card, idx) => (
            <Card
              icon={card.icon}
              text={card.text}
              key={card.text}
              onClick={() => navigate(`/categories/${idx}`)}
            />
          ))}
        </div>
      </Centralized>
    </SingleScreen>
  );
};

export default Categories;
