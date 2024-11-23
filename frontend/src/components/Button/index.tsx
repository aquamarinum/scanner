import React from "react";

type ButtonProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, active, onPress }) => {
  return (
    <div onClick={onPress}>
      <div>{label}</div>
    </div>
  );
};

export default Button;
