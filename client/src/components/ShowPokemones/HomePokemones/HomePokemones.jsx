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

import s from "./HomePokemones.module.css";

import pikachuSad from "../../../assets/home/pikachuSad.gif";

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
    <div className={s.background}>
      {!(PokemonesDATA && !Object.keys(PokemonesDATA).length) ? (
        <div>
          <div className={s.divBtn}>
            <Link to="/home">
              <button>GO BACK</button>
            </Link>
          </div>

          <div className={s.divTitle}>
            <h1>Pokedex</h1>
          </div>
        </div>
      ) : null}

      {PokemonesDATA && !Object.keys(PokemonesDATA).length ? (
        <LoadingForPages />
      ) : PokemonesDATA.status === 200 ? (
        <div className={s.mainContainer}>
          <Searchbar setPagina={setPagina} />
          <Filtrado />
          <Cards pokemones={currentsPokemones} />
          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
      ) : /* pokemones && !pokemones.length && PokemonesDATA.response */ PokemonesDATA.status ===
        404 ? (
        <div className={s.mainContainer}>
          <Searchbar setPagina={setPagina} />
          <Filtrado />
          <div className={s.divNotFound}>
            <h1>No se encontraron pokemones</h1>
            <img src={pikachuSad} />
          </div>
        </div>
      ) : PokemonesDATA.status === 500 ? (
        <div className={s.mainContainer}>
          <div className={s.divError}>
            <h1>Ocurrio un error!</h1>
            <h3>Actualizar la pagina o intentar nuevamente mas tarde</h3>
            <img src={pikachuSad} />
          </div>
        </div>
      ) : (
        <div>
          <h1>ERROR</h1>
        </div>
      )}
    </div>
  );
};

export default HomePokemones;
