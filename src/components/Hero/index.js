import React from "react";
import "./hero.css";
import { useSelector } from "react-redux";

function Hero() {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const title = () => {
    return currentLang[0] === "es"
      ? allData[0].es.header.h1
      : allData[0].en.header.h1;
  };

  const discount = () => {
    return currentLang[0] === "es"
      ? allData[0].es.header.discount
      : allData[0].en.header.discount;
  };

  const paragraphs = () => {
    return currentLang[0] === "es"
      ? allData[0].es.header.paragraphs
      : allData[0].en.header.paragraphs;
  };

  return (
    <div className="heroContainer">
      <h1 className="heroTitle">{title()}</h1>

      <h1 className="heroDiscount">{discount()}</h1>
      <p className="heroParagraphs">{paragraphs()}</p>
    </div>
  );
}

export default Hero;
