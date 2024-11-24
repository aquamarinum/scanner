import React from "react";

type HeadlineProps = {
  children: string;
};

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return <h2 className="headline">{children}</h2>;
};

export default Headline;
