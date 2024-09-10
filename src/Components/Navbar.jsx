import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Components/utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="contenedor">
        <Link to={routes.home}>
          <img src="./images/logodental.jpg" alt="" width={100} height={80} />
        </Link>
        <nav className="navbar">
          <Link to={routes.home}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.favs}>
            <h4>Fav</h4>
          </Link>
          <Link to={routes.contact}>
            <h4>Contact</h4>
          </Link>
          <img src="./images/darkmode.jpg" alt="" width={50} height={50} />
        </nav>
      </div>
    </>
  );
};
export default Navbar;
