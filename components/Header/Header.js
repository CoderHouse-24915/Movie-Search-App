import React from "react";
import "./Header.css";
import img from "./movies_banner.jpg";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <img src={img} alt="logo-banner" />
    </div>
  );
};

Header.defaultProps = {
  title: "Movie Search App",
};

export default Header;
