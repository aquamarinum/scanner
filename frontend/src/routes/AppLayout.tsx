import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <footer>
        <p>haha</p>
      </footer>
    </>
  );
};

export default AppLayout;
