import React from "react";

type TitleProps = {
  content: string;
};

const Title: React.FC<TitleProps> = ({ content }) => {
  return <h6>{content}</h6>;
};

export default Title;
