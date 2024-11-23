import React from "react";

type HeaderProps = {
  children: string;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Header;
