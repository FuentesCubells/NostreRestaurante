import React, { useState } from "react";
import Header from "../components/Header/Header";

const PrivacyPolicy = () => {

  const [lenguage, setLenguage] = useState('')

  const handleLenguage = (len) => {
    setLenguage(len) 
  }

  return (
    <>
      <div className="image-container">
          <Header onClick={handleLenguage} lenguage={lenguage} />
      </div>
     <div className="politics-wrapper">
      <h1>Política de Privacidad</h1>

      <h2>1. Identidad del Responsable del Tratamiento:</h2>
      <p>
        <strong>Titular:</strong> Andrés Rengel Herrero <br />
        <strong>NIF/CIF:</strong> 53875769V <br />
        <strong>Domicilio:</strong> Carrer Els Serrans, Picassent <br />
        <strong>Correo Electrónico:</strong> <a href="mailto:nostre@cocinaquesomos.com">nostre@cocinaquesomos.com</a> <br />
        <strong>Sitio Web:</strong> <a href="https://www.nostrecocinaquesomos.es/" target="_blank" rel="noopener noreferrer">https://www.nostrecocinaquesomos.es/</a>
      </p>
      <p>
        Esta Política de Privacidad establece cómo se recopilan, utilizan, divulgan y protegen los datos personales de los usuarios al interactuar con este sitio web. El término "nosotros" o "el Titular" se refiere al propietario del sitio web.
      </p>

      <h2>2. Información que Recopilamos:</h2>
      <p>
        No es necesario proporcionar datos personales para navegar por nuestro sitio web. Recopilamos datos solo cuando se utilizan formularios de contacto, se realizan reservas, se suscribe a boletines o se participa en encuestas.
      </p>

      <h2>3. Uso de la Información:</h2>
      <p>
        Los datos recopilados se utilizan para responder a consultas, gestionar reservas, mejorar nuestros servicios, enviar comunicaciones y analizar patrones de navegación. No compartimos información personal con terceros sin consentimiento.
      </p>

      <h2>4. Cookies y Tecnologías Similares:</h2>
      <p>
        Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico del sitio. Los usuarios pueden controlar el uso de cookies a través de la configuración de su navegador.
      </p>

      <h2>5. Seguridad de la Información:</h2>
      <p>
        Tomamos medidas para proteger la información personal contra pérdida, robo, acceso no autorizado, divulgación, alteración y destrucción. Sin embargo, ninguna transmisión por Internet o sistema de almacenamiento es completamente seguro.
      </p>

      <h2>6. Enlaces a Otros Sitios Web:</h2>
      <p>
        Nuestro sitio web puede contener enlaces a otros sitios web de interés. No tenemos control sobre esos sitios y no somos responsables de la protección y privacidad de la información proporcionada mientras se visita dichos sitios.
      </p>

      <h2>7. Sus Derechos:</h2>
      <p>
        Los usuarios tienen derecho a acceder, rectificar, cancelar, limitar u oponerse al tratamiento de sus datos personales. Estos derechos pueden ejercerse a través de los datos de contacto proporcionados en el sitio web.
      </p>

      <h2>8. Cambios en la Política de Privacidad:</h2>
      <p>
        Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a cambios legislativos o prácticas de la industria. Se recomienda revisar periódicamente esta página para estar al tanto de las actualizaciones.
      </p>

      <p>
        Al utilizar nuestro sitio web, usted acepta el tratamiento de sus datos personales de acuerdo con esta Política de Privacidad.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
