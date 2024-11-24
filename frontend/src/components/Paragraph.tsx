import React, { ReactNode } from "react";

type ParagraphProps = {
  children: string | ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;
