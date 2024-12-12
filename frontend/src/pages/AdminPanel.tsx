import React, { useState } from "react";
import AdminLogin from "../components/AdminPanel/AdminLogin";
import { useAppDispatch, useAppSelector } from "../redux/store";
import SingleScreen from "../components/SingleScreen";
import Centralized from "../components/Centralized";
import Headline from "../components/Headline";
import Button from "../components/Button";
import { setToken } from "../redux/admin/slice";
import { adminTokenSelector } from "../redux/admin/selector";
import { useNavigate } from "react-router-dom";
import AdminReports from "../components/AdminPanel/AdminReports";

const AdminPanel = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(adminTokenSelector);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);

  if (!token) {
    return <AdminLogin />;
  }

  return <AdminReports />;
};

export default AdminPanel;
