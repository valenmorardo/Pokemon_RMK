import React from "react";

const FiltersActive = ({ filtros, orden }) => {

  return (
    <div>
      {filtros.types ? (
        <div>
          <h4> TIPO: {filtros.types}</h4>
        </div>
      ) : null}

      {orden.Defensa || orden.Ataque || orden.Vida || orden.Velocidad ? (
        <div>
          <h4>
            Orden:{" "}
            {orden.Defensa
              ? `Defensa de ${orden.Defensa.toLowerCase()}`
              : orden.Ataque
              ? `Ataque de ${orden.Ataque.toLowerCase()}`
              : orden.Vida
              ? `Vida de ${orden.Vida.toLowerCase()}`
              : orden.Velocidad
              ? `Velociad de ${orden.Velocidad.toLowerCase()}`
              : null}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export default FiltersActive;
