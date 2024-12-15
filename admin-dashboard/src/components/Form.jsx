import React, { ReactNode } from "react";

const Form = ({ children }) => {
  return (
    <form
      action="submit"
      autoComplete="on"
      noValidate
      className="form"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </form>
  );
};

export default Form;
