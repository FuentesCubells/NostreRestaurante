import React, { useState } from "react";
import carta from "./images/Carta.jpg";
import Bodega from "./images/Bodega.pdf";
import Comida from "./images/Comida.pdf";

const Oferta = ({ lenguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const menuSection = document.getElementById("menu-section");

    if (menuSection) {
      const menuSectionRect = menuSection.getBoundingClientRect();
      const modal = document.getElementById("modal");
      const modalContainer  = document.getElementById("modal-container");


      if (modal) {
        modalContainer.style.width = `${menuSectionRect.width}px`;

        modal.style.top = `${menuSectionRect.top}px`; // Position above the menu-section
        modal.style.left = `${menuSectionRect.left-200}px`; // Adjust as needed
        modal.style.right = `${menuSectionRect.right}px`; // Adjust as needed
        modal.style.bottom = `${menuSectionRect.bottom}px`; // Adjust as needed
      }
    }
    setMenuOpen(!menuOpen);
  };

  const closeMenuModal = () => {
    setMenuOpen(false);
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
                <button>
                  <a href={Bodega} target="_blank">
                    Wine Cellar
                  </a>
                </button>
                <button>
                  <a href={Comida} target="_blank"></a>View the Menu
                </button>
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
            <p id="paragraph">
              El fondo de una olla, cebolla pochando al rescoldo de unas brasas,
              la abuela poniendo la cazuela de barro al fuego, aquellas recetas
              con las que hemos crecido que evocan la forma que hemos tenido de
              vivir la cocina desde nuestra niñez, reflejadas en una carta de
              propuesta atemporal.
            </p>
            <div className="offer-letter-buttons">
              <button>
                <a href={Bodega} target="_blank">
                  Ver La Bodega
                </a>
              </button>
              <button>
                <a href={Comida} target="_blank">
                  Ver La Carta
                </a>
              </button>
            </div>
          </div>
          <div className="offer-menu" id="menu-section">
            <div className="menu-img"></div>
            <h3>El menú</h3>
            <p>
              Es el resultado de los días de compra en el mercado, el cultivo de
              la tierra tras la herencia familiar, el kilometro cero y la
              temporalidad, plasmadas en un menú que varía en consonancia con la
              época del año
            </p>
            <div className="offer-letter-buttons menu-button">
              <button id="menu-section" onClick={handleMenu}>Ver el menú</button>
            </div>
            <div className={`${menuOpen ? "modal-open" : "modal"}`} id="modal-container">
              <div className="modal-content" id="modal">
                <div className="modal-content-title">
                  <h4>Incluye:</h4>
                  <button className="modal-button"onClick={closeMenuModal}>Ø</button>
                </div>
                <div className="modal-text">
                  <ul>
                    <li>2 Entrantes</li>
                    <li>Pescado, carne y postre</li>
                    <li>Servicio de agua y pan</li>
                    <li>37 euros por persona</li>
                  </ul>
                </div>
                <p>El menú se elabora según los productos del mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
