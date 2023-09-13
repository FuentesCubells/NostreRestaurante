import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header = ({ onClick, lenguage  }) => {
  const [sticky, setIssticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIssticky(true);
      } else {
        setIssticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (lenguage === "EN") {
    return (
      <div className={`header-container${sticky ? "-sticky" : ""}`}>
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <h1>NOSTRE</h1>
              <h2>Cocina que somos</h2>
            </a>
          </div>
          <div className="header-navigation">
            <NavBar lenguage={lenguage}/>
            <div className="main-navigation">
              <a href="#carta">Menu</a>
              <a href="#about">About Us</a>
              <a href="#reservation">Reservations</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="language-navigation">
              <button onClick={() => onClick("ES")} >ES</button>
              <button onClick={() => onClick("EN")} >EN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`header-container${sticky ? "-sticky" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <h1>NOSTRE</h1>
            <h2>Cocina que somos</h2>
          </a>
        </div>
        <div className="header-navigation">
          <NavBar lenguage={lenguage}/>
          <div className="main-navigation">
            <a href="#carta">Carta</a>
            <a href="#about">Somos</a>
            <a href="#reservation">Reservas</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className="language-navigation">
            <button onClick={() => onClick("ES")} >ES</button>
            <button onClick={() => onClick("EN")} >EN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
