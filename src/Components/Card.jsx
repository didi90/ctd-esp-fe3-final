import { useNavigate } from "react-router-dom";
import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const navigate = useNavigate();

  const handleCard = () => {
    navigate(`/detail/${id}`);
  };

  console.log(handleCard);

  return (
    <div className="card" onClick={handleCard}>
      <img
        src="./images/doctor.jpg"
        alt="odontologo"
        width="150"
        height={200}
      />
      <p>Nombre: {name}</p>
      <p>UserName: {username}</p>
      <p>ID: {id}</p>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
