import React, { ReactNode } from "react";

const SingleScreen: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="single-screen">{children}</div>;
};

export default SingleScreen;
