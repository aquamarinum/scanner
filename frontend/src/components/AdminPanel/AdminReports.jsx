import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { GET_REPORTS_URL } from "../../constants/BER";
import Wrapper from "../Wrapper";
import Loader from "../Loader";

const AdminReports = () => {
  const { data, loading, error } = useFetch(
    GET_REPORTS_URL + "?priority=мнеможно"
  );
  console.log(data);

  if (loading) return <Loader />;

  if (error) return <h1>error</h1>;

  const keys = Object.keys(data[0]);

  return (
    <Wrapper>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>идентификатор отчета</th>
            <th>идентификатор сканирования</th>
            <th>дата</th>
            <th>ресурс</th>
            <th>формат</th>
            <th>действие</th>
          </tr>
          {data.length > 0 &&
            data.map((row) => (
              <tr>
                {keys.map((key) => (
                  <td>{row[key]}</td>
                ))}
                <td>
                  <button>удалить</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </Wrapper>
  );
};

export default AdminReports;
