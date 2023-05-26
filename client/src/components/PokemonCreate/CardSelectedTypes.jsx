import React from "react";

import s from "./CardSelectedTypes.module.css";

const CardSelectedTypes = ({ selectedTypes, setSelectedTypes }) => {
  const removeType = (e) => {
    e.preventDefault();
    setSelectedTypes(selectedTypes.filter((type) => type !== e.target.name));
  };

  return (
    <div className={s.selectedTypesContainer}>
      {selectedTypes.map((type) => (
        <div className={s.card}>
          <button name={type} onClick={(e) => removeType(e)}>
            X
          </button>
          <span> {type.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CardSelectedTypes;
