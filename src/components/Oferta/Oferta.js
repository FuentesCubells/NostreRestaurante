import React from "react";
import carta from "./images/Carta.jpg";

const Oferta = ({ lenguage }) => {

  const paragraph = () => {
      const offerParagraph = document.getElementById('offer-paragraph')
      const menu = document.getElementById('menu-paragraph')

      menu.style.offsetHeight = offerParagraph.offsetHeight
  }

  if (lenguage === "EN") {
    return (

      <div className="offer-fullContainer" id="carta">
        <div className="offer-container">
          <div className="offer-title">
            <h2>Our Offer</h2>
          </div>
          <div className="offer-content">
            <div className="offer-letter">
              <figure>
                <img src={carta} alt="Image of Nostre restaurant's menu" />
              </figure>
              <h3>The Menu</h3>
              <p>
                The bottom of a pot, onions sautéing over the embers, grandma
                putting the clay pot on the fire, those recipes we've grown up
                with that evoke the way we've experienced cooking since
                childhood, reflected in a timeless menu proposal.
              </p>
              <div className="offer-letter-buttons">
                <button>Wine Cellar</button>
                <button>View the Menu</button>
              </div>
            </div>
            <div className="offer-menu">
              <div className="menu-img"></div>
              <h3>The Menu</h3>
              <p>
                It's the result of days spent shopping at the market,
                cultivating the land after generations of family heritage, using
                local ingredients, and following seasonal availability. All of
                this is showcased in a menu that changes with the seasons.
              </p>
              <div className="offer-letter-buttons menu-button">
                <button>View the Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
            <p id='paragraph'>
              El fondo de una olla, cebolla pochando al rescoldo de unas brasas,
              la abuela poniendo la cazuela de barro al fuego, aquellas recetas
              con las que hemos crecido que evocan la forma que hemos tenido de
              vivir la cocina desde nuestra niñez, reflejadas en una carta de
              propuesta atemporal.
            </p>
            <div className="offer-letter-buttons">
              <button>Ver La bodega</button>
              <button>Ver la carta</button>
            </div>
          </div>
          <div className="offer-menu">
            <div className="menu-img"></div>
            <h3>El menú</h3>
            <p id="paragraph" onClick={() => paragraph()}>
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
