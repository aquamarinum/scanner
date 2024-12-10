import React from "react";
import { useFetch } from "../hooks/useFetch";
import Paragraph from "../components/Paragraph";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import Headline from "../components/Headline";
import { GET_VULNERABILITIES_URL } from "../constants/BER";

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
    GET_VULNERABILITIES_URL
  );
  const navigate = useNavigate();

  if (loading) return <Loader />;

  if (!data || error) navigate("/notfound");

  return (
    <div className="profile-actions">
      <Headline>CVE DATABASE</Headline>
      {data && (
        <Table
          head={[
            "id",
            "name",
            "description",
            "danger",
            "published",
            "modified",
          ]}
          body={data}
        />
      )}
    </div>
  );
};

export default Vulnerabilities;
