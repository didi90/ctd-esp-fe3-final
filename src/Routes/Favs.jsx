import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favorites } = useContextGlobal();

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            fav={fav}
            id={fav.id}
            // En Favs, todo está deshabilitado
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
