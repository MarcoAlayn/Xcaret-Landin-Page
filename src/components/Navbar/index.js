import React from "react";
import "./navbar.css";
import Brand from "../../components/Brand";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const espLogo = allData?.es?.navbar?.logo;
  const engLogo = allData?.en?.navbar?.logo;

  const espContact = allData?.es?.navbar?.menu?.contact;
  const engContact = allData?.en?.navbar?.menu?.contact;

  const espLang = allData?.es?.navbar?.menu?.lang;
  const engLang = allData?.en?.navbar?.menu?.lang;

  const espCurrency = allData?.es?.navbar?.menu?.currency;
  const engCurrency = allData?.en?.navbar?.menu?.currency;

  return (
    <nav className="navbarContainer">
      <div className="brand">
        <Brand logo={lang === "es" ? espLogo : engLogo} />
      </div>
      <div className="contact">
        <Contact
          contact={lang === "es" ? espContact : engContact}
          lang={lang === "es" ? espLang : engLang}
          currency={lang === "es" ? espCurrency : engCurrency}
        />
      </div>
    </nav>
  );
};

export default Navbar;
