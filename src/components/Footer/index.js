import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const contactCenter =
    lang === "es"
      ? allData?.es?.prefooter?.contactCenter
      : allData?.en?.prefooter?.contactCenter;

  const numbers =
    lang === "es"
      ? allData?.es?.prefooter?.numbers
      : allData?.en?.prefooter?.numbers;

  const social =
    lang === "es"
      ? allData?.es?.prefooter?.social
      : allData?.en?.prefooter?.social;

  const arraySocial = social ? Object.entries(social) : null;

  const footer = lang === "es" ? allData?.es?.footer : allData?.en?.footer;

  return (
    <div className="footerContainer">
      <p>{contactCenter?.title}</p>
      <span>{contactCenter?.email} </span>

      <div className="numbersNsocial">
        <div className="contacts">
          {numbers?.map((e) => {
            return (
              <p key={e.name}>
                {e.name}
                <span>{e.number}</span>
              </p>
            );
          })}
        </div>

        <div className="social">
          <a href={arraySocial?.[0][1]}>{arraySocial?.[0][0]}</a>
          <a href={arraySocial?.[1][1]}>{arraySocial?.[1][0]}</a>
          <a href={arraySocial?.[2][1]}>{arraySocial?.[2][0]}</a>
        </div>
      </div>

      <div className="termsUse">
        <p>{footer?.copy}</p>
        <p>
          <a href={footer?.links[0].href}>{footer?.links[0].tittle}</a>
        </p>
        <p>
          <a href={footer?.links[1].href}>{footer?.links[1].tittle}</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
