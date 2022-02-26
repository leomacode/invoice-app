import React, { useState, useEffect } from "react";
import "./sideBar.css";
import { logo, moon, sun, avatar } from "../../assets";
import { changeTheme, setUpTheme } from "../../utils/themes";

function SideBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // initial theme according to localStorage
  useEffect(() => {
    setUpTheme(theme);
  });

  // handle click
  const handleClick = () => {
    // change theme in localStorage and body class
    changeTheme();

    //change theme in local state for icon
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo-pad">
        <img className="sidebar-logo" src={logo} alt="logo" />
      </div>

      <div className="sidebar-dark-mode-btn" onClick={handleClick}>
        {theme === "theme-dark" ? (
          <img src={moon} alt="moon" />
        ) : (
          <img src={sun} alt="sun" />
        )}
      </div>

      <div className="sidebar-avatar">
        <img className="sidebar-avater-img" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default SideBar;
