import React, { useEffect, useState} from "react";
import BurguerMenu from "./BurguerMenu";

const Header = () => {
  const [sticky, setIssticky] = useState(false);

  useEffect(() =>{
    const handleScroll = () => {
        if(window.scrollY > 0) {
            setIssticky(true);
        } else {
          setIssticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`header-container${sticky ? '-sticky' : ''}`} >
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
            <a href="#contact">Contacto</a>
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
