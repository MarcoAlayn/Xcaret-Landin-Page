import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEnglish,
  setSpanish,
  setCurrencyUSD,
  setCurrencyMEX,
  setCurrencyEUR,
} from "../../redux/actions";
import "./options.css";

const Options = () => {
  const langs = useSelector((state) => state.lang);

  const dispatch = useDispatch();

  const handleSetSpanish = (e) => {
    e.preventDefault();
    return dispatch(setSpanish());
  };

  const handleSetEnglish = (e) => {
    e.preventDefault();
    return dispatch(setEnglish());
  };

  const handleSetUsd = (e) => {
    e.preventDefault();
    return dispatch(setCurrencyUSD());
  };

  const handleSetMex = (e) => {
    e.preventDefault();
    return dispatch(setCurrencyMEX());
  };

  const handleSetEur = (e) => {
    e.preventDefault();
    return dispatch(setCurrencyEUR());
  };

  const idiomCurrent = () => {
    return langs[0] === "es" ? (
      <button onClick={handleSetEnglish}>en</button>
    ) : (
      <button onClick={handleSetSpanish}>es</button>
    );
  };

  const currencyCurrent = () => {
    return (
      <>
        <button onClick={handleSetUsd}>USD</button>
        <button onClick={handleSetMex}>MEX</button>
        <button onClick={handleSetEur}>EUR</button>
      </>
    );
  };

  return (
    <div className="options">
      <div className="idiom">{idiomCurrent()}</div>
      <div className="currency">{currencyCurrent()}</div>
    </div>
  );
};

export default Options;
