import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../../redux/actions";
import { getPokemones } from "../../../redux/actions";
import CardFiltrado from "./CardFiltrado";
import { filterPokemones } from "../../../redux/actions";

import FiltersActive from "./FiltersActive";

const Filtrado = () => {
  const dispatch = useDispatch();

  //me traigo para tener siempre todos los pokemones que se muestran en el home
  const pokemonesHome = useSelector((state) => state.pokemonesHome);

  //aca hago me traigo los estados del reducer de los filtros y orden
  const filtrosReducer = useSelector((state) => state.filtros);
  const ordenReducer = useSelector((state) => state.orden);

  //aca creo estados locales para guardarme los filtros y ordenes q se apliquen para luego despacharlos a reducer
  const [filtros, setFiltros] = useState(filtrosReducer);
  const [orden, setOrden] = useState(ordenReducer);

  //aca tengo todas las opciones para filtrar y ordenar

  const [orderBy_Active, setOrderBy_Active] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const orderByOptions = ["Defensa", "Ataque", "Velocidad", "Vida", "ALPHA"];

  const options = ["Menor a mayor", "Mayor a menor"];

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const types = useSelector((state) => state.types);

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
      filterPokemones({
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
    dispatch(getPokemones());
    setOrderBy_Active(false);
    setFiltros({});
    setOrden({});
  }

  useEffect(() => {
    if (
      !(Object.keys(filtrosReducer).length || Object.keys(ordenReducer).length)
    ) {
      setFiltros({});
      setOrden({});
    }
  }, [filtrosReducer, ordenReducer]);

  return (
    <div>
      <h1>FILTROS</h1>

      <div>
        <CardFiltrado
          options={types}
          titulo="filtrar por tipos"
          handler={handlerFilter("types")}
          propiedad={"types"}
        />

        <CardFiltrado
          options={orderByOptions}
          titulo="Ordenar by"
          handler={handlerSelect}
          propiedad={"orderBy"}
        />

        {orderBy && orderBy_Active ? (
          <CardFiltrado
            options={options}
            titulo={`Ordenar por ${orderBy}`}
            handler={handlerOrden(orderBy)}
            propiedad={orderBy}
          />
        ) : (
          <></>
        )}

        {Object.values(filtros).length || Object.values(orden).length ? (
          <div>
            <FiltersActive filtros={filtros} orden={orden} />
            <button onClick={resetFilters}>Reiniciar parametros</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filtrado;
