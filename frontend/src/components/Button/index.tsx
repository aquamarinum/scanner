import React from "react";

type ButtonProps = {
  children: string;
  active: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, active, onPress }) => {
  return (
    <div onClick={onPress}>
      <div>{children}</div>
    </div>
  );
};

export default Button;
