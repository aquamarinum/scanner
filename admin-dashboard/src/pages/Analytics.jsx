import React from "react";
import Title from "../components/Title";
import Insights from "../components/Insights";
import Actions from "../components/Actions";
import Messages from "../components/Messages";
import Content from "../components/layouts/Content";
import Button from "../components/Button";

const Analytics = () => {
  return (
    <Content>
      <main>
        <div className="header">
          <div className="left">
            <Title>Аналитика</Title>
            {/* <ul className="breadcrumb">
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
              /
              <li>
                <a href="#" className="active">
                  Shop
                </a>
              </li>
            </ul> */}
          </div>
          {/* <a href="#" className="report">
            <i className="bx bx-cloud-download"></i>
            <span>Download CSV</span>
          </a> */}
        </div>

        <Insights
          data={[
            { value: 123, title: "Посещений" },
            { value: 999999, title: "Сканирований" },
            { value: 123, title: "Уязвимостей" },
            { value: 999999, title: "Операций" },
          ]}
        />

        <div className="bottom-data">
          <Actions
            actions={[
              { username: "John Doe", date: "14.12.2024", status: "success" },
              { username: "Not john", date: "13.12.2024", status: "pending" },
              { username: "Next john", date: "12.12.2024", status: "failed" },
              { username: "John Doe", date: "14.12.2024", status: "success" },
              { username: "Not john", date: "13.12.2024", status: "pending" },
              { username: "Next john", date: "12.12.2024", status: "failed" },
              { username: "John Doe", date: "14.12.2024", status: "success" },
              { username: "Not john", date: "13.12.2024", status: "pending" },
              { username: "Next john", date: "12.12.2024", status: "failed" },
            ]}
          />

          <Messages
            messages={[
              { title: "Database updated" },
              { title: "Database dropped" },
              { title: "Database updated" },
              { title: "Database dropped" },
              { title: "Database updated" },
              { title: "Database dropped" },
            ]}
          />
        </div>
      </main>
    </Content>
  );
};

export default Analytics;
