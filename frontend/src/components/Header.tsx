import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "./Icons/LogoIcon";
import HomeIcon from "./Icons/HomeIcon";
import CategoriesIcon from "./Icons/CategoriesIcon";
import TermsIcon from "./Icons/TermsIcon";
import OptionsIcon from "./Icons/OptionsIcon";
import ThemeIcon from "./Icons/ThemeIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";
import Title from "./Title";
import Paragraph from "./Paragraph";

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
              <CategoriesIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms">
              <TermsIcon />
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
