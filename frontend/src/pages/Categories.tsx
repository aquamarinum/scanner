import React from "react";
import SingleScreen from "../components/SingleScreen";
import Headline from "../components/Headline";
import {
  DatabaseIcon,
  FileIcon,
  GitIcon,
  GlobeIcon,
  LogoIcon,
  MicrochipIcon,
  PuzzleIcon,
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
          <Card
            icon={<LogoIcon />}
            text="Automated Scanning"
            onClick={() => navigate("/categories/0")}
          />
          <Card
            icon={<GlobeIcon />}
            text="XSS Test"
            onClick={() => navigate("/categories/1")}
          />
          <Card
            icon={<PuzzleIcon />}
            text="SQL Injection"
            onClick={() => navigate("/categories/2")}
          />
          <Card
            icon={<MicrochipIcon />}
            text="Optimization Test"
            onClick={() => navigate("/categories/3")}
          />
          <Card
            icon={<DatabaseIcon />}
            text="CVE Databse"
            onClick={() => navigate("/vulnerabilities")}
          />
          <Card
            icon={<GitIcon />}
            text="Contribute"
            onClick={() =>
              (window.location.href = "https://github.com/aquamarinum/scanner")
            }
          />
        </div>
      </Centralized>
    </SingleScreen>
  );
};

export default Categories;
