import React from "react";

import Title from "./Title";

const Actions = ({ actions = null }) => {
  return (
    <div className="orders">
      <div className="header">
        <i className="bx bx-receipt"></i>
        <Title>Последние действия</Title>
        <i className="bx bx-filter"></i>
        <i className="bx bx-search"></i>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {["автор", "дата", "статус"].map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actions &&
              actions.map((action, idx) => (
                <tr key={idx}>
                  <td>{action.username}</td>
                  <td>{action.date}</td>
                  <td>
                    <span className={"status " + action.status}>
                      {action.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Actions;
