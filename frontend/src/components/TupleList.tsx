import React from "react";

type TupleListProps = {
  data: Record<string, string>[];
};

const TupleList: React.FC<TupleListProps> = ({ data }) => {
  return (
    <ul className="tuple-list">
      {data.map((item, idx) => (
        <li key={idx}>
          <p className="key">{item[0]}</p>
          <p className="value">{item[1]}</p>
        </li>
      ))}
    </ul>
  );
};

export default TupleList;
