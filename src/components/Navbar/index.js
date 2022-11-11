import React from "react";
import "./navbar.css";
import Brand from "../../components/Brand";
import Contact from "../../components/Contact";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="brand">
        <Brand />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </nav>
  );
}

export default Navbar;
