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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const temptabs = ["Сканирования", "Логи", "Другое"];
const temptabscontent: {
  status: boolean;
  hash: string;
  dateStart: string;
  dateEnd: string;
}[] = [
  {
    status: true,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: false,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: false,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: true,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
  {
    status: true,
    hash: "62551b8f95f8ed1225824c07723ddede",
    dateStart: "29.11.2024-13:36:44",
    dateEnd: "29.11.2024-13:36:44",
  },
];

type UserType = {
  userId: string;
  username: string;
  email: string;
  passwordHash: string;
  activeStatus: string;
  registrated: string;
};

const Profile = () => {
  const { logout } = useSignInOut();
  const { authToken } = useAuth();
  console.log(authToken);
  const { data, loading, error } = useFetch<UserType>(
    `http://localhost:3001/users/${authToken}`
  );
  console.log(data);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const onPressLogout = () => {
    logout();
  };

  const onChangeTab = (id: number) => {
    setActiveTab(id);
  };

  if (loading) return <Loader />;

  if (!data || error) navigate("/notfound");

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-user-container">
          {data && (
            <div className="profile-user">
              <div className="photo">
                <ProfileIcon />
              </div>
              <Headline>{data.username && "Администратор"}</Headline>
              <Paragraph>{data.email}</Paragraph>
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
          <ul className="profile-actions">
            {temptabscontent.map((value, idx) => (
              <li>
                <Link to={"/reports/" + value.hash}>
                  <div
                    className="status"
                    style={
                      value.status
                        ? { background: "green" }
                        : { background: "red" }
                    }
                  ></div>
                  <Paragraph>{value.hash}</Paragraph>
                  <div className="date">
                    <Paragraph>{value.dateStart}</Paragraph>
                    <Paragraph>{value.dateEnd}</Paragraph>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ButtonWrapper>
          <Button active onPress={onPressLogout}>
            SIGN OUT
          </Button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

export default Profile;
