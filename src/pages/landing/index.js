import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpanish, apiData, setCurrencyMEX } from "../../redux/actions";
import CallToAction from "../../components/CallToAction";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Legals from "../../components/Legals";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import "./landing.css";

function Landing() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);
  const currency = useSelector((state) => state.currency);

  const [viewmodal, setViewModal] = useState(false);

  useEffect(() => {
    dispatch(apiData());
    if (!currentLang.length) dispatch(setSpanish());
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
            <CallToAction
              orientatición={"imgIZQ"}
              state={viewmodal}
              setState={setViewModal}
            />
          </div>
          <div className="callCallToAction-Two">
            <CallToAction
              orientatición={"imgDER"}
              state={viewmodal}
              setState={setViewModal}
            />
          </div>
          <div className="callCallToAction-Three">
            <CallToAction
              orientatición={"imgIZQ"}
              state={viewmodal}
              setState={setViewModal}
            />
          </div>
          <div className="legals">
            <Legals />
          </div>
          <footer className="footer">
            <Footer />
          </footer>
          <div className="modal">
            <Modal state={viewmodal} setState={setViewModal}>
              <h3>soy un titulo</h3>
              <p>soy un parrafo de texto generico</p>
              {/* este boton es para mandarlo a la thank you page */}
              <button>soy un boton</button>
            </Modal>
          </div>
        </>
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
}

export default Landing;
