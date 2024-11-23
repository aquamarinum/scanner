import React from "react";

type SubtitleProps = {
  children: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Subtitle;
