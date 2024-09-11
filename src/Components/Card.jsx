import { Link } from "react-router-dom";
import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologo }) => {
  const { setFavorites } = useContextGlobal();

  const addFav = () => {
    setFavorites((favorites) => [...favorites, odontologo]);
  };

  return (
    <div className="card">
      <Link to={"/detail/" + odontologo.id}>
        <img
          src="./images/doctor.jpg"
          alt="odontologo"
          width={150}
          height={200}
        />
        <p>Nombre: {odontologo.name}</p>
        <p>UserName: {odontologo.username}</p>
        <p>ID: {odontologo.id}</p>
      </Link>
      {/* Deshabilitar el botón si la prop 'disabled' es true */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
