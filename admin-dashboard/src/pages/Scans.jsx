import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/getData";

import Loader from "../components/Loader";
import Content from "../components/layouts/Content";
import Title from "../components/Title";
import Button from "../components/Button";
import ButtonWrapper from "../components/layouts/ButtonWrapper";
import Subtitle from "../components/Subtitle";
import { createReport } from "../utils/createReport";

const Scans = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("userId");
  const [order, setOrder] = useState("asc");

  let url = `http://localhost:5000/api/scans?sortby=${sort}&order=${order}`;

  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    getData(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("[ERROR] CATCH HANDLING ERROR");
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [url]);

  const onDeleteItem = (id) => {
    setLoading(true);
    axios
      .delete("http://localhost:5000/api/scans/" + id)
      .then((res) => setData((prev) => prev.filter((el) => el.userId !== id)))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  return (
    <Content>
      <div className="flex-center">
        <Title>База данных сканирований</Title>
        <ButtonWrapper>
          <Button onPress={() => createReport(data, "scans")}>
            Скачать xlsx
          </Button>
        </ButtonWrapper>
      </div>

      <div className="filters-block">
        <Subtitle>Сортировать по: </Subtitle>
        <ul>
          {["userId", "started", "type", "status"].map((el) => (
            <li
              onClick={() => setSort(el)}
              className={el === sort ? "active" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
        <Subtitle>Порядок: </Subtitle>
        <ul>
          {["asc", "desc"].map((el) => (
            <li
              onClick={() => setOrder(el)}
              className={el === order ? "active" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {[
                "Идентификатор",
                "Пользователь",
                "Начало",
                "Конец",
                "тип",
                "статус",
                "действие",
              ].map((colName, colIdx) => (
                <th key={colIdx}>{colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td>{row.scanid}</td>
                  <td>{row.userId}</td>
                  <td>{row.started}</td>
                  <td>{row.ended}</td>
                  <td>{row.type}</td>
                  <td>{row.status}</td>
                  <td>
                    <button onClick={() => onDeleteItem(row.scanid)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Content>
  );
};

export default Scans;
