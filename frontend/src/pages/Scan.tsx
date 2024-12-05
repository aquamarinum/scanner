import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Headline from "../components/Headline";
import TupleList from "../components/TupleList";
import Chart from "../components/Chart";
import ButtonWrapper from "../components/ButtonWrapper";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import Paragraph from "../components/Paragraph";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useAppSelector } from "../redux/store";
import { searchSelector } from "../redux/filters/selectors";

const fakedata1 = [
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
];

interface LighthouseResult {
  categories: {
    performance: { score: number };
    accessibility: { score: number };
    "best-practices": { score: number };
    seo: { score: number };
  };
  audits: {
    [key: string]: {
      id: string;
      description: string;
      score: number;
      title: string;
    };
  };
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
  const { data, loading, error } = useFetch<PageSpeedData>(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchValue}&key=AIzaSyA8XFjkHBVfFyv5YNum5VoWx2eTr3VwtZU`
  );
  const { id } = useParams();
  console.log("data: ", data);
  if (data) {
    //@ts-ignore
    console.log(data.lighthouseResult.audits);
  }

  const performance = data?.lighthouseResult.categories.performance.score;

  const onChangeUrl = () => {
    navigate("/search");
  };

  const onCreateReport = () => {
    navigate(`/reports/${id}`);
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
        <TupleList data={fakedata1} />
        <Chart
          value={performance ? performance * 100 : 0}
          state={data ? "success" : "error"}
        />
        <TupleList data={fakedata1} />
      </div>

      <ButtonWrapper>
        <Button onPress={onCreateReport}>Report</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Scan;
