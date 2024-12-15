import React from "react";

import user_icon from "../assets/img/user.png";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav>
        <i className="bx bx-menu"></i>
        <form action="#">
          {/* <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button className="search-btn" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </div> */}
        </form>
        <input
          type="checkbox"
          id="theme-toggle"
          hidden
          checked={theme === "dark"}
        />
        <label
          htmlFor="theme-toggle"
          className="theme-toggle"
          onClick={toggleTheme}
        ></label>
        {/* <a href="#" className="notif">
          <i className="bx bx-bell"></i>
          <span className="count">12</span>
        </a> */}
        <p href="#" className="profile">
          <img src={user_icon} />
        </p>
      </nav>
    </header>
  );
};

export default Header;
