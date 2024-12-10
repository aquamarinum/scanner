import React from "react";

type TableRowType = {
  [key: string]: any;
};

type TableData = {
  head: string[];
  body: Array<TableRowType>;
};

const Table: React.FC<TableData> = ({ head, body }) => {
  const keys = Object.keys(body[0]);
  return (
    <div className="table-wrapper">
      <table>
        <tr>
          {head.map((colName, colIdx) => (
            <th key={colIdx}>{colName}</th>
          ))}
        </tr>
        {body.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {keys.map((key, idx) => (
              <td key={idx}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
