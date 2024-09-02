import React, { useState, useRef} from "react";
import { Link } from 'react-router-dom';
import icon from "./burger-icon.png";

const NavBar = ({ lenguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  
  if (lenguage === "EN") {
    return (
      <nav className="nav-mobile">
        <button className="burguer-icon" onClick={() => setIsOpen(!isOpen)}>
          <img src={icon} alt="Burguer-menu" />
        </button>
        <ul
          className={`menu-nav${isOpen ? "-open" : ""}`}
          id="menu"
          ref={menuRef}
        >
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("#carta");
                closeMenu();
              }}
              href="#carta"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("#about");
                closeMenu();
              }}
              href="#about"
            >
              About us
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("#reservation");
                closeMenu();
              }}
              href="#reservation"
            >
              Reservation
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("#contact");
                closeMenu();
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
          <Link to="/refund-politics">Refund Policy</Link>
          </li>
          <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          
        </ul>
      </nav>
    );
  }
  
  return (
    <nav className="nav-mobile">
      <button className="burguer-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={icon} alt="Burguer-menu" />
      </button>
      <ul
        className={`menu-nav${isOpen ? "-open" : ""}`}
        id="menu"
        ref={menuRef}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection("#carta");
              closeMenu();
            }}
            href="#carta"
          >
            Carta
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection("#about");
              closeMenu();
            }}
            href="#about"
          >
            Somos
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection("#reservation");
              closeMenu();
            }}
            href="#reservation"
          >
            Reservas
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection("#contact");
              closeMenu();
            }}
            href="#contact"
          >
            Contacto
          </a>
        </li>
        <li>
          <Link to="/refund-policy">Política de Reembolsos</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Política de Privacidad</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
