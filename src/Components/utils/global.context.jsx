import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favorites")) || [];
const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [odontologo, setOdontologo] = useState([]);
  const [favorites, setFavorites] = useState(lsFavs);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setOdontologo(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ContextGlobal.Provider value={{ odontologo, favorites, setFavorites }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
