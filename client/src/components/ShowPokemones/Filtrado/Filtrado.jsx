import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../../redux/actions";
import { getPokemones } from "../../../redux/actions";
import CardFiltrado from "./CardFiltrado";
import { filterPokemones } from "../../../redux/actions";

const Filtrado = () => {
  const dispatch = useDispatch();

  const filtrosReducer = useSelector((state) => state.filtros);
  const ordenReducer = useSelector((state) => state.orden);

  const [filtros, setFiltros] = useState(filtrosReducer);
  const [orden, setOrden] = useState(ordenReducer);

  const orderAttack = ["Menor a mayor", "Mayor a menor"];

  const types = useSelector((state) => state.types);

  function handlerFilter(propiedad) {
    return (valor) => {
      setFiltros({ ...filtros, [propiedad]: valor });
    };
  }
  function handlerOrden(propiedad) {
    return (valor) => {
      setOrden({ ...orden, [propiedad]: valor });
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

  function resetFilters() {
    dispatch(getPokemones());
    setFiltros({});
    setOrden({});
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(filtros).length || Object.keys(orden).length) {
      setFilters();
    }
  }, [filtros, orden]);

  useEffect(() => {
    if (
      !(Object.keys(filtrosReducer).length || Object.keys(ordenReducer).length)
    ) {
      setFiltros({});
      setOrden({});
    }
  }, [filtrosReducer, ordenReducer]);


  return (
    <>
      <h1>FILTROS</h1>

      <div>

        <CardFiltrado
        options={types}
        titulo='filtrar por tipos'
        handler={handlerFilter('types')}
        propiedad={"types"}
        />

        <CardFiltrado
        options={orderAttack}
        titulo="Ordenar por ataque"
        handler={handlerOrden("orderAttack")}
        propiedad = {'orden'}
        />

      </div>

    </>
  );
};

export default Filtrado;
