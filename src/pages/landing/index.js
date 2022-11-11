import React from "react";
import CallToAction from "../../components/CallToAction";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Legals from "../../components/Legals";
import "./landing.css";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <div className="landingContainer">
      <nav className="nav">
        <Navbar />
      </nav>
      <div className="hero">
        <Hero />
      </div>
      <div className="callCallToAction-One">
        <CallToAction orientatición={"imgIZQ"} />
      </div>
      <div className="callCallToAction-Two">
        <CallToAction orientatición={"imgDER"} />
      </div>
      <div className="callCallToAction-Three">
        <CallToAction orientatición={"imgIZQ"} />
      </div>
      <div className="legals">
        <Legals />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;
