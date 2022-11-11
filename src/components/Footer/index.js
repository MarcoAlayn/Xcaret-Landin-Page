import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <p>ATENCIÓN A CLIENTES</p>
      <span>reservaciones@hotelxcaret.com</span>
      <div className="numbersNsocial">
        <div className="contacts">
          <p className="one">MÉXICO</p>
          <span>018000000000</span>
          <p className="two">MÉXICO</p>
          <span>018000000000</span>
          <p className="three">MÉXICO</p>
          <span>018000000000</span>
          <p className="four">MÉXICO</p>
          <span>018000000000</span>
          <p className="five">MÉXICO</p>
          <span>018000000000</span>
          <p className="six">MÉXICO</p>
          <span>018000000000</span>
          <p className="seven">MÉXICO</p>
          <span>018000000000</span>
          <p className="eight">MÉXICO</p>
          <span>018000000000</span>
          <p>MÉXICO</p>
        </div>
        <div className="social">
          <p>imagen</p>
          <p>imagen</p>
          <p>imagen</p>
        </div>
      </div>
      <div className="termsUse">
        <p>©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V.</p>
        <p>Términos de Uso</p>
        <p>Aviso de Privacidad </p>
      </div>
    </div>
  );
}

export default Footer;
