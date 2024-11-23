import React, { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Form;
