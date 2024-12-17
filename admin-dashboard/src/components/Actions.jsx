import React from "react";

import Title from "./Title";

const Actions = ({ actions = null }) => {
  const defineAction = (act) => {
    switch (act) {
      case "CREATE":
        return "success";
      case "UPDATE":
        return "pending";
      case "INSERT":
        return "pending";
      case "DELETE":
        return "failed";

      default:
        return "failed";
    }
  };
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
              {["Идентификатор", "время", "состояние"].map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actions &&
              actions.map((action, idx) => (
                <tr key={idx}>
                  <td>{action.logId}</td>
                  <td>{action.time}</td>
                  <td>
                    <span className={"status " + defineAction(action.action)}>
                      {action.action}
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
