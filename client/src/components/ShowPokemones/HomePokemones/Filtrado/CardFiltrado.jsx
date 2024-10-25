import React from "react";

import { useEffect, useState } from "react";

import s from "./CardFiltrado.module.css";

const CardFiltrado = ({ options, titulo, handler, propiedad }) => {
  const [filtro, setFiltro] = useState("");

  function handleOnChange(value) {
    setFiltro(value);
    handler(value);

    setFiltro("default");
  }

  useEffect(() => {
    setFiltro("default"); // Restablecer el valor seleccionado
  }, []);

  return (
    <select
      id={propiedad}
      value={filtro}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      className={s.select}
    >
      <option disabled selected value="default">
        {titulo}
      </option>
      {options?.map((e) => (
        <option value={e.name ? e.name : e}>
          {e.name ? e.name.toUpperCase() : e.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default CardFiltrado;
