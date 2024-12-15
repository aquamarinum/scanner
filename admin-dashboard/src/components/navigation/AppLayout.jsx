import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
