import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/getData";

import Loader from "../components/Loader";
import Content from "../components/layouts/Content";
import Title from "../components/Title";
import Button from "../components/Button";
import ButtonWrapper from "../components/layouts/ButtonWrapper";
import Input from "../components/Input";
import Subtitle from "../components/Subtitle";
import { createReport } from "../utils/createReport";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("email");
  const [order, setOrder] = useState("asc");
  let url = `http://localhost:5000/api/users?sortby=${sort}&order=${order}`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("role");

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
    console.log(id);
    setLoading(true);
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then((res) => setData((prev) => prev.filter((el) => el.userId !== id)))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  const onAddItem = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      email.includes(" ") ||
      password.includes(" ")
    )
      return;
    const newUser = {
      id: "ur" + Date.now(),
      email: email,
      role: "user",
    };
    setEmail("");
    setPassword("");
    setLoading(true);
    axios
      .post("http://localhost:5000/api/users", newUser)
      .then((res) =>
        setData((prev) => [
          ...prev,
          {
            userId: newUser.id,
            email: newUser.email,
            role: newUser.role,
            registrated:
              new Date().toLocaleDateString() +
              " " +
              new Date().toLocaleTimeString(),
          },
        ])
      )
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  // const onChangeRole = (role) => {
  //   if (role === "user" || role === "admin") {
  //     setRole(role);
  //   }
  // };

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  return (
    <Content>
      <div className="flex-center">
        <Title>База данных пользователей</Title>
        <ButtonWrapper>
          <Button onPress={() => createReport(data, "users")}>
            Скачать xlsx
          </Button>
        </ButtonWrapper>
      </div>

      <div className="filters-block">
        <Subtitle>Сортировать по: </Subtitle>
        <ul>
          {["email", "registrated", "role"].map((el) => (
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
      <div className="adder">
        <Input
          placeholder="почта"
          type="email"
          value={email}
          setter={setEmail}
        />
        <Input
          placeholder="пароль"
          type="password"
          value={password}
          setter={setPassword}
        />
        {/* <select
          name="role"
          id="select-role"
          onChange={(e) => onChangeRole(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select> */}
        <Button
          onPress={onAddItem}
          active={
            email.length > 3 &&
            password.length > 3 &&
            !email.includes(" ") &&
            !password.includes(" ")
          }
        >
          Создать
        </Button>
      </div>
    </Content>
  );
};

export default Users;
