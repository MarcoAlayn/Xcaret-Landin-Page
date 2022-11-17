import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData, setSpanish } from "../../redux/actions";
import Button from "../../components/Button";
import Brand from "../../components/Brand";
import "./thanks.css";

function Thanks() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  useEffect(() => {
    if (!allData.length) dispatch(apiData());
    if (!currentLang.length) dispatch(setSpanish());
  }, [dispatch]);

  const logo = () => {
    return currentLang[0] === "es"
      ? allData[0]?.es.navbar.logo
      : allData[0]?.en.navbar.logo;
  };

  const pageTranslate = () => {
    return currentLang[0] === "es"
      ? [
          "¡Gracias por tu compra!",
          "Ahora solo te queda disfrutar de tus vacaciones",
          "en nuestras exclusivas instalaciones y nuestro servicio 5 estrellas",
          "Volver",
        ]
      : [
          "Thanks for your purchase!",
          "Now all you have to do is enjoy your vacation",
          "in our exclusive facilities and our 5-star service",
          "Back",
        ];
  };

  return (
    <div className="pageContainer">
      <div className="componenteContainer">
        <div className="logoContainer">
          <Brand logo={logo()} />
        </div>
        <div className="textContainer">
          <h3>{pageTranslate()[0]}</h3>
          <p>
            {pageTranslate()[1]} <br />
            {pageTranslate()[2]}
          </p>
        </div>
        <div className="buttonContainer">
          <Button text={pageTranslate()[3]} href={"/"} />
        </div>
      </div>
    </div>
  );
}

export default Thanks;
