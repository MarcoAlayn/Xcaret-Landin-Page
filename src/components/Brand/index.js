import React from "react";
import "./brand.css";

// eslint-disable-next-line react/prop-types
function Brand({ logo }) {
  return (
    <div className="brandContainer">
      <img src={logo} alt="logo xcaret" />
    </div>
  );
}

export default Brand;
