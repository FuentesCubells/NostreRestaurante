import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Reservation from "../components/Reservation/Reservation";
import Place from "../components/Place/Place";
import Footer from "../components/Footer/Footer";
import Oferta from "../components/Oferta/Oferta";
import About from "../components/About/About";
import Loader from "../components/Loader/loader";

const HomeComponent = () => {
  const [lenguage, setLanguage] = useState('ES');
  const [showLoader, setShowLoader] = useState(true);


  const handleLanguage = (len) => {
    setLanguage(len);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowLoader(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showLoader && <Loader onHide={() => setShowLoader(false)} />}
      <div className="image-container">
        <Header onClick={handleLanguage} lenguage={lenguage} />
        <div>
          <Hero lenguage={lenguage} />
        </div>
      </div>
      <Oferta lenguage={lenguage} />
      <About lenguage={lenguage} />
      <Reservation lenguage={lenguage} />
      <Place lenguage={lenguage} />
      <Footer lenguage={lenguage} />
    </>
  );
}

export default HomeComponent;
