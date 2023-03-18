import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardFiltrado = ({ options, titulo, handler, propiedad }) => {

  const filtros = useSelector((state) => state.filtros);
  const orden = useSelector((state) => state.orden);
  const busqueda = useSelector((state) => state.search);

  function cleanSelect(propiedad) {
    if (propiedad === "types") {
      document
        .getElementById("types")
        .options.item("defaultValue").selected = true;
    }
    if (propiedad === "orden") {
      document
        .getElementById("orden")
        .options.item("defaultValue").selected = true;
    }
  }

  useEffect(() => {
    if (Object.values(filtros).length === 0) {
      cleanSelect(propiedad);
    }
    if (Object.values(orden).length === 0) {
      if (propiedad === "orden") {
        document
          .getElementById("orden")
          .options.item("defaultValue").selected = true;
      }
    }
  }, [filtros, orden]);


  return (
    <div>
      {propiedad === "types" ? (
        <select
        id="types"
          onChange={(e) => {
            handler(e.target.value);
          }}
        >
          <option disabled selected value="defaultValue">
            {titulo}
          </option>
          {options.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </select>
      ) : propiedad === "orden" ? (
        <select
        id="orden"
          onChange={(e) => {
            handler(e.target.value);
          }}
        >
          <option disabled selected value="defaultValue">
            {titulo}
          </option>
          {options.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardFiltrado;
