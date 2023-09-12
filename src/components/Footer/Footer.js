import React from "react";
import phone from "../Place/images/Phone.png";
import map from "../Place/images/Map.png";
import email from "../Place/images/Email.png";

const Footer = () => {
  return (
    <div className="footer-fulContainer">
      <div className="footer-container">
        <div className="contact-footer">
          <div className="contact-information">
            <div className="contact">
              <img src={phone} alt="phone icon" />
              <p>665430073</p>
            </div>
            <div className="contact">
              <img src={map} alt="phone icon" />
              <p>Calle Mallorquins, 1, 46001, Valencia</p>
            </div>
            <div className="contact">
              <img src={email} alt="phone icon" />
              <p>Email: contacto@nostrecocina.com</p>
            </div>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <h1>NOSTRE</h1>
            <h2>Cocina que somos</h2>
          </a>
        </div>
      </div>
      <div className="LaMida">
        <h4>Web designed and developed by LaMida studio</h4>
      </div>
    </div>
  );
};

export default Footer;
