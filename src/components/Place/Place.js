import React from "react";
import phone from "./images/Phone.png";
import map from "./images/Map.png";
import email from "./images/Email.png";

import place from "./images/Contacto.jpg";
import { useNavigate } from "react-router-dom";

const Place = ({ lenguage }) => {
  const navigate = useNavigate();

  const goTo = (direction) => {
    navigate(direction)
  }

  if (lenguage === "EN") {
    return (
      <div className="contact-fullContainer">
        <div className="contact-container">
          <div className="contact-title" id="contact">
            <h2>Where Will You Find Us?</h2>
            <img
              src={place}
              alt="an image of the restaurant in front of the Central Market"
            />
          </div>
          <div className="contact-content">
            <div className="contact-map">
              <iframe
                title="Nostre Restaurant location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.92981590109133!2d-0.37868754098938384!3d39.47282766323109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f783b6cab69%3A0x2c697fd2f21884b6!2sNostre%20Cocina!5e0!3m2!1ses!2ses!4v1694456487788!5m2!1ses!2ses"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-text">
              <div className="contact-information">
                <div className="contact">
                  <img src={phone} alt="phone icon" />
                  <p>+34 603 11 20 49</p>
                </div>
                <div className="contact">
                  <img src={map} alt="map icon" />
                  <p>Calle Doctor Ferran 6, 46021, Valencia</p> {/* Nueva dirección */}
                </div>
                <div className="contact">
                  <img src={email} alt="email icon" />
                  <p>
                    <a href="mailto:nostre@cocinaquesomos.com">
                      nostre@cocinaquesomos.com
                    </a>
                  </p>
                </div>
                <div className="hours-information">
                  <h3>Hours:</h3>
                  <p>Wednesday to Saturday: 13:30 - 16:00 / 20:30 - 23:00</p>
                </div>

                <div className="policy-links">
                  <p>
                    <a onClick={() => goTo('/privacy-policy')}>Privacy Policy</a>
                  </p>
                </div>
                <div className="contact">
                  <p>
                    You can also get to know us a little better on our Instagram account
                    <a href="https://www.instagram.com/nostrecocina" target="_blank" rel="noopener noreferrer">@nostrecocina</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-fullContainer">
      <div className="contact-container">
        <div className="contact-title" id="contact">
          <h2>¿Dónde Nos Encontrarás?</h2>
          <img
            src={place}
            alt="una imagen del restaurante enfrente del mercado central"
          />
        </div>
        <div className="contact-content">
          <div className="contact-map">
            <iframe
              title="Nostre Restaurante location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.92981590109133!2d-0.37868754098938384!3d39.47282766323109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f783b6cab69%3A0x2c697fd2f21884b6!2sNostre%20Cocina!5e0!3m2!1ses!2ses!4v1694456487788!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contat-text">
            <div className="contact-information">
              <div className="contact">
                <img src={phone} alt="phone icon" />
                <p>+34 603 11 20 49</p>
              </div>
              <div className="contact">
                <img src={map} alt="map icon" />
                <p>Calle Doctor Ferran 6, 46021, Valencia</p> {/* Nueva dirección */}
              </div>
              <div className="contact">
                <img src={email} alt="email icon" />
                <p>
                  <a href="mailto:nostre@cocinaquesomos.com">
                    nostre@cocinaquesomos.com
                  </a>
                </p>
              </div>
              <div className="hours-information">
                <h3>Horario:</h3>
                <p>Miércoles a Sábado: 13:30 - 16:00 / 20:30 - 23:00</p>
              </div>
              <div className="policy-links">
                <p>
                  <a onClick={() => goTo('/privacy-policy')}>Política de Privacidad</a>
                </p>
              </div>
              <div className="contact">
                <p>
                  También puedes conocernos un poco mejor en nuestra cuenta de Instagram
                  <a href="https://www.instagram.com/nostrecocina" target="_blank" rel="noopener noreferrer">@nostrecocina</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
