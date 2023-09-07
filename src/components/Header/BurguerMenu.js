import React, { useState } from "react";
import icon from "./burger-icon.png"

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                    <a href="/">Carta</a>
                    <a href="/">Somos</a>
                    <a href="/">Reservas</a>
                    <a href="/">Contacto</a>
                </div>
            )}
        </div>
  );
};

export default BurguerMenu;
