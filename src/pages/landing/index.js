import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import "./landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <nav className="nav">
        <Navbar />
      </nav>
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default Landing;
