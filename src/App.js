import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reservation from "./components/Reservation/Reservation";
import Place from "./components/Place/Place";
import Footer from "./components/Footer/Footer";
import Oferta from "./components/Oferta/Oferta";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <div className="image-container">
          <Header />
          <Hero />
      </div>
      <Oferta />
      <About />
      <Reservation/>
      <Place />
      <Footer />
    </>
  )
}
export default App;
