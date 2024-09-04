import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';

const Header = ({ onClick, lenguage  }) => {
  const navigate = useNavigate();
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

  const goTo = (direction) => {
    navigate(direction)
  }

  if (lang === "EN") {
    return (
      <div className={`header-container${sticky ? "-sticky" : ""}`}>
        <div className="header-content">
          <div className="logo">
            <a  onClick={() => goTo('/')}>
              <h1>NOSTRE</h1>
              <h2>Cocina que somos</h2>
            </a>
          </div>
          <div className="header-navigation">
            <NavBar lenguage={lenguage}/>
            <div className="main-navigation">
            <a onClick={() => goTo('/')}>Home</a>
              <a href="#carta">Menu</a>
              <a href="#about">About Us</a>
              <a href="#reservation">Reservations</a>
              <a href="#contact">Contact</a>
              <a onClick={() => goTo('/refund-policy')}>Refund Policy</a>
              <a onClick={() => goTo('/privacy-policy')}>Privacy Policy</a>
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
          <a onClick={() => goTo('/')}>Home</a>
            <a href="#carta">Carta</a>
            <a href="#about">Somos</a>
            <a href="#reservation">Reservas</a>
            <a href="#contact">Contacto</a>
            <a onClick={() => goTo('/refund-policy')}>Política de Reembolsos</a>
            <a onClick={() => goTo('/privacy-policy')}>Política de Privacidad</a>
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
