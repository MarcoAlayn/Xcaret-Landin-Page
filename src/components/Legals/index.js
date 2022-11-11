import React from "react";
import "./legals.css";
import { useSelector } from "react-redux";

function Legals() {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const legals = lang === "es" ? allData?.es?.legals : allData?.en?.legals;

  const words = legals;

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
