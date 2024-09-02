import React, { useState } from "react";
import Header from "../components/Header/Header";

const RefundPolicy = () => {

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
      <h1>Política de Reembolsos</h1>
      <p>
        Esta política de reembolsos establece las condiciones y términos para solicitar reembolsos en nuestro sitio web. El término "nosotros" o "el Titular" se refiere al propietario del sitio web.
      </p>

      <h2>1. Condiciones para Reservas [1-6 Personas]:</h2>
      <ul>
        <li>Podrá cancelar o modificar la fecha de su reserva sin cargo alguno hasta 24 horas antes de la reserva.</li>
        <li>Si se cancela la reserva con menos de 24 horas de antelación se aplicará una penalización de 29€ por persona.</li>
        <li>Cambios sujetos a la disponibilidad del restaurante. Para cambiar el número de comensales, deberá ponerse en contacto con el restaurante mediante teléfono o correo electrónico.</li>
        <li>La no asistencia o llegada con más de 15 minutos de retraso sin previo aviso se considerará una cancelación fuera del plazo establecido, perdiendo la reserva y aplicando una penalización de 20€ por persona.</li>
      </ul>

      <h2>2. Condiciones para Grupos [Más de 6 Personas]:</h2>
      <ul>
        <li>Podrá cancelar o modificar la fecha de su reserva sin cargo alguno hasta 72 horas antes de la reserva.</li>
        <li>Una vez superado este plazo, no será posible realizar cambios.</li>
        <li>Cambios sujetos a la disponibilidad del restaurante. Para cambiar el número de comensales, deberá cancelar su reserva y hacer una nueva.</li>
        <li>La no asistencia o llegada con más de 15 minutos de retraso sin previo aviso se considerará una cancelación fuera del plazo establecido, perdiendo la reserva y aplicando una penalización del total del dinero pagado en el caso de eventos con pago previo.</li>
      </ul>

      <h2>3. Condiciones para Reservas con Vale Regalo:</h2>
      <p>En las reservas con vale regalo, la no asistencia se considerará el vale regalo íntegro como consumido, perdiendo el derecho a usarlo en futuras reservas.</p>

      <h2>4. Condiciones para Cancelación de Eventos y Reservas con Depósitos:</h2>
      <ul>
        <li>Podrá cancelar o modificar la fecha de su reserva sin cargo alguno hasta 24 horas antes de la reserva.</li>
        <li>Una vez superado este plazo, no será posible realizar cambios.</li>
        <li>Cambios sujetos a la disponibilidad del restaurante. Para cambiar el número de comensales, deberá cancelar su reserva y hacer una nueva.</li>
        <li>La no asistencia o llegada con más de 15 minutos de retraso sin previo aviso se considerará una cancelación fuera del plazo establecido, perdiendo la reserva y aplicando una penalización del total del dinero pagado en el caso de eventos con pago previo.</li>
      </ul>

      <h2>5. Validez de Cheques Regalo:</h2>
      <p>La validez de los cheques regalo es de 6 meses a partir de la fecha de compra. Si se presenta o cancela la reserva con menos de 24 horas de antelación, el vale regalo se considerará consumido.</p>

      <h2>6. Cambios y Anulaciones de Compras:</h2>
      <p>
        Para cualquier cambio o anulación de la compra, dispone de 7 días naturales a partir de la finalización de la compra para solicitar el reembolso.
        Nos reservamos el derecho de modificar esta política de reembolsos para adaptarla a cambios legislativos o prácticas de la industria. Se recomienda revisar periódicamente esta página para estar al tanto de las actualizaciones.
      </p>

      <h2>7. Sólo está permitida la venta a mayores de edad.</h2>

      <h2>8. El comercio es responsable y conoce la legislación vigente de los países a los que envía los productos o realiza los servicios.</h2>

      <h2>9. El titular de la tarjeta tiene conocimiento y acepta las condiciones establecidas por el comercio.</h2>
    </div>
    </>
  );
};

export default RefundPolicy;
