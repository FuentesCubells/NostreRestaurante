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
              <p>603 112 049</p>
            </div>
            <div className="contact">
              <img src={map} alt="map icon" />
              <p>Calle Doctor Ferran 6, 46021, Valencia</p> 
            </div>
            <div className="contact">
              <img src={email} alt="email icon" />
              <p><a href="mailto:nostre@cocinaquesomos.com">nostre@cocinaquesomos.com</a></p>
            </div>
          </div>
          <div className="hours-information">
            <h3>Horario:</h3>
            <p>Miércoles a Sábado: 13:30 - 16:00 / 20:30 - 23:00</p> 
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
        <h4>Web designed and developed by <a href="mailto:lamidaestudio@gmail.com">LaMida studio</a></h4>
      </div>
    </div>
  );
};

export default Footer;
