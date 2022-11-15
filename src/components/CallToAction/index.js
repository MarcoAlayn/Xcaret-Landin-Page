/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "../Carousel";
import "./callToAction.css";
import Button from "../Button";
import { useSelector } from "react-redux";

function CallToAction({ orientatición }) {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const logo = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].logoPromo
      : allData[0].en.promotions[0].logoPromo;
  };

  const title = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].title
      : allData[0].en.promotions[0].title;
  };

  const firstPragraph = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].Subtitle
      : allData[0].en.promotions[0].Subtitle;
  };

  const secondPragraph = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].paragraphs
      : allData[0].en.promotions[0].paragraphs;
  };

  const buttonHref = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].button.href
      : allData[0].en.promotions[0].button.href;
  };
  const buttonText = () => {
    return currentLang[0] === "es"
      ? allData[0].es.promotions[0].button.text
      : allData[0].en.promotions[0].button.text;
  };

  return (
    <div className={orientatición}>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="info">
        <img className="logo" src={logo()} alt="logo promotion" />
        <h2>{title()}</h2>
        <p>{firstPragraph()}</p>
        <p className="secondPragraph">{secondPragraph()}</p>
        <div className="button">
          <Button href={buttonHref()} text={buttonText()} />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
