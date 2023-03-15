import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemones } from "../../../redux/actions/index";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";

const HomePokemones = () => {
  const dispatch = useDispatch();
  const allPokemones = useSelector((state) => state.pokemonesHome); // traigo todos los pokemones del reducer

  //PAGINADO
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);
  const maximo = allPokemones.length / porPagina;
  const currentsPokemones = allPokemones.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );
  //---------------------------------------

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

  return (
    <div>
      <Cards pokemones={currentsPokemones} />
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default HomePokemones;
