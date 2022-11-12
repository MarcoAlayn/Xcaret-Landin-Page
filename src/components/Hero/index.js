import React from "react";
import "./hero.css";
import { useSelector } from "react-redux";

function Hero() {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const espTitle = allData?.es?.header.h1;
  const engTitle = allData?.en?.header.h1;

  const espDiscount = allData?.en?.header?.discount;
  const engDiscount = allData?.es?.header?.discount;

  const espParagraphs = allData?.es?.header?.paragraphs;
  const engParagraphs = allData?.en?.header?.paragraphs;

  return (
    <div className="heroContainer">
      <h1 className="heroTitle">{lang === "es" ? espTitle : engTitle}</h1>

      <h1 className="heroDiscount">
        {lang === "es" ? espDiscount : engDiscount}
      </h1>
      <p className="heroParagraphs">
        {lang === "es" ? espParagraphs : engParagraphs}
      </p>
    </div>
  );
}

export default Hero;
