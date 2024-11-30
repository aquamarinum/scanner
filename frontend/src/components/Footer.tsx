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
        <Title>AVSS</Title>
        <ul className="footer-nav">
          <li>
            <Link to="/">
              <Paragraph>Home</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <Paragraph>Categories</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/terms">
              <Paragraph>Terms</Paragraph>
            </Link>
          </li>
          <li>
            <Link to="/Options">
              <Paragraph>Options</Paragraph>
            </Link>
          </li>
        </ul>
        <Subtitle>All right reserved</Subtitle>
      </div>
    </footer>
  );
};

export default Footer;
