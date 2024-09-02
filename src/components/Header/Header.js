import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const Header = ({ onClick, lenguage  }) => {
  const [sticky, setIssticky] = useState(false);
  const [lang, setLang] = useState('');


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


  if (lang === "EN") {
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
              <Link to="/">Home</Link>
              <a href="#carta">Menu</a>
              <a href="#about">About Us</a>
              <a href="#reservation">Reservations</a>
              <a href="#contact">Contact</a>
              <Link to="/refund-policy">Refund Policy</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
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
            <Link to="/">Home</Link>
            <a href="#carta">Carta</a>
            <a href="#about">Somos</a>
            <a href="#reservation">Reservas</a>
            <a href="#contact">Contacto</a>
            <Link to="/refund-policy">Política de Reembolsos</Link>
            <Link to="/privacy-policy">Política de Privacidad</Link>
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
