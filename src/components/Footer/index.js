import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";
import { ReactComponent as FacebookIcon } from "../../assets/iconmonstr-facebook-1.svg";
import { ReactComponent as InstagramIcon } from "../../assets/iconmonstr-instagram-11.svg";
import { ReactComponent as TwitterIcon } from "../../assets/iconmonstr-twitter-1.svg";

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

  const footer = lang === "es" ? allData?.es?.footer : allData?.en?.footer;

  return (
    <div className="footerContainer">
      <div className="contactMail">
        <p>{contactCenter?.title}</p>
        <span>{contactCenter?.email} </span>
      </div>

      <div className="numbers">
        {numbers ? (
          <>
            <p>{numbers[0]?.name}</p>
            <p>{numbers[0]?.number}</p>
            <p>{numbers[1]?.name}</p>
            <p>{numbers[1]?.number}</p>
            <p>{numbers[2]?.name}</p>
            <p>{numbers[2]?.number}</p>
            <p>{numbers[3]?.name}</p>
            <p>{numbers[3]?.number}</p>
            <p>{numbers[4]?.name}</p>
            <p>{numbers[4]?.number}</p>
            <p>{numbers[5]?.name}</p>
            <p>{numbers[5]?.number}</p>
            <p>{numbers[6]?.name}</p>
            <p>{numbers[6]?.number}</p>
            <p>{numbers[7]?.name}</p>
            <p>{numbers[7]?.number}</p>
          </>
        ) : (
          <h3>Loading</h3>
        )}
      </div>

      <div className="social">
        <a href={social?.facebookUrl}>
          <FacebookIcon />
        </a>
        <a href={social?.instagramUrl}>
          <InstagramIcon />
        </a>
        <a href={social?.twitterUrl}>
          <TwitterIcon />
        </a>
      </div>
      <div className="termsUse">
        <p className="firstChild">{footer?.copy}</p>
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
