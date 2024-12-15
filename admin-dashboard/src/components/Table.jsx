import React from "react";

import Title from "./Title";

const Table = ({ head = [], body = [] }) => {
  if (head.length === 0 || body.length === 0) return <Title>Table empty</Title>;

  const keys = Object.keys(body[0]);

  const onDeleteItem = (id) => {
    //! ROW IDX NOW HERE ...
  };
  return (
    <div className="table-wrapper">
      <table>
        <tr>
          {head.length > 0 &&
            head.map((colName, colIdx) => <th key={colIdx}>{colName}</th>)}
        </tr>
        {body.length > 0 &&
          body.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {keys.map((key, idx) => (
                <td key={idx}>{row[key]}</td>
              ))}
              <td>
                <button onPress={() => onDeleteItem(rowIdx)}>Удалить</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Table;
