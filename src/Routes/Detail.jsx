import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams(); // Extraemos el id de la URL
  const [odontologo, setOdontologo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los datos del odontólogo basado en el id
    const fetchOdontologo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setOdontologo(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOdontologo();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <h1>Detail Dentist {odontologo.id} </h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table class="odontologo-info">
        <tr>
          <td>
            <strong>Nombre:</strong>
          </td>
          <td>{odontologo.name}</td>
        </tr>
        <tr>
          <td>
            <strong>Username:</strong>
          </td>
          <td>{odontologo.username}</td>
        </tr>
        <tr>
          <td>
            <strong>Email:</strong>
          </td>
          <td>{odontologo.email}</td>
        </tr>
        <tr>
          <td>
            <strong>Teléfono:</strong>
          </td>
          <td>{odontologo.phone}</td>
        </tr>
        <tr>
          <td>
            <strong>Sitio Web:</strong>
          </td>
          <td>{odontologo.website}</td>
        </tr>
      </table>
    </>
  );
};

export default Detail;
