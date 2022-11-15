import React from "react";
import { useSelector } from "react-redux";

const Options = () => {
  const currency = useSelector((state) => state.currency);
  const langs = useSelector((state) => state.lang);

  const idiomCurrent = () => {
    return langs[0] === "es" ? <button>en</button> : <button>es</button>;
  };

  const currencyCurrent = () => {
    return currency[0] === "usd" ? (
      <>
        <button>MEX</button>
        <button>EUR</button>
      </>
    ) : currency[0] === "mex" ? (
      <>
        <button>USD</button>
        <button>EUR</button>
      </>
    ) : currency[0] === "eur" ? (
      <>
        <button>USD</button>
        <button>MEX</button>
      </>
    ) : (
      <span>N/A</span>
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
