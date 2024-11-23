import React from "react";

type SubtitleProps = {
  content: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ content }) => {
  return <p>{content}</p>;
};

export default Subtitle;
