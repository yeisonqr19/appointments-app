import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createCita }) => {
  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    dateDischarge: "",
    time: "",
    symptoms: "",
  });

  //State Para Manerar Errores
  const [error, setError] = useState(false);

  //Funcion que se ejecutara al detectar cambios en los inputs
  const updateState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Destructuring al State:
  const { pet, owner, dateDischarge, time, symptoms } = cita;

  //Cuando el usuario Haga submit al Form
  const submitCita = (e) => {
    e.preventDefault();
    //Validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      dateDischarge.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Limpiar el mensaje de error una ves superada la validacion
    setError(false);

    //Asignar ID
    cita.id = uuidv4();

    //Crear la cita
    createCita(cita);

    //Reiniciar el Form
    setCita({
      pet: "",
      owner: "",
      dateDischarge: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <>
      <h2>create an appointment </h2>

      {error && <p className="alerta-error">All fields are required</p>}

      <form onSubmit={submitCita}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="pet Name"
          onChange={updateState}
          value={pet}
        />

        <label>owner's name</label>
        <input
          type="text"
          name="owner"
          placeholder="owner's name"
          className="u-full-width"
          onChange={updateState}
          value={owner}
        />

        <label>discharge date</label>
        <input
          type="date"
          name="dateDischarge"
          className="u-full-width"
          onChange={updateState}
          value={dateDischarge}
        />

        <label>time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />

        <label>symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={updateState}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          add appointment
        </button>
      </form>
    </>
  );
};

export default Form;
