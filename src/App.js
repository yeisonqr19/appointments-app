import React, { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Form from "./components/Form";

function App() {
  //State para todas las citas
  const [citas, setCitas] = useState([]);

  //useEffect para realizar funciones solo cuando cambie el state
  useEffect(() => {
    
  }, [citas]);

  //Funcion para guardar las citas actuales mas la nueva cita
  const createCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //Funcion que elimina una Cita por su ID:
  const deleteCita = (id) => {
    const newCitas = citas.filter((cita) => cita.id !== id);
    setCitas(newCitas);
  };

  //Mensaje Condicional
  const title =
    citas.length === 0 ? "no appointments added" : "Manage your appointments";

  return (
    <>
      <h1>Patient Administration</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
