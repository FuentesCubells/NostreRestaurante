import React from "react";
import phone from "./images/Phone.png";
import map from "./images/Map.png";
import email from "./images/Email.png";

import { Wrapper, Status } from "@googlemaps/react-wrapper";



const Place = () => {
    return (
        <div className="contact-fullContainer">
            <div className="contact-container">
                <div className="contact-title" id="contact">
                    <h2>¿Dónde Nos Encontrarás?</h2>
                    <p>A pocos metros del Mercado Central</p>
                </div>
                <div className="contact-content">
                    <div className="contact-map">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.92981590109133!2d-0.37868754098938384!3d39.47282766323109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f783b6cab69%3A0x2c697fd2f21884b6!2sNostre%20Cocina!5e0!3m2!1ses!2ses!4v1694456487788!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-schedule">
                        <h3>Horario:</h3>
                        <p>De martes a sábado en servicio de comidas de 13:00 a 15:30 
                            De jueves a sábado en servicio de cenas de 20:30 a 22:00</p>
                    </div>
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
                            <p>contacto@nostrecocina.com</p>
                        </div>
                        <div className="contact">
                            <p>También puedes conocernos un poco mejor en nuestra cuenta de instagram @nostrecocina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Place