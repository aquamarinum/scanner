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
        <Headline>Категории</Headline>
        <div className="card-list">
          <Card
            icon={<LogoIcon />}
            text="Автоматизированное сканирование"
            onClick={() => navigate("/search")}
          />
          <Card
            icon={<GlobeIcon />}
            text="Тестирование на XSS"
            onClick={() => navigate("/search")}
          />
          <Card
            icon={<PuzzleIcon />}
            text="Тестирование на SQL инъекцию"
            onClick={() => navigate("/search")}
          />
          <Card
            icon={<MicrochipIcon />}
            text="Оптимизационное тестирование"
            onClick={() => navigate("/search")}
          />
          <Card
            icon={<DatabaseIcon />}
            text="База данных CVE"
            onClick={() => navigate("/vulnerabilities")}
          />
          <Card
            icon={<GitIcon />}
            text="Инспектировать"
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
