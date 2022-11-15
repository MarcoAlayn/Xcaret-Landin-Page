import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpanish, apiData, setCurrencyMEX } from "../../redux/actions";
import CallToAction from "../../components/CallToAction";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Legals from "../../components/Legals";
import Footer from "../../components/Footer";
import "./landing.css";

function Landing() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(apiData());
    if (!lang.length) dispatch(setSpanish());
    if (!currency.length) dispatch(setCurrencyMEX());
  }, [dispatch]);

  return (
    <div className="landingContainer">
      {allData.length ? (
        <>
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
        </>
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
}

export default Landing;
