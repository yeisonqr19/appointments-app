import React, { useState } from "react";

const Form = () => {
  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    dateDischarge: "",
    time: "",
    symptoms: "",
  });

  //Funcion que se ejecutara al detectar cambios en los inputs
  const updateState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Destructuring al State:
  const { pet, owner, dateDischarge, time, symptoms } = cita;

  return (
    <>
      <h2>create an appointment </h2>
      <form>
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
