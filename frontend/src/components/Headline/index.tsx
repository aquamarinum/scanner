import React from "react";

type HeadlineProps = {
  children: string;
};

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Headline;
