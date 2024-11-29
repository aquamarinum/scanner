import React, { ReactNode, useRef } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import Headline from "./Headline";

type PopupProps = {
  title: string;
  content: string;
  buttons: ReactNode;
};

const Popup: React.FC<PopupProps> = ({ title, content, buttons }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-message">
        <Headline>{title}</Headline>
        <Subtitle>{content}</Subtitle>
        {buttons}
      </div>
    </div>
  );
};

export default Popup;
