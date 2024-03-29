import React from "react";

import s from "./CardForm.module.css";

const CardForm = ({
  propiedad,
  allTypes,
  handleChangeNewPokemon,
  handleSelectTypes,
  selectedTypes,
  errores,
}) => {
  return (
    <>
      {propiedad !== "Types" ? (
        <div className={s.inputContainer}>
          <label>{propiedad}: </label>
          <input
            type={
              propiedad === "Name" || propiedad === "Image" ? "text" : "number"
            }
            required
            placeholder={`${propiedad} ...`}
            name={propiedad}
            onChange={(e) => handleChangeNewPokemon(e)}
          />
        </div>
      ) : selectedTypes.length !== 2 ? (
        <div className={s.selectContainer}>
          <label>Types:</label>
          <select name={propiedad} onChange={(e) => handleSelectTypes(e)}>
            <option disabled selected value="defaultValue">
              {" "}
              Select the {propiedad}
            </option>
            {allTypes?.map((type) => (
              <option id={type.name} value={type.name} name={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </>
  );
};

export default CardForm;
