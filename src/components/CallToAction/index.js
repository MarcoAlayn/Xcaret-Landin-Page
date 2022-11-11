/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "../Carousel";
import "./callToAction.css";
import Button from "../Button";
import { useSelector } from "react-redux";

function CallToAction({ orientatición }) {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const espLogo = allData?.es?.promotions[0]?.logoPromo;
  const engLogo = allData?.en?.promotions[0]?.logoPromo;

  const espTitle = allData?.es?.promotions[0]?.title;
  const engTitle = allData?.en?.promotions[0]?.title;

  const espSubtitle = allData?.es?.promotions[0]?.Subtitle;
  const engSubtitle = allData?.en?.promotions[0]?.Subtitle;

  const espParagraphs = allData?.es?.promotions[0]?.paragraphs[0];
  const engParagraphs = allData?.en?.promotions[0]?.paragraphs[0];

  const espButton = allData?.es?.promotions[0]?.button?.href;
  const engButton = allData?.en?.promotions[0]?.button?.href;

  const espText = allData?.es?.promotions[0]?.button?.text;
  const engText = allData?.en?.promotions[0]?.button?.text;

  return (
    <div className={orientatición}>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="info">
        <img
          src={lang === "es" ? espLogo : engLogo}
          alt="logo promotion"
          className="logo"
        />
        <h2>{lang === "es" ? espTitle : engTitle}</h2>
        <p>{lang === "es" ? espSubtitle : engSubtitle}</p>
        <span>{lang === "es" ? espParagraphs : engParagraphs}</span>
        <div className="button">
          <Button
            href={lang === "es" ? espButton : engButton}
            text={lang === "es" ? espText : engText}
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
