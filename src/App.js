import React, { useState } from "react";
import Cita from "./components/Cita";
import Form from "./components/Form";

function App() {
  //State para todas las citas
  const [citas, setCitas] = useState([]);

  //Funcion para guardar las citas actuales mas la nueva cita
  const createCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <>
      <h1>Patient Administration</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
