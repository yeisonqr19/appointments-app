import React from "react";

const Cita = ({ cita, deleteCita }) => (
  <div className="cita">
    <p>
      Pet: <span>{cita.pet}</span>
    </p>

    <p>
      Owner: <span>{cita.owner}</span>
    </p>

    <p>
      dateDischarge: <span>{cita.dateDischarge}</span>
    </p>

    <p>
      time: <span>{cita.time}</span>
    </p>

    <p>
      symptoms: <span>{cita.symptoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteCita(cita.id)}
    >
      Delete &times;
    </button>
  </div>
);

export default Cita;
