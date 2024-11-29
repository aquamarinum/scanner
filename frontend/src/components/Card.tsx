import React, { ReactNode } from "react";
import Paragraph from "./Paragraph";

type CardProps = {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ icon, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <div className="card-image-container">{icon}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
