import React, { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import icon from "./burger-icon.png";

const NavBar = ({ lenguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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

  const goTo = (direction) => {
    navigate(direction)
  }


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
            <a onClick={() => goTo('/')}>Home</a>
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
            <a onClick={() => goTo('/refund-policy')}>Refund Policy</a>
          </li>
          <li>
            <a onClick={() => goTo('/privacy-policy')}>Privacy Policy</a>
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
          <a onClick={() => goTo('/')}>Home</a>
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
          <a onClick={() => goTo('/refund-policy')}>Política de Reembolsos</a>
        </li>
        <li>
          <a onClick={() => goTo('/privacy-policy')}>Política de Privacidad</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
