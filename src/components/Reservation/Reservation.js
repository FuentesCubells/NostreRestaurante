import React from "react";

const Reservation = ({ lenguage }) => {
  if (lenguage === "EN") {
    return (
      <div className="reservation-fullContainer">
        <div className="reservation-title" id="reservation">
          <h2>We open the doors of our home, join us:</h2>
          <p>Make your reservation:</p>
        </div>
        <iframe
          id="restaurante-nostre"
          title="Reservas"
          src="https://www.covermanager.com/reservation/module_restaurant/restaurante-nostre/english"
          frameborder="0"
          height="550"
          width="100%"
          onload="iFrameResize();"
        ></iframe>
      </div>
    );
  }
  return (
    <div className="reservation-fullContainer">
      <div className="reservation-title" id="reservation">
        <h2>Te abrimos las puertas de nuestra casa, acompáñanos:</h2>
        <p>Haz tu reserva:</p>
      </div>
      <iframe
        id="restaurante-nostre"
        title="Reservas"
        src="https://www.covermanager.com/reservation/module_restaurant/restaurante-nostre/spanish"
        frameborder="0"
        height="550"
        width="100%"
        onload="iFrameResize();"
      ></iframe>
    </div>
  );
};

export default Reservation;
