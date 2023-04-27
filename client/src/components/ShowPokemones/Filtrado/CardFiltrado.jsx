import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardFiltrado = ({ options, titulo, handler, propiedad}) => {
  const filtros = useSelector((state) => state.filtros);
  const orden = useSelector((state) => state.orden);
  const busqueda = useSelector((state) => state.search);

  

    function cleanSelect(propiedad) {
      document
        .getElementById(propiedad)
        .options.item("defaultValue").selected = true;
  }

   useEffect(() => {
    if (Object.values(filtros).length) {
      cleanSelect(propiedad);
    }
    if (Object.values(orden).length) {
      cleanSelect(propiedad)
    }
  }, [filtros, orden]);

  return (
    <div>
        <select
        id={propiedad}
          onChange={(e) => {
            handler(e.target.value);
          }}
        >
          <option disabled selected value="defaultValue">
            {titulo}
          </option>
          {options.map((e) => (
            <option value={e.name ? e.name : e}>{e.name ? e.name : e}</option>
          ))}
        </select>
    </div>
  );
};

export default CardFiltrado;
