import React from "react";
import Card from "./Card";
import LogoIcon from "./Icons/LogoIcon";

type CardListProps = {
  data: Array<any>;
};

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((val, idx) => (
        <Card icon={<LogoIcon />} text="Default" />
      ))}
    </div>
  );
};

export default CardList;
