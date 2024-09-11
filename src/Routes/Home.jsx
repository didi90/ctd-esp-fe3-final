import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { odontologo } = useContextGlobal();
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {odontologo.map((odontologo) => (
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            odontologo={odontologo}
            // En Home, todo está habilitado
          />
        ))}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
