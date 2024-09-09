import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones OK
  const [nameUser, setNameUser] = useState("");
  const [mailUser, setMailUser] = useState("");
  const [flag, setFlag] = useState(null);

  const correoRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleButton = (e) => {
    if (
      nameUser.length > 5 &&
      nameUser.trim().length > 5 &&
      nameUser[0] !== " " &&
      correoRegex.test(mailUser)
    ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Bienvenido</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
        />
        <label>Correo electrónico</label>
        <input
          placeholder="Ingrese su correo electrónico"
          onChange={(e) => setMailUser(e.target.value)}
        />
        <button onClick={handleButton}>Enviar</button>
      </form>

      {flag == true && (
        <h2>Gracias {nameUser}, te contactaremos cuanto antes vía email</h2>
      )}
      {flag == false && (
        <p style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </p>
      )}
    </div>
  );
};

export default Form;
