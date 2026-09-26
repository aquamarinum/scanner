import { useSignInOut } from "../hooks/useSignInOut";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../hooks/useAuth";

import Button from "../components/Button";
import Loader from "../components/Loader";
import ButtonWrapper from "../components/ButtonWrapper";
import Wrapper from "../components/Wrapper";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import { ProfileIcon } from "../components/Icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/Table";
import {
  GET_REPORTS_URL,
  GET_SCANS_URL,
  GET_USERS_URL,
} from "../constants/BER";
import { User } from "../@types/User";
import { ScanType } from "../@types/Scan";
import { Report } from "../@types/Report";
import axios from "axios";

const temptabs = ["Сканирования", "Отчеты"];
const temptabscontent: {
  status: number;
  hash: string;
  dateStart: string;
  dateEnd: string;
}[] = [
  {
    status: 1,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: 0,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: 0,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: 1,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: 1,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
];

const Profile = () => {
  const { logout } = useSignInOut();
  const { authToken } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState<User | undefined>(undefined);
  const [scansData, setScansData] = useState<ScanType[] | undefined>(undefined);
  const [reportsData, setReportsData] = useState<Report[] | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        await axios
          .get(`${GET_USERS_URL}/${authToken}`)
          .then((res) => {
            if (res) {
              setProfileData(res.data[0]);
            }
          })
          .catch((err) => console.log(err));
        await axios
          .get(`${GET_SCANS_URL}/${authToken}`)
          .then((res) => {
            if (res) {
              setScansData(res.data);
            }
          })
          .catch((err) => console.log(err));
        await axios
          .get(`${GET_REPORTS_URL}`)
          .then((res) => {
            if (res) {
              setReportsData(res.data);
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  console.log(scansData);

  const onPressLogout = () => {
    logout();
  };

  const onChangeTab = (id: number) => {
    setActiveTab(id);
  };

  if (loading) return <Loader />;

  if (error) navigate("/notfound");

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-user-container">
          {profileData && (
            <div className="profile-user">
              <div className="photo">
                <ProfileIcon />
              </div>
              <Headline>{profileData.email}</Headline>
              <Paragraph>{profileData.role}</Paragraph>
            </div>
          )}
        </div>
        <div className="profile-tab-container">
          <ul className="profile-tab">
            {temptabs.map((val, idx) => (
              <li
                className={activeTab === idx ? "active" : ""}
                onClick={() => onChangeTab(idx)}
                key={idx}
              >
                <Paragraph>{val}</Paragraph>
              </li>
            ))}
          </ul>
          {activeTab === 0 ? (
            <Table
              head={["начало", "конец", "тип", "статус"]}
              body={
                scansData
                  ? scansData.map((scan) => {
                      return {
                        start: scan.started,
                        ended: scan.ended,
                        type: scan.type,
                        status: scan.status,
                      };
                    })
                  : []
              }
            />
          ) : (
            <Table
              head={["идентификатор", "создано", "источник", "формат"]}
              body={
                reportsData
                  ? reportsData.map((rep) => {
                      return {
                        id: rep.reportId,
                        created: rep.created,
                        source: rep.source,
                        format: rep.format,
                      };
                    })
                  : []
              }
            />
          )}
        </div>
        <ButtonWrapper>
          <Button active onPress={onPressLogout}>
            Выйти
          </Button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

export default Profile;
