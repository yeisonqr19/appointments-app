import React from "react";

const Form = () => {
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
        />

        <label>owner's name</label>
        <input
          type="text"
          name="owner"
          placeholder="owner's name"
          className="u-full-width"
        />

        <label>discharge date</label>
        <input type="date" name="dateDischarge" className="u-full-width" />

        <label>time</label>
        <input type="time" name="time" className="u-full-width" />

        <label>symptoms</label>
        <textarea name="symptoms" className="u-full-width"></textarea>

        <button type="submit" className="u-full-width button-primary">
          add appointment
        </button>
      </form>
    </>
  );
};

export default Form;
