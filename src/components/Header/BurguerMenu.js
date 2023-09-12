import React, { useState } from "react";
import icon from "./burger-icon.png"

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
        <div className="burguer-menu">
            <button className="burguer-icon" onClick={toggleMenu}>
                <img
                    src={icon}
                    alt="Burguer-menu"
                    className={`burger-icon-image ${isOpen ? "open" : ""}`}
                />
            </button>
            {isOpen && (
                <div className="main-navigation-burguer">
                    <a onClick={() => scrollToSection('#carta')} href="#carta">Carta</a>
                    <a onClick={() => scrollToSection('#about')} href="#about">Somos</a>
                    <a onClick={() => scrollToSection('#reservation')} href="#reservation">Reservas</a>
                    <a onClick={() => scrollToSection('#contact')} href="#contact">Contacto</a>
                </div>
            )}
        </div>
  );
};

export default BurguerMenu;
