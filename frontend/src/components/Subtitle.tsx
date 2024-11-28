import React from "react";

const Subtitle: React.FC<{ children: string }> = ({ children }) => {
  return <p className="subtitle">{children}</p>;
};

export default Subtitle;
