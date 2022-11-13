/* eslint-disable react/prop-types */
import React from "react";
import "./button.css";

function Button({ href, text }) {
  return (
    <div className="buttonContainer">
      <a href={href}>{text}</a>
    </div>
  );
}

export default Button;
