/* eslint-disable react/prop-types */
import React from "react";
import "./button.css";

function Button({ href, text }) {
  return (
    <button className="buttonContainer">
      <a href={href}>{text}</a>
    </button>
  );
}

export default Button;
