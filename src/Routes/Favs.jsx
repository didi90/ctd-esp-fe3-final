import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar los favoritos desde el localStorage cuando el componente se monte
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedFavs);
  }, []);

  const resetFavs = () => {
    // Borrar favoritos del localStorage
    localStorage.removeItem("favorites");

    // Actualizar el estado
    setFavorites([]);

    alert("Favoritos reiniciados");
  };

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <button onClick={resetFavs} className="resetButton">
        Resetear Favoritos
      </button>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <Card preventdefault
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
