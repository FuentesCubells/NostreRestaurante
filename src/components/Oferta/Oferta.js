import React from "react";
import carta from "./images/platoOferta.jpeg";
import pdf from "./images/CartaNostre.pdf"
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
                <u>The menus change according to the offer and season.</u>
              </p>
              <ul className="menu-list">
                {/* <li className="menu-0">
                  <strong className="menu-title">Ørgullo Menu:</strong>
                  <ul>
                    <li>Picnic</li>
                    <li>5 savory courses</li>
                    <li>1 sweet course</li>
                    <li>Petit fours</li>
                  </ul>
                  <p>Price: €60 per person</p>
                  <div className="menu-0-buttons">
                    <button>
                      <a href="/#reservation">Make a Reservation</a>
                    </button>
                  </div>
                </li> */}

                <li className="menu-3">
                  <strong className="menu-title">Àvia Menu: (available only on Monday, Thursday, and Friday at lunchtime)</strong>
                  <ul>
                    <li>Snack</li>
                    <li>2 starter</li>
                    <li>1 main course of your choice</li>
                    <li>1 dessert</li>
                  </ul>
                  <p>Price: €37 per person</p>
                  <div className="menu-0-buttons">
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>

                {/* <li className="menu-3">
                  <strong className="menu-title">NØSTRE Menu:</strong>
                  <ul>
                    <li>Picnic</li>
                    <li>4 savory courses</li>
                    <li>1 sweet course</li>
                  </ul>
                  <p>Price: €47 per person</p>
                  <div className="menu-1-buttons">
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li> */}

                <li className="menu-3">
                  <strong className="menu-title">Ørigen Menu:</strong>
                  <ul>
                    <li>Picnic</li>
                    <li>5 savory courses</li>
                    <li>1 sweet course</li>
                  </ul>
                  <p>Price: €60 per person</p>
                  <div className="menu-0-buttons">
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>

                <li className="menu-1">
                  <strong className="menu-title">Opportunity Menu:</strong>
                  <ul>
                    <li>Picnic</li>
                    <li>6 savory courses</li>
                    <li>2 sweet courses</li>
                  </ul>
                  <p>Price: €75 per person</p>
                  <div className="menu-1-buttons">
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>

                <li className="menu-2">
                  <strong className="menu-title">Festival Menu</strong>
                  <ul>
                    <li>Picnic</li>
                    <li>8 savory courses</li>
                    <li>2 sweet courses</li>
                  </ul>
                  <p>Price: €95 per person</p>
                  <div className="menu-1-buttons">
                    <button>
                      <a href="/#reservation">Make a reservation</a>
                    </button>
                  </div>
                </li>



                {/* <li className="menu-3">
                  <strong className="menu-title">Menu:</strong>
                  <p>Our Menu, so you can choose your own path and experience Nøstre in your own way.</p>
                  <div className="menu-1-buttons">
                    <button>
                      <a href="/#reservation">Make a Reservation</a>
                    </button>
                    <button>
                      <a href={'https://www.canva.com/design/DAGUM3s1Xyw/YjdjXHvbNIkre8X5WapZ8g/view?utm_content=DAGUM3s1Xyw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h81a2d76971#1'} target="_blank">View the Menu</a>
                    </button>
                  </div>
                </li> */}

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


              <li className="menu-3">
                <strong className="menu-title">Menú Àvia: (solo disponible Lunes, Jueves y Viernes a mediodía)</strong>
                <ul>
                  <li>Snack</li>
                  <li>2 entrante</li>
                  <li>1 principal a elegir</li>
                  <li>1 postre</li>
                </ul>
                <p>Precio: 37€ por persona</p>
                <div className="menu-0-buttons">
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>

              {/* <li className="menu-3">
                <strong className="menu-title">Menú NØSTRE:</strong>
                <ul>
                  <li>Picnic</li>
                  <li>4 pases salados</li>
                  <li>1 pases dulces</li>
                </ul>
                <p>Precio: 47€ por persona</p>
                <div className="menu-1-buttons">
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li> */}

              <li className="menu-3">
                <strong className="menu-title">Menú Ørigen:</strong>
                <ul>
                  <li>Picnic</li>
                  <li>5 platos salados</li>
                  <li>1 plato dulce</li>
                </ul>
                <p>Precio: €60 por persona</p>
                <div className="menu-0-buttons">
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>

              <li className="menu-1">
                <strong className="menu-title">Menú Øportunidad:</strong>
                <ul>
                  <li>Picnic</li>
                  <li>6 pases salados</li>
                  <li>2 pases dulces</li>
                </ul>
                <p>Precio: 75€ por persona</p>
                <div className="menu-1-buttons">
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>

              <li className="menu-2">
                <strong className="menu-title">Menú Festival</strong>
                <ul>
                  <li>Picnic</li>
                  <li>8 pases salados</li>
                  <li>2 pases dulces</li>
                </ul>
                <p>Precio: 90€ por persona</p>
                <div className="menu-1-buttons">
                  <button>
                    <a href="/#reservation">Hacer una reserva</a>
                  </button>
                </div>
              </li>


              {/* <li className="menu-3">
                <strong className="menu-title">Carta:</strong>
                <p>Nuestra Carta, para que escojas tu propio camino y vivas la experiencia de Nøstre a tu manera.</p>
                <div className="menu-1-buttons">
                  <button>
                    <a href="/#reservation">Hacer una Reserva</a>
                  </button>
                  <button>
                    <a href={'https://www.canva.com/design/DAGUM3s1Xyw/YjdjXHvbNIkre8X5WapZ8g/view?utm_content=DAGUM3s1Xyw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h81a2d76971#1'} target="_blank">Ver la Carta</a>
                  </button>
                </div>
              </li> */}

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
