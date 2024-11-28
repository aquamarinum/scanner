import React, { ReactNode } from "react";

const Centralized: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="centralized">{children}</div>;
};

export default Centralized;
