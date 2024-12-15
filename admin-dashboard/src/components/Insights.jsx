import React from "react";

const Insights = ({ data }) => {
  return (
    <ul className="insights">
      {data.map((item, idx) => (
        <li key={idx}>
          <i className="bx"></i>
          <span className="info">
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Insights;
