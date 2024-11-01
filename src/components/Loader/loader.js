import React, { useEffect, useState } from "react";

const Loader = ({ onHide }) => {
  const [scrollInterval, setScrollInterval] = useState(null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Iniciar desplazamiento continuo
    const intervalId = setInterval(scrollToTop, 100); // Desplazar cada 100ms
    setScrollInterval(intervalId);

    // Ocultar el loader después de 2 segundos
    const timer = setTimeout(() => {
      clearInterval(intervalId);
      onHide(); // Oculta el loader
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, [onHide]);

  return (
    <div className="loader-screen">
      <div className="logo">
        <h1>NOSTRE</h1>
      </div>
    </div>
  );
};

export default Loader;
