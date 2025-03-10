import React from "react";
import Andres from "./images/andres.jpeg"
import Sara from "./images/Sara.jpeg"
import Nadia from "./images/nadia.jpeg"

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
              {/* <div className="about">
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

              </div> */}
              <div className="about">
                <figure><img src={Sara} alt="Sara Forner" /></figure>
                <div className="about-data">
                  <h3>Sara Forner:</h3>
                  <p>
                    Graduated in Tourism. Coming from a family of restaurateurs, she didn't always want to follow in their footsteps. However, she began to fall in love with gastronomy after working at a hospitality school.
                    She is in charge of welcoming you to our place, recommending the most exciting wines she has selected for you, and ensuring that your time at the restaurant is a memorable experience. Together with Andrés, she is the creative mind behind Nøstre and will share the stories and secrets behind our dishes, helping you enjoy your visit to the fullest.
                  </p>
                </div>
              </div>

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
          <h2>Equipo</h2>
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

            {/* <div className="about">
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

            </div> */}
            <div className="about">
              <figure><img src={Sara} /></figure>
              <div className="about-data">
                <h3>Sara Forner:</h3>
                <p>
                  Graduada en Turismo. De familia de hosteleros, no siempre quiso seguir sus pasos, Pero empezó a enamorarse de la gastronomía después de trabajar en una escuela de hostelería.
                  Ella se encarga de recibiros en nuestra casa, de recomendaros los vinos más divertidos que tenga para vosotros y hacer que vuestro paso por el restaurante sea toda una experiencia. Junto a Andrés es la cabeza pensante de Nøstre y os contará todas la historias y entresijos de nuestros platos para que disfrutéis al 100% de vuestra visita.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
