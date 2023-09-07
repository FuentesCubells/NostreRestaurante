import React from "react";
import BurguerMenu from "./BurguerMenu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <h1>NOSTRE</h1>
            <h2>Cocina que somos</h2>
          </a>
        </div>
        <div className="header-navigation">
          <BurguerMenu/>
          <div className="main-navigation">
            <a href="/">Carta</a>
            <a href="/">Somos</a>
            <a href="/">Reservas</a>
            <a href="/">Contacto</a>
          </div>
          <div className="language-navigation">
            <a href="/">ES</a>
            <a href="/">EN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
