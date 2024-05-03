import React from "react";
import carta from "./images/Carta.jpg";
import menu from "./images/menu.jpg";
import Bodega from "./images/Bodega.pdf";
import Comida from "./images/Comida.pdf";
import Origen from "./images/MenuOrigen.pdf"
import Oportunidad from "./images/MenuOportunidad.pdf"

const Oferta = ({ lenguage }) => {
  /*
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const menuSection = document.getElementById("menu-section");

    if (menuSection) {
      const menuSectionRect = menuSection.getBoundingClientRect();
      const modal = document.getElementById("modal");
      const modalContainer = document.getElementById("modal-container");

      if (modal) {
        modalContainer.style.width = `${menuSectionRect.width}px`;

        modal.style.top = `${menuSectionRect.top}px`; // Position above the menu-section
        modal.style.left = `${menuSectionRect.left - 200}px`; // Adjust as needed
        modal.style.right = `${menuSectionRect.right}px`; // Adjust as needed
        modal.style.bottom = `${menuSectionRect.bottom}px`; // Adjust as needed
      }
    }
    setMenuOpen(!menuOpen);
  };

  const closeMenuModal = () => {
    setMenuOpen(false);
  };*/

  if (lenguage === "EN") {
    return (
      <div className="offer-fullContainer" id="carta">
        <div className="offer-container">
          <div className="offer-title">
            <h2>Our Offer</h2>
          </div>
          <div className="offer-content">
            <div className="offer-menu" id="menu-section">
              <div className="menu-img">
                <figure><img src={carta} alt="Image of Nostre restaurant's menu" /></figure>
              </div>
              <h3>The Menu</h3>
              <p>
                Where we have wanted to capture our tradition, heritage, and
                mestizaje. The menus are born for you to discover the true
                essence of Nostre and experience the cuisine that we are.
                The menus change according to the offer and season.
              </p>
              <ul className="menu-list">
                <li className="menu-0">
                  <strong className="menu-title"> Øpportunity Menu:</strong>
                  <ul>
                    <li>Aperitif sequence</li>
                    <li>6 savory courses</li>
                    <li>1 sweet course</li>
                  </ul>
                  <p>Price: €60 per person</p>
                  <div className="menu-0-buttons">
                    {/* <button>
                      <a href={Oportunidad} target="_blank">View menu</a>
                    </button> */}
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>
                <li className="menu-1">
                  <strong className="menu-title"> Ørigin Menu:</strong>
                  <ul>
                    <li>Aperitif sequence</li>
                    <li>7 savory courses</li>
                    <li>2 sweet courses</li>
                  </ul>
                  <p>Price: €45 per person</p>
                  <div className="menu-1-buttons">
                    {/* <button>
                      <a href={Origen} target="_blank">View menu</a>
                    </button> */}
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>
                <li className="menu-2">
                <strong className="menu-title">Ørgullo Menu:</strong>
                <ul>
                  <li>Snacks sequence</li>
                  <li>4 savory courses</li>
                  <li>1 sweet course</li>
                </ul>
                <p>Precio: 75€ por persona</p>
                <div className="menu-1-buttons">
                  {/* <button>
                    <a href={Origen} target="_blank">Ver el menú</a>
                  </button> */}
                  <button>
                    <a href="/#reservation">Hacer a reservation</a>
                  </button>
                </div>
              </li>
              </ul>
            </div>
            {/* <div className="offer-letter">
              <figure>
                <img alt="menu" src={menu}/>
              </figure>
              <h3>Menu card</h3>
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
                <button>
                  <a href="/#reservation">Make a reservation</a>
                </button>
              </div>
            </div> */}
            
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
        <div className="offer-menu" id="menu-section">
            <div className="menu-img">
              <figure>
                <img src={carta} alt="Imagen de la carta de Nostre restaurante" />
              </figure>
            </div>
            <h3>El menú</h3>
            <p>
              Donde hemos querido plasmar nuestra tradición, herencia y
              mestizaje. Los menús nacen para que descubras la verdadera esencia
              de Nostre y vivas la experiencia de la cocina que somos. <u>Los menús cambian diariamente dependiendo de la estacionalidad, productos e inspiración del equipo</u>
            </p>
            <ul className="menu-list">
              <li className="menu-0">
                <strong className="menu-title">Menú  Øportunidad:</strong>
                <ul>
                  <li>Secuencia de aperitivos</li>
                  <li>6 pases salados</li>
                  <li>1 pase dulce</li>
                </ul>
                <p>Precio: 60€ por persona</p>
                <div className="menu-0-buttons">
                  {/* <button>
                    <a href={Oportunidad} target="_blank">Ver el menú</a>
                  </button> */}
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>

              </li>
              <li className="menu-1">
                <strong className="menu-title">Menú  Ørigen:</strong>
                <ul>
                  <li>Secuencia de aperitivos</li>
                  <li>7 pases salados</li>
                  <li>2 pases dulces</li>
                </ul>
                <p>Precio: 45€ por persona</p>
                <div className="menu-1-buttons">
                  {/* <button>
                    <a href={Origen} target="_blank">Ver el menú</a>
                  </button> */}
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>
              <li className="menu-2">
                <strong className="menu-title">Menú  Ørgullo:</strong>
                <ul>
                  <li>Secuencia de snacks</li>
                  <li>4 pases salados</li>
                  <li>1 pases dulces</li>
                </ul>
                <p>Precio: 75€ por persona</p>
                <div className="menu-1-buttons">
                  {/* <button>
                    <a href={Origen} target="_blank">Ver el menú</a>
                  </button> */}
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>
            </ul>

            
          </div>
          {/* <div className="offer-letter">
            <figure><img alt="menu" src={menu}/></figure>
            
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
              <button>
                <a href="/#reservation">Hacer una reserva</a>
              </button>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Oferta;
