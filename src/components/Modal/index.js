/* eslint-disable react/prop-types */
import React from "react";
import "./modal.css";
import { useSelector } from "react-redux";
import Button from "../Button";

function Modal({ state, setState }) {
  const currentLang = useSelector((state) => state.lang);
  const currentCurrency = useSelector((state) => state.currency);

  const title = () => {
    return currentLang[0] === "es" ? (
      <h3>Resumen de Compra</h3>
    ) : (
      <h3>Purchase summary</h3>
    );
  };

  const nums = () => {
    return currentCurrency[0] === "usd"
      ? ["$ 1000.00USD", "$ 160.00USD", "$ 1160.00USD"]
      : currentCurrency[0] === "mex"
      ? ["$ 1000.00MEX", "$ 160.00MEX", "$ 1160.00MEX"]
      : currentCurrency[0] === "eur"
      ? ["€ 1000.00EUR", "€ 160.00EUR", "€ 1160.00EUR"]
      : null;
  };

  const reservationCode = () => {
    return Math.floor(Math.random() * 10000000000);
  };

  const modalTranslate = () => {
    return currentLang[0] === "es"
      ? [
          "Código de reservación",
          "Servicio",
          "7 Noches",
          "Sumario de Pedido",
          "IVA",
          "Continuar",
        ]
      : [
          "Reservation code",
          "Service",
          "7 Nights",
          "Order Summary",
          "TAX",
          "Continue",
        ];
  };

  return (
    <>
      {state && (
        <div className="overlay">
          <div className="contenedorModal">
            <div className="encabezadoModal">
              {title()}
              <div className="botonCerrar" onClick={() => setState(!state)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
            <div className="contenido">
              <span>
                {modalTranslate()[0]}: {reservationCode()}
              </span>
              <div className="groupOne">
                <h3>{modalTranslate()[1]}</h3>
                <p>Hotel Xcaret Arte</p>
                <p>{modalTranslate()[2]}</p>
                <hr />
              </div>
              <div className="groupTwo">
                <h3>{modalTranslate()[3]}</h3>
                <p>
                  Subtotal <span className="span1">{nums()[0]}</span>{" "}
                </p>
                <p>
                  {modalTranslate()[4]} <span>{nums()[1]}</span>
                </p>
                <hr />
                <p>
                  Total <span>{nums()[2]}</span>
                </p>
                <hr />
              </div>
              <div className="btn">
                <Button text={modalTranslate()[5]} href={"/thanks"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
