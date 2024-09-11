import { Link } from "react-router-dom";
import React, { useState } from "react";
import { routes } from "../Components/utils/routes";

const Card = ({ name, username, id, disabled }) => {
  const [fav, setFav] = useState([]);

  const addFav = () => {
    if (disabled) return;  // Si está deshabilitado, no hacer nada

    // Obtener los favoritos actuales del localStorage
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verificar si el favorito ya existe por su id
    const isAlreadyFav = existingFavs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      // Si no existe, añadir el nuevo favorito
      const newFavs = [...existingFavs, { id, name, username }];

      // Guardar en localStorage
      localStorage.setItem("favorites", JSON.stringify(newFavs));

      // Actualizar el estado de favoritos
      setFav(newFavs);
      alert("Dentista agregado exitosamente");
    } else {
      alert("Este elemento ya está en favoritos");
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img
          src="./images/doctor.jpg"
          alt="odontologo"
          width={150}
          height={200}
        />
        <p>Nombre: {name}</p>
        <p>UserName: {username}</p>
        <p>ID: {id}</p>
      </Link>

      {/* Deshabilitar el botón si la prop 'disabled' es true */}
      <button onClick={addFav} className="favButton" disabled={disabled}>
        ⭐
      </button>
    </div>
  );
};

export default Card;
