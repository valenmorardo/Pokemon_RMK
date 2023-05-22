import React from "react";

import s from './FiltersActive.module.css'
const FiltersActive = ({ filtros, orden }) => {

  console.log(filtros)
  console.log(orden)

  return (
    <div className={s.container}>
      {filtros.Types ? (
        <div>
          <h4> TYPE: "<span>{filtros.Types?.toUpperCase()}</span>"</h4>
        </div>
      ) : null}

      {orden.Defense || orden.Attack || orden.Life || orden.Speed ? (
        <div>
          <h4>
            Sort:{" "}
            {orden.Defense
              ? <span>DEFENSE - {orden.Defense.toUpperCase()}</span>
              : orden.Attack
              ?  <span>ATTACK - {orden.Attack.toUpperCase()}</span>
              : orden.Life
              ? <span>LIFE - {orden.Life.toUpperCase()}</span>
              : orden.Speed
              ? <span>SPEED - {orden.Speed.toUpperCase()}</span>
              : null}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export default FiltersActive;
