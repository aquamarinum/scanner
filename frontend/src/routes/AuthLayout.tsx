import React from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "../components/Icons/HomeIcon";

const AuthLayout = () => {
  return (
    <>
      <Link to="/" className="goback">
        <HomeIcon />
      </Link>
      <Outlet />
    </>
  );
};

export default AuthLayout;
