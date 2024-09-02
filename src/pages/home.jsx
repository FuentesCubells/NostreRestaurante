import React, { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Reservation from "../components/Reservation/Reservation";
import Place from "../components/Place/Place";
import Footer from "../components/Footer/Footer";
import Oferta from "../components/Oferta/Oferta";
import About from "../components/About/About";

const HomeComponent = () => {

  const [lenguage, setLenguage] = useState('')

  const handleLenguage = (len) => {
    setLenguage(len) 
  }

  return (
    <>
      <div className="image-container">
          <Header onClick={handleLenguage} lenguage={lenguage} />
          <Hero lenguage={lenguage}/>
      </div>
      <Oferta lenguage={lenguage} />
      <About lenguage={lenguage}/>
      <Reservation lenguage={lenguage}/>
      <Place lenguage={lenguage}/>
      <Footer lenguage={lenguage} />
    </>
  )
}
export default HomeComponent;
