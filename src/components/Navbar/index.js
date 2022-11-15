import React from "react";
import "./navbar.css";
import Brand from "../../components/Brand";
import { useSelector } from "react-redux";
import Options from "../Options";

const Navbar = () => {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const logo = () => {
    return currentLang[0] === "es"
      ? allData[0].es.navbar.logo
      : allData[0].en.navbar.logo;
  };

  return (
    <nav className="navbarContainer">
      <div className="brand">
        <Brand logo={logo()} />
      </div>
      <div className="OptionsContainer">
        <Options />
      </div>
    </nav>
  );
};

export default Navbar;
