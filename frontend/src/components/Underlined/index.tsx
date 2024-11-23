import React from "react";

type UnderlinedProps = {
  children: string;
  onClick: () => void;
};

const Underlined: React.FC<UnderlinedProps> = ({ children, onClick }) => {
  return <p onClick={onClick}>{children}</p>;
};

export default Underlined;
