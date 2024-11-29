import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Paragraph from "./Paragraph";
import {
  FileIcon,
  HomeIcon,
  LogoIcon,
  MicrochipIcon,
  OptionsIcon,
  ProfileIcon,
} from "./Icons";

const Header = () => {
  const { authToken } = useAuth();
  return (
    <header>
      <nav>
        <Link to="/">
          <LogoIcon />
        </Link>
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              <MicrochipIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms">
              <FileIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/options">
              <OptionsIcon />
            </NavLink>
          </li>
        </ul>
        <Link to="/profile">
          {authToken ? <ProfileIcon /> : <Paragraph>Login</Paragraph>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
