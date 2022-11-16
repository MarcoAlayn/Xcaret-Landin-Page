/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

function Button({ href, text }) {
  return (
    <div className="buttonContainer">
      <Link to={href}>{text}</Link>
    </div>
  );
}

export default Button;
