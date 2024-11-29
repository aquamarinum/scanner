import React from "react";

const ButtonWrapper: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="button-wrapper">{children}</div>;
};

export default ButtonWrapper;
