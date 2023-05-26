import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardFiltrado from "./CardFiltrado";

import {
  getFilteredPokemonesAction,
  getPokemonesAction,
  getTypesAction,
} from "../../../../redux/actions/index";

import FiltersActive from "./FiltersActive";

import s from "./Filtrado.module.css";

const Filtrado = () => {
  const dispatch = useDispatch();

  //me traigo los pokemones para acceder al name searched para no renderizar el reset parameters de abajo cuando se busque algo
  const search = useSelector((state) => state.search);

  //aca creo estados locales para guardarme los filtros y ordenes q se apliquen para luego despacharlos a reducer
  const [filtros, setFiltros] = useState({});
  const [orden, setOrden] = useState({});

  //aca tengo todas las opciones para filtrar y ordenar

  const [orderBy_Active, setOrderBy_Active] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const orderByOptions = ["Defense", "Attack", "Speed", "Life"];

  const options = ["asc", "desc"];

  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);

  const types = useSelector((state) => state.types?.types);

  function handlerSelect(e) {
    setOrderBy_Active(true);
    setOrderBy(e);
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  //apartado manejadores de filtros y orden, y seteo de los mismos
  function handlerFilter(propiedad) {
    return (valor) => {
      setFiltros({ [propiedad]: valor });
    };
  }
  function handlerOrden(propiedad) {
    return (valor) => {
      setOrden({ [propiedad]: valor });
    };
  }
  function setFilters() {
    dispatch(
      getFilteredPokemonesAction({
        filtros,
        orden,
      })
    );
  }
  useEffect(() => {
    if (Object.keys(filtros).length || Object.keys(orden).length) {
      setFilters();
    }
  }, [filtros, orden]);

  //apartado reset filters
  function resetFilters() {
    dispatch(getPokemonesAction());
    setOrderBy_Active(false);
    setFiltros({});
    setOrden({});
  }

  useEffect(() => {
    setOrderBy_Active(false);
    setFiltros({});
    setOrden({});
  }, [search]);

  return (
    <div className={s.mainContainer}>
      <div className={s.cardsContainer}>
        {!search ? (
          <>
            <div>
              <CardFiltrado
                options={types}
                titulo="Filter by TYPES"
                handler={handlerFilter("Types")}
                propiedad={"Types"}
              />
            </div>

            <div>
              <CardFiltrado
                options={orderByOptions}
                titulo="Sort by"
                handler={handlerSelect}
                propiedad={"orderBy"}
              />
            </div>
            {orderBy && orderBy_Active ? (
              <div>
                <CardFiltrado
                  options={options}
                  titulo={`Sort by ${orderBy}`}
                  handler={handlerOrden(orderBy)}
                  propiedad={orderBy}
                />
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      {(Object.values(filtros).length && !search) ||
      (Object.values(orden).length && !search) ? (
        <div className={s.divFiltersActive}>
          <FiltersActive filtros={filtros} orden={orden} />
          <button onClick={resetFilters}>RESET PARAMETERS</button>
        </div>
      ) : null}
    </div>
  );
};

export default Filtrado;
