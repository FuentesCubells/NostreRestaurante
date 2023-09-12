import React from "react";
import us from "./images/Somos.jpg";

const About = () => {
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
              alt="Una imagen dónde aparecent Andrés Rengel, Nadia Abramova y Pamela Martinez"
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
