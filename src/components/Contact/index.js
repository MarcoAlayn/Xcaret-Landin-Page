/* eslint-disable react/prop-types */
import React from "react";
import "./contact.css";

function Contact({ contact, lang, currency }) {
  return (
    <div>
      <a href="#">{contact}</a>
      <a href="#">{lang?.title}</a>
      <form>
        {currency?.map((e) => {
          return <option key={e?.index}>{e}</option>;
        })}
      </form>
    </div>
  );
}

export default Contact;
