import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import Content from "../components/layouts/Content";
import Title from "../components/Title";
import Table from "../components/Table";
import Centralized from "../components/layouts/Centralized";
import Button from "../components/Button";
import ButtonWrapper from "../components/layouts/ButtonWrapper";

const Users = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/users?priority=%D0%BC%D0%BD%D0%B5%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE"
  );
  const navigate = useNavigate();
  console.log(data);

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  const onDeleteItem = (id) => {
    console.log(id);
  };

  return (
    <Content>
      <div className="flex-center">
        <Title>База данных пользователей</Title>
        <ButtonWrapper>
          <Button onPress={() => {}}>Скачать xlsx</Button>
        </ButtonWrapper>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {["Почта", "Зарегистрирован", "Роль", "Действие"].map(
                (colName, colIdx) => (
                  <th key={colIdx}>{colName}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td>{row.email}</td>
                  <td>{row.registrated}</td>
                  <td>{row.role}</td>
                  <td>
                    <button onClick={() => onDeleteItem(row.userId)}>
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

export default Users;
