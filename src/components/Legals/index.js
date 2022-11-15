import React from "react";
import "./legals.css";
import { useSelector } from "react-redux";

function Legals() {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const legals = () => {
    return currentLang[0] === "es"
      ? allData[0].es.legals
      : allData[0].en.legals;
  };

  const words = legals();

  const legalSection = words?.split("<br/>", 3);

  return (
    <div className="legalsContainer">
      <p>{legalSection?.[0]}</p>
      <br />
      <p>{legalSection?.[1]}</p>
      <br />
      <p>{legalSection?.[2]}</p>
    </div>
  );
}

export default Legals;
