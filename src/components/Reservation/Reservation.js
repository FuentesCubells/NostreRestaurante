import React from "react";

const Reservation = ({ lenguage }) => {
  if (lenguage === "EN") {
    return (
      <div className="reservation-fullContainer">
        <div className="reservation-title" id="reservation">
          <h2>We open the doors of our home, join us:</h2>
          <p>Make your reservation:</p>
        </div>
        <iframe src="https://nostre.bookingtable.cat/widget" id="bookingtable" name="bookingtable" width="100%"></iframe>
      </div>
    );
  }
  return (
    <div className="reservation-fullContainer">
      <div className="reservation-title" id="reservation">
        <h2>Te abrimos las puertas de nuestra casa, acompáñanos:</h2>
        <p>Haz tu reserva:</p>
      </div>
      <iframe src="https://nostre.bookingtable.cat/widget" id="bookingtable" name="bookingtable" width="100%"></iframe>
    </div>
  );
};

export default Reservation;
