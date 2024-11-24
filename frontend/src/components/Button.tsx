import React, { ReactNode } from "react";

type ButtonProps = {
  children: string | ReactNode;
  active: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, active, onPress }) => {
  if (!active) return <div className="button-disabled">{children}</div>;
  return (
    <button className="button" onClick={onPress}>
      {children}
    </button>
  );
};

export default Button;
