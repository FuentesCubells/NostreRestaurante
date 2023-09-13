import React from "react";
import us from "./images/Somos.jpg";

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
            <figure>
              <img
                src={us}
                alt="Andrés Rengel, Nadia Abramova, and Pamela Martinez"
              />
            </figure>
            <div className="about-content">
              <div className="about">
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
              <div className="about">
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
              <div className="about">
                <h3>Pamela Martínez:</h3>
                <p>
                  Born in Colombia but with German roots, Pamela went to Germany
                  to study cooking at the age of 18. After gaining years of
                  experience, Pamela decided to step out of the kitchen and
                  specialize in front-of-house service. She's passionate about
                  rock climbing, but above all, she loves traveling. She ended
                  up in Valencia a year ago and fell in love with the city,
                  making it her home. As a seasoned traveler, Pamela will guide
                  you throughout the service to ensure you have an unforgettable
                  experience.
                </p>
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
          <h2>Sí, somos jóvenes, pero no somos moda, ni tendencia.</h2>
          <p>Somos el sentimiento de quienes cuando cocinan, se comprometen.</p>
        </div>
        <div className="about-img">
          <figure>
            <img
              src={us}
              alt="Andrés Rengel, Nadia Abramova y Pamela Martinez"
            />
          </figure>
          <div className="about-content">
            <div className="about">
              <h3>Andrés Rengel:</h3>
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
            <div className="about">
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
            <div className="about">
              <h3>Pamela Martínez:</h3>
              <p>
                Colombiana de nacimiento pero con raíces alemanas, a los 18
                años, se va a estudiar cocina a Alemania. Tras años de
                experiencia, Pamela decide dar un paso y salir de la cocina para
                especializarse en sala. Enamorada de la escalada, pero sobre
                todo de los viajes, termina visitando Valencia, donde se enamora
                de la ciudad y decide convertirla en su residencia, ya hace un
                año. Como buena viajera, Pamela os guiará durante todo el
                servicio para que viváis una experiencia inolvidable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
