import React from "react";

import Title from "./Title";

const Messages = ({ messages }) => {
  return (
    <div className="reminders">
      <div className="header">
        <i className="bx bx-note"></i>
        <Title>Что-то</Title>
        <i className="bx bx-filter"></i>
        <i className="bx bx-plus"></i>
      </div>
      <ul className="task-list">
        {messages &&
          messages.map((action, idx) => (
            <li className="completed" key={idx}>
              <div className="task-title">
                <i className="bx bx-check-circle"></i>
                <p>{action.title}</p>
              </div>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Messages;
