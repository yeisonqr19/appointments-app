import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <>
      <h1>Patient Administration</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <p>2</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
