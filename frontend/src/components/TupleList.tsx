import React from "react";

type TupleListProps = {
  data: { key: string; value: string }[];
};

const TupleList: React.FC<TupleListProps> = ({ data }) => {
  return (
    <ul className="tuple-list">
      {data.map((item, idx) => (
        <li key={idx}>
          <p className="key">{item.key}</p>
          <p className="value">{item.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default TupleList;
