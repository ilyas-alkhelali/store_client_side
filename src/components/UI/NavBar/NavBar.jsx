import React from "react";
import "./NavBar.css";
const NavBar = ({ children }) => {
  return (
    <div className="navbar">
      <div className="navbar__container _container">{children}</div>{" "}
    </div>
  );
};

export default NavBar;
