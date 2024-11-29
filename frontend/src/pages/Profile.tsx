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
import { Link } from "react-router-dom";

const temptabs = ["Scans", "Payments", "Other"];
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

const Profile = () => {
  const { logout } = useSignInOut();
  const { authToken } = useAuth();
  const { data, loading, error } = useFetch("GET BY TOKEN-ID");
  const [activeTab, setActiveTab] = useState(0);

  const onPressLogout = () => {
    logout();
  };

  const onChangeTab = (id: number) => {
    setActiveTab(id);
  };

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-user-container">
          <div className="profile-user">
            <div className="photo">
              <ProfileIcon />
            </div>
            <Headline>Administrator</Headline>
            <Paragraph>admin@admin.com</Paragraph>
          </div>
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
