import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <header>
        <a href=""></a>
      </header>

      <Outlet />

      <footer>
        <p>haha</p>
      </footer>
    </>
  );
};

export default AppLayout;
