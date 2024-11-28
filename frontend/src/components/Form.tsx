import React, { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <form action="submit" autoComplete="on" noValidate className="form">
      {children}
    </form>
  );
};

export default Form;
