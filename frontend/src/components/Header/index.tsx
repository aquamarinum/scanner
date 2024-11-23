import React from "react";

type HeaderProps = {
  content: string;
};

const Header: React.FC<HeaderProps> = ({ content }) => {
  return <h2>{content}</h2>;
};

export default Header;
