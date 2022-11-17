import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";
import { ReactComponent as FacebookIcon } from "../../assets/iconmonstr-facebook-1.svg";
import { ReactComponent as InstagramIcon } from "../../assets/iconmonstr-instagram-11.svg";
import { ReactComponent as TwitterIcon } from "../../assets/iconmonstr-twitter-1.svg";

function Footer() {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const contactCenter = () => {
    return currentLang[0] === "es"
      ? allData[0].es.prefooter.contactCenter
      : allData[0].en.prefooter.contactCenter;
  };

  const numbers = () => {
    return currentLang[0] === "es"
      ? allData[0].es.prefooter.numbers
      : allData[0].en.prefooter.numbers;
  };

  const social = () => {
    return currentLang[0] === "es"
      ? allData[0].es.prefooter.social
      : allData[0].en.prefooter.social;
  };

  const footer = () => {
    return currentLang[0] === "es"
      ? allData[0].es.footer
      : allData[0].en.footer;
  };

  return (
    <div className="footerContainer">
      <div className="social">
        <a href={social()?.facebookUrl}>
          <FacebookIcon />
        </a>
        <a href={social()?.instagramUrl}>
          <InstagramIcon />
        </a>
        <a href={social()?.twitterUrl}>
          <TwitterIcon />
        </a>
      </div>

      <div className="contactMail">
        <p>{contactCenter()?.title}</p>
        <span>{contactCenter()?.email} </span>
      </div>

      <div className="numbers">
        <p>{numbers()[0]?.name}</p>
        <p>{numbers()[0]?.number}</p>
        <p>{numbers()[1]?.name}</p>
        <p>{numbers()[1]?.number}</p>
        <p>{numbers()[2]?.name}</p>
        <p>{numbers()[2]?.number}</p>
        <p>{numbers()[3]?.name}</p>
        <p>{numbers()[3]?.number}</p>
        <p>{numbers()[4]?.name}</p>
        <p>{numbers()[4]?.number}</p>
        <p>{numbers()[5]?.name}</p>
        <p>{numbers()[5]?.number}</p>
        <p>{numbers()[6]?.name}</p>
        <p>{numbers()[6]?.number}</p>
        <p>{numbers()[7]?.name}</p>
        <p>{numbers()[7]?.number}</p>
      </div>

      <div className="termsUse">
        <p className="firstChild">{footer()?.copy}</p>
        <div>
          <p className="secondChild">
            <a href={footer()?.links[1].href}>{footer()?.links[1].tittle}</a>
          </p>
          <p className="thirdchild">
            <a href={footer()?.links[0].href}>{footer()?.links[0].tittle}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
