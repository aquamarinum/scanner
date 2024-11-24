import React from "react";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h4 className="title">{children}</h4>;
};

export default Title;
