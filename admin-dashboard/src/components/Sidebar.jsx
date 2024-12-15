import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const { signout } = useAuth();

  const onClickSignOut = () => {
    signout();
  };

  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <i className="bx bx-code-alt"></i>
        <div className="logo-name">
          <span>АСПУ</span>
        </div>
      </Link>
      <ul className="side-menu">
        {[
          {
            name: "Аналитика",
            path: "/analytics",
          },
          {
            name: "Пользователи",
            path: "/management/users",
          },
          {
            name: "Сканирования",
            path: "/management/scans",
          },
          {
            name: "Цели",
            path: "/management/targets",
          },
          {
            name: "Уязвимости",
            path: "/management/vulnerabilities",
          },
          {
            name: "Отчеты",
            path: "/management/reports",
          },
        ].map((item, idx) => (
          <li
            key={idx}
            className={activeLink === idx ? "active" : ""}
            onClick={() => setActiveLink(idx)}
          >
            <Link to={item.path}>
              <i className="bx"></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li onClick={onClickSignOut}>
          <Link className="logout">
            <i className="bx"></i>
            Выход
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
