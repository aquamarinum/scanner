import React, { ReactNode } from "react";

const Button = ({ children, onPress, active = true }) => {
  if (!active) return <div className="button-disabled">{children}</div>;
  return (
    <button className="button" onClick={onPress}>
      {children}
    </button>
  );
};

export default Button;
