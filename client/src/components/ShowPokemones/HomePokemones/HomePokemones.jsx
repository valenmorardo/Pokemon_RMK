import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//actions
import { getPokemonesAction, getTypesAction } from "../../../redux/actions";

//components
import Cards from "./Cards/Cards";
import LoadingForPages from "../../Loading/LoadingForPages";
import Paginado from "./Paginado/Paginado";
import Searchbar from "./Searchbar/Searchbar";
import Filtrado from "./Filtrado/Filtrado";

const HomePokemones = () => {
  const dispatch = useDispatch();

  //objeto devuelto por axios con el response y los pokemones
  const PokemonesDATA = useSelector((state) => state.pokemones);
  const pokemones = PokemonesDATA.pokemones;

  //paginacion --------------------------------------
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const maximo = pokemones?.length / porPagina;
  const currentsPokemones = pokemones?.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );
  //-------------------------------------------------

  useEffect(() => {
    dispatch(getPokemonesAction());
    dispatch(getTypesAction());
  }, [dispatch]);


  return (
    <div>
      {PokemonesDATA && !Object.keys(PokemonesDATA).length ? (
        <LoadingForPages />
      ) : pokemones && pokemones.length ? (
        <div>
          <div>
            <h1>pokedex</h1>
          </div>
          <div>
            <Searchbar setPagina={setPagina} />
            <Filtrado />
            <Cards pokemones={currentsPokemones} />
            <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
          </div>
        </div>
      ) : pokemones && !pokemones.length && PokemonesDATA.response ? (
        <div>
          <div>
            <h1>pokedex</h1>
          </div>
          <Searchbar setPagina={setPagina} />
          <div>
            <h1>No se encontraron pokemones</h1>
          </div>
        </div>
      ) : pokemones && !pokemones.length && !PokemonesDATA.response ? (
        <div>
          <div>
            <h1>pokedex</h1>
          </div>
          <div>
            <h1>Ocurrio un error!</h1>
            <h3>Actualizar la pagina o probar mas tarde</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomePokemones;
