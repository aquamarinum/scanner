import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";

import Title from "../components/Title";
import Insights from "../components/Insights";
import Actions from "../components/Actions";
import Messages from "../components/Messages";
import Content from "../components/layouts/Content";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData("http://localhost:5000/api/logs")
      .then((res) => {
        setData(res.data);
      })
      .then(() =>
        getData("http://localhost:5000/api/stats")
          .then((res) => setStats(res.data))
          .catch((err) => setError(true))
      )
      .catch((err) => {
        console.log("[ERROR] CATCH HANDLING ERROR");
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(stats);

  if (loading) return <Loader />;

  if (error) navigate("/notfound");
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
            { value: stats.users.count, title: "Пользователей" },
            { value: stats.vulns.count, title: "Уязвимостей" },
            { value: stats.scans.count, title: "Сканирований" },
            { value: stats.reports.count, title: "Отчетов" },
          ]}
        />

        <div className="bottom-data">
          <Actions actions={data} />

          {/* <Messages
            messages={[
              { title: "Database updated" },
              { title: "Database dropped" },
              { title: "Database updated" },
              { title: "Database dropped" },
              { title: "Database updated" },
              { title: "Database dropped" },
            ]}
          /> */}
        </div>
      </main>
    </Content>
  );
};

export default Analytics;
