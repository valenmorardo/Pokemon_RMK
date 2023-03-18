import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardFiltrado = ({ options, titulo, handler, propiedad }) => {
  return (
    <div>
      {propiedad === "types" ? (
        <select
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
