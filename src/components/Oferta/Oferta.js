import React, { useState } from "react";
import carta from "./images/Carta.jpg";
import Bodega from "./images/Bodega.pdf"; 
import Comida from "./images/Comida.pdf";

const Oferta = ({ lenguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    const menu = document.getElementById("menu-description");
    menu.classList.toggle("menu-description-open");
    setMenuOpen(!menuOpen);
  };

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
                <button><a href={Bodega} target="_blank" >Wine Cellar</a></button>
                <button><a href={Comida} target="_blank"></a>View the Menu</button>
              </div>
            </div>
            <div className="offer-menu">
              <div className="offer-title">
                <h3>The Menu</h3>
                <p>Based on seasonal products</p>
              </div>
              <ul
                className={`${
                  menuOpen ? "menu-description-open" : "offer-menu-description"
                }`}
                id="menu-description"
              >
                <li>Includes:</li>
                <li>2 Starters</li>
                <li>Fish, meat, and dessert</li>
                <li>Water and bread service</li>
                <li>37 euros per person</li>
              </ul>

              <div className="offer-letter-buttons menu-button">
                <button onClick={handleMenu}>View the Menu</button>
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
            <p id="paragraph">
              El fondo de una olla, cebolla pochando al rescoldo de unas brasas,
              la abuela poniendo la cazuela de barro al fuego, aquellas recetas
              con las que hemos crecido que evocan la forma que hemos tenido de
              vivir la cocina desde nuestra niñez, reflejadas en una carta de
              propuesta atemporal.
            </p>
            <div className="offer-letter-buttons">
              <button><a href={Bodega} target="_blank">Ver La Bodega</a></button>
              <button><a href={Comida} target="_blank">Ver La Carta</a></button>
            </div>
          </div>
          <div className="offer-menu">
            <div className="offer-title">
              <h3>El menú</h3>
              <p>Según producto de temporada</p>
            </div>
            <ul
              className={`${
                menuOpen ? "menu-description-open" : "offer-menu-description "
              }`}
              id="menu-description"
            >
              <li>Incluye:</li>
              <li>2 Entrantes</li>
              <li>Pescado, carne y postre</li>
              <li>Servicio de agua y pan</li>
              <li>37 euros por persona</li>
            </ul>
            <div className="offer-letter-buttons menu-button">
              <button onClick={handleMenu}>Ver el menú</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
