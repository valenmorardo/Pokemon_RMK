import React from "react";

const CardForm = ({
  propiedad,
  allTypes,
  handleChangeNewPokemon,
  handleSelectTypes,
  selectedTypes,
  errores
}) => {
  
  
  console.log(allTypes)
 
  return (
    <div>
      {propiedad !== "Types" ? (
        <div>
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
        <div>
          <select name={propiedad} onChange={(e) => handleSelectTypes(e)}>
            <option disabled selected value="defaultValue">
              {" "}
              Seleccionar los {propiedad}
            </option>
            {allTypes?.map((type) => (
              <option id={type.name} value={type.name} name={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default CardForm;
