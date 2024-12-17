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

const Vulnerabilities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);

  let url = `http://localhost:5000/api/vulns?sortby=${sort}&order=${order}&page=${page}&limit=10`;

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
      .delete("http://localhost:5000/api/vulns/" + id)
      .then((res) =>
        setData((prev) => prev.filter((el) => el.vulnerabilityId !== id))
      )
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  return (
    <Content>
      <div className="flex-center">
        <Title>База данных уязвимостей</Title>
        <ButtonWrapper>
          <Button onPress={() => createReport(data, "vulnerabilities")}>
            Скачать xlsx
          </Button>
        </ButtonWrapper>
      </div>

      <div className="filters-block">
        <Subtitle>Сортировать по: </Subtitle>
        <ul>
          {["title", "danger", "published", "modified"].map((el) => (
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
        <Subtitle>Страница: </Subtitle>
        <ul>
          <li
            onClick={() => {
              if (page > 1) setPage((prev) => prev - 1);
            }}
          >
            {" "}
            &#x2B05;
          </li>
          <li>{page}</li>
          <li
            onClick={() => {
              if (page < 11) setPage((prev) => prev + 1);
            }}
          >
            &#x27A1;
          </li>
        </ul>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {[
                "Идентификатор",
                "Название",
                "Описание",
                "Опасность",
                "Создана",
                "Обновлена",
                "Действие",
              ].map((colName, colIdx) => (
                <th key={colIdx}>{colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td>{row.vulnerabilityId}</td>
                  <td>{row.title}</td>
                  <td>{row.description}</td>
                  <td>{row.danger}</td>
                  <td>{row.published}</td>
                  <td>{row.modified}</td>
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

export default Vulnerabilities;
