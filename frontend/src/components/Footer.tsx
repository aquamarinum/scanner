import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <Title>АСПУ</Title>
        <ul className="footer-nav">
          <li>
            <Link to="/">
              <Paragraph>Домой</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <Paragraph>Категории</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/terms">
              <Paragraph>Условия</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/Options">
              <Paragraph>Опции</Paragraph>
            </Link>
          </li>
        </ul>
        <Subtitle>Все права защищены</Subtitle>
      </div>
    </footer>
  );
};

export default Footer;
