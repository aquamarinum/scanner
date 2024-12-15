import React, { ReactNode, useRef } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Popup = ({ title, content, buttons }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-message">
        <Title>{title}</Title>
        <Subtitle>{content}</Subtitle>
        {buttons}
      </div>
    </div>
  );
};

export default Popup;
