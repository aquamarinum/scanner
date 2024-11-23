import React, { ReactNode } from "react";

type SubtitleProps = {
  children: string | ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Subtitle;
