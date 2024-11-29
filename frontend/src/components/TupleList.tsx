import React from "react";

const TupleList = () => {
  return (
    <ul className="tuple-list">
      <li>
        <p className="key">Key param 123</p>
        <p className="value">Value param 123</p>
      </li>
      <li>
        <p className="key">123</p>
        <p className="value">Value 123</p>
      </li>
      <li>
        <p className="key">Key param 123</p>
        <p className="value">Value param</p>
      </li>
      <li>
        <p className="key">Key param 123</p>
        <p className="value">Value param 123</p>
      </li>
    </ul>
  );
};

export default TupleList;
