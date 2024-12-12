import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Headline from "../components/Headline";
import Chart from "../components/Chart";
import { useNavigate, useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Loader from "../components/Loader";
import { useAppSelector } from "../redux/store";
import { searchSelector } from "../redux/filters/selectors";
import Title from "../components/Title";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { ScanType } from "../@types/Scan";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import * as XLSX from "xlsx";

interface Audit {
  score: number;
  title: string;
  id: string;
  description: string;
}
interface LighthouseResult {
  categories: {
    performance: { score: number };
    accessibility: { score: number };
    "best-practices": { score: number };
    seo: { score: number };
  };
  audits: Record<string, Audit>;
}

interface PageSpeedData {
  analysisUTCTimestamp: string;
  captchaResult: string;
  id: string;
  kind: string;
  lighthouseResult: LighthouseResult;
  loadingExperience: any; // Замените на более специфичный интерфейс, если необходимо
}

const Scan = () => {
  const navigate = useNavigate();
  const searchValue = useAppSelector(searchSelector);

  const [data, setData] = useState<PageSpeedData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { authToken } = useAuth();

  useEffect(() => {
    async function getData() {
      try {
        const resp = await axios.get(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchValue}&key=AIzaSyA8XFjkHBVfFyv5YNum5VoWx2eTr3VwtZU`
        );
        const date = new Date();
        const scan: ScanType = {
          scanid: Date.now().toString(),
          userid: authToken as string,
          started:
            date.getFullYear() +
            "-" +
            date.getMonth() +
            "-" +
            date.getDate() +
            " " +
            date.toLocaleTimeString(),
          ended:
            date.getFullYear() +
            "-" +
            date.getMonth() +
            "-" +
            date.getDate() +
            " " +
            date.toLocaleTimeString(),
          status: "finished",
          type: "full-testing",
        };
        await axios
          .post("http://localhost:3001/api/scans", scan)
          .then((res) => console.log("SUCCESS", res))
          .catch((err) => console.log("ERROR SCAN", err));
        await axios.post("http://localhost:3001/api/reports", {
          reportid: "rep" + Date.now(),
          scanid: scan.scanid,
        });
        setData(resp.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, []);

  const performance = data?.lighthouseResult.categories.performance.score;

  const onChangeUrl = () => {
    navigate("/search");
  };

  const onCreateReport = () => {
    if (data) {
      const worksheet = XLSX.utils.json_to_sheet(
        Object.values(data.lighthouseResult.audits)
      );
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "scanData");

      // Создание файла Excel
      XLSX.writeFile(workbook, "scanData.xlsx");
    }
  };

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  return (
    <Wrapper>
      <Headline>Results</Headline>
      <div className="scan-url">
        <div className="search-block" onClick={onChangeUrl}>
          <Paragraph>{searchValue}</Paragraph>
        </div>
      </div>
      <div className="scan-status-bar">
        <Title>Total score: </Title>
        <Chart
          value={performance ? performance * 100 : 0}
          state={data ? "success" : "error"}
        />
        <Button onPress={onCreateReport}>Report</Button>
      </div>
      <Title>Full info</Title>
      {data && (
        <Table
          head={["id", "title", "description", "score"]}
          body={Object.values(data.lighthouseResult.audits).map(
            ({ id, title, description, score }) => ({
              id,
              title,
              description,
              score,
            })
          )}
        />
      )}
    </Wrapper>
  );
};

export default Scan;
