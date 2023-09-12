import React from "react";
import carta from "./images/Carta.jpg";

const Oferta = () => {
  return (
    <div className="offer-fullContainer">
      <div className="offer-container">
        <div className="offer-title" id="carta">
          <h2>Nuestra oferta</h2>
        </div>
        <div className="offer-content">
          <div className="offer-letter">
            <figure>
                <img src={carta} alt="Imagen de la carta de Nostre restaurante" />
            </figure>
            <h3>La carta</h3>
            <p>
              El fondo de una olla, cebolla pochando al rescoldo de unas brasas,
              la abuela poniendo la cazuela de barro al fuego, aquellas recetas
              con las que hemos crecido que evocan la forma que hemos tenido de
              vivir la cocina desde nuestra niñez, reflejadas en una carta de
              propuesta atemporal.
            </p>
            <div className="offer-letter-buttons">
              <button>Ver la bodega</button>
              <button>Ver la carta</button>
            </div>
          </div>
          <div className="offer-menu">
            <h3>El menú</h3>
            <p>
              Es el resultado de los días de compra en el mercado, el cultivo de
              la tierra tras la herencia familiar, el kilometro cero y la
              temporalidad, plasmadas en un menú que varía en consonancia con la
              época del año
            </p>
            <div className="offer-letter-buttons menu-button">
              <button>Ver el menú</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
