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
      ? [1000, 160, 1160]
      : currentCurrency[0] === "mex"
      ? [1000, 160, 1160]
      : currentCurrency[0] === "eur"
      ? [1000, 160, 1160]
      : null;
  };

  const currencySymbol = () => {
    return currentCurrency[0] === "usd"
      ? ["$", "USD"]
      : currentCurrency[0] === "mex"
      ? ["$", "MEX"]
      : currentCurrency[0] === "eur"
      ? ["€", "EUR"]
      : null;
  };

  console.log(nums());

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
              <div className="groupOne">
                <h3>Servicio</h3>
                <p>Hotel Xcaret Arte</p>
                <p>7 noches</p>
              </div>
              <div className="groupTwo">
                <h3>Pedido</h3>
                <p>
                  Subtotal{" "}
                  <span>
                    {currencySymbol()[0]}
                    {nums()[0]}
                    {currencySymbol()[1]}
                  </span>{" "}
                </p>
                <p>
                  iva{" "}
                  <span>
                    {currencySymbol()[0]}
                    {nums()[1]}
                    {currencySymbol()[1]}
                  </span>
                </p>
                <p>
                  Total{" "}
                  <span>
                    {currencySymbol()[0]}
                    {nums()[2]}
                    {currencySymbol()[1]}
                  </span>
                </p>
              </div>
              <div className="btn">
                <Button text={"Continuar"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
