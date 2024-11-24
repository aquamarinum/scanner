import React, { ReactNode, useRef } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";

type PopupProps = {
  title: string;
  content: string;
  buttons: ReactNode;
};

const Popup: React.FC<PopupProps> = ({ title, content, buttons }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-message">
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
        {buttons}
      </div>
    </div>
  );
};

export default Popup;
