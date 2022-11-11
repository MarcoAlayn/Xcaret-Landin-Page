import React from "react";
import Carousel from "../Carousel";
import "./callToAction.css";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
function CallToAction({ orientatición }) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={orientatición}>
      <div className="carousel">
        <Carousel />
      </div>

      <div className="info">
        <img src="" alt="" className="logo" />
        LOGOTIPO
        <h2 className="seccionTitle">Section Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem erat volutpat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.
        </p>
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
