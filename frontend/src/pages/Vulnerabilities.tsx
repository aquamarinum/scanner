import React from "react";
import { useFetch } from "../hooks/useFetch";
import Paragraph from "../components/Paragraph";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

type VulnerabilityType = {
  vulnerabilityId: string;
  cveName: string;
  description: string;
  dangerLevel: number;
  publishedAt: string;
  modified: string;
};

const Vulnerabilities = () => {
  const { data, loading, error } = useFetch<VulnerabilityType[]>(
    "http://localhost:3001/vulnerabilities"
  );
  const navigate = useNavigate();

  if (loading) return <Loader />;

  if (!data || error) navigate("/notfound");

  return (
    <ul className="profile-actions">
      {data &&
        data.map((value) => (
          <li>
            <div className="status"></div>
            <Paragraph>{value.cveName}</Paragraph>
            <div className="date">
              <Paragraph>{value.publishedAt}</Paragraph>
              <Paragraph>{value.modified}</Paragraph>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Vulnerabilities;
