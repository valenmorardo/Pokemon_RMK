import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemones } from "../../../redux/actions/index";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import Filtrado from "../Filtrado/Filtrado";

import LoadingForPages from "../../Loading/LoadingForPages";

import pikachuSad from '../../../assets/home/pikachuSad.gif'

import s from "./HomePokemones.module.css";

const HomePokemones = () => {
  const dispatch = useDispatch();
  const allPokemones = useSelector((state) => state.pokemonesHome); // traigo todos los pokemones del reducer
  const error = useSelector((state) => state.mensajeErr);

  //eso es para que el use effect este mirando siempre al orden del reducer por si cambia
  //depende los cambios q se hagan en ese estado, el estado local (orden) va ir cambiando entre true y false
  // para q el array de los pokemones (allPokemones) se renderize nuevamente con los pokemones ordenados
  const ordenReducer = useSelector((state) => state.orden);
  const [orden, setOrden] = useState(false);
  useEffect(() => {
    setOrden(!orden);
  }, [ordenReducer]);

  //PAGINADO
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const maximo = allPokemones.length / porPagina;
  const currentsPokemones = allPokemones.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );
  //---------------------------------------

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

  console.log(allPokemones);

  return (
    <div className={s.background}>
      {Object.keys(error).length ? (
        <div className={s.mainContainer}>
          <div className={s.divBtn}>
            <Link to="/home">
              <button>GO BACK</button>
            </Link>
          </div>

          <div className={s.divTitle}>
            <h1 className={s.title}>PokeDex</h1>
          </div>

          <div className={s.divSearch}>
            <SearchBar setPagina={setPagina} />
          </div>
          <div className={s.noPokemones}>
            <h1>No se encontraron pokemones :c </h1>
            <img src={pikachuSad} />
          </div>
          
        </div>
      ) : allPokemones.length ? (
        <div className={s.mainContainer}>
          <div className={s.divBtn}>
            <Link to="/home">
              <button>GO BACK</button>
            </Link>
          </div>

          <div className={s.divTitle}>
            <h1 className={s.title}>PokeDex</h1>
          </div>

          <div className={s.divSearch}>
            <SearchBar setPagina={setPagina} />
          </div>

          <div className={s.divFiltrado}>
            <Filtrado />
          </div>

          <div className={s.divCards}>
            <Cards pokemones={currentsPokemones} />
          </div>

          <div className={s.divPaginado}>
            <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
          </div>
        </div>
      ) : (
        <LoadingForPages />
      )}
    </div>
  );
};

export default HomePokemones;
