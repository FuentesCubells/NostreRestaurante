import React from "react";
import Andres from "./images/andres.jpg"
import Alberto from "./images/alberto.jpg"
import Nadia from "./images/Nadia.jpg"

const About = ({ lenguage }) => {
  if (lenguage === "EN") {
    return (
      <div className="about-fullContainer">
        <div className="about-container">
          <div className="about-title" id="about">
            <h2>Yes, we are young, but we are not a trend or a fashion.</h2>
            <p>
              We are the passion of those who, when they cook, commit
              themselves.
            </p>
          </div>
          <div className="about-img">
            <div className="about-content">
              <div className="about">
                <figure><img src={Andres} /></figure>
                <div className="about-data">
                  <h3>Andrés Rengel:</h3>
                  <p>
                    A Valencian with Andalusian, Castilian, and Aragonese roots.
                    After studying cooking, he decided to work in various
                    Michelin-starred restaurants like La Finca, El Celler de Can
                    Roca, and Arrea to perfect his skills. He eventually entered
                    the teaching field, instructing vocational training classes.
                    However, since he began his culinary journey, he had a dream
                    of opening his own restaurant. Nostre is his most daring and
                    personal venture, and he is a true gastronomy enthusiast.
                    Among his hobbies, you'll find him preparing for cooking
                    competitions, enjoying the mountains, and secretly being quite
                    the dancer.
                  </p>
                </div>
              </div>
              <div className="about">
                <figure><img src={Nadia} /></figure>
                <div className="about-data">
                  <h3>Nadia Abramova:</h3>
                  <p>
                    A programming graduate, Nadia started her culinary studies in
                    Russia but was drawn to Mediterranean cuisine and its
                    possibilities. She decided to come to Valencia to further her
                    culinary education. An avid nature lover, she spends a
                    significant part of her free time gathering her own herbs and
                    has become an expert in fermentations. You must definitely try
                    her lemonades, and if you're lucky, some of her homemade
                    kombuchas!
                  </p>
                </div>

              </div>
              {/* <div className="about">
                <figure><img src={Alberto} /></figure>
                <div className="about-data">
                  <h3>Alberto Pastor:</h3>
                  <p>
                    Our comments on the
                    gastronomy dates back to 2003. He studied Hospitality in
                    Murcia has worked in multiple fine dining restaurants
                    in Valencia, Elche and Murcia. It's a real whirlwind as if
                    Your best friend is the driver so you can spend a little more
                    power chargers. If you receive it with a sound,
                    You will guide throughout the service to live an experience.
                    unforgettable and you will also have the security that you will be able to carry your card
                    the occasional laugh.
                  </p>
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="about-fullContainer">
      <div className="about-container">
        <div className="about-title" id="about">
          <h2>Sí, somos jóvenes, pero no somos moda, ni tendencia.</h2>
          <p>Somos el sentimiento de quienes cuando cocinan, se comprometen.</p>
        </div>
        <div className="about-img">
          <div className="about-content">
                   
          <div className="about">
            <figure><img src={Andres} /></figure>
            <div className="about-data">
              <h2>El chef: </h2>
              <h3>Andrés Rengel</h3>
              <p>
                Valenciano de raíces andaluzas, castellanas y aragonesas. Tras
                estudiar cocina, decide pasar por diferentes restaurantes de
                estrella Michelin, como La Finca, El Celler de Can Roca, Arrea,
                para perfeccionar sus conocimientos. Termina en la docencia,
                dando clases de formación profesional, pero desde que se inició
                en la cocina, había tenido el sueño de abrir su propio
                restaurante. Nostre es la apuesta más arriesgada y personal de
                este adicto a la gastronomía. Entre sus hobbies, está el
                prepararse para ganar concursos de cocina, la montaña y aunque
                lo niegue, ser todo un bailarín.
              </p>
            </div>

          </div>
         
            <div className="about">
              <figure><img src={Nadia} /></figure>
              <div className="about-data">
                <h3>Nadia Abramova:</h3>
                <p>
                  Licenciada en programación, Nadia inicio sus estudios de cocina
                  en Rusia, pero movida por la cocina mediterránea y todas sus
                  posibilidades pronto decidió venir a formarse en gastronomía a
                  Valencia. Fan incondicional de la naturaleza, pasa gran parte de
                  su tiempo libre recolectando sus propias hierbas y se ha
                  convertido en toda una experta de las fermentaciones. Sin duda,
                  tenéis que probar sus limonadas y si sois afortunados ¡alguna de
                  sus combuchas caseras!
                </p>
              </div>

            </div>
            {/* <div className="about">
              <figure><img src={Alberto} /></figure>
              <div className="about-data">
                <h3>Alberto Pastor:</h3>
                <p>
                  Sus comienzos en la
                  gastronomía se remontan al año 2003. Estudió Hostelería en
                  Murcia y ha trabajado en múltiples restaurantes de alta cocina
                  en Valencia, Elche y Murcia. Es un auténtico torbellino así que
                  su mejor aliado es el deporte para poder agotar un poco sus
                  cargadores de energía. Siempre te recibirá con una sonrisa, te
                  guiará durante todo el servicio para que vivas una experiencia
                  inolvidable y además te aseguramos que será capaz de sacarte
                  alguna que otra carcajada.
                </p>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
