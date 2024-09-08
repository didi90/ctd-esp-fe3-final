import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Components/utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
<nav className="navbar">
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Fav</h4>
      </Link>
      <Link to={routes.detail}>
        <h4>Detail</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
    </nav>
  );
};
export default Navbar;