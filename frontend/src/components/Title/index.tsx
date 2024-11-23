import React from "react";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h6>{children}</h6>;
};

export default Title;
