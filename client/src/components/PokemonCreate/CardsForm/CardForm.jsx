import React, { useEffect } from "react";
import { getTypes, getPokemones } from "../../../redux/actions";
import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";

const CardForm = ({ propiedad, allTypes, handleChangeNewPokemon, handleSelectTypes, selectedTypes }) => {


 

  const handleSelect = (e) => {
    e.preventDefault();
    handleSelectTypes(e);
  }

 
  
  return (
    <div>
      {propiedad !== "Types" ? (
        <div>
          <label>{propiedad}: </label>
          <input
            type={propiedad === "Name" || "Images"? 'text' : 'number'}
            placeholder={`${propiedad} ...`}
            name={propiedad}
            onChange={(e) => handleChangeNewPokemon(e)}
          ></input>
        </div>

      ) : selectedTypes.length !== 2? (
        <div>
        <select id="select" onChange={(e) => handleSelect(e)}>
          <option disabled selected value="defaultValue"> Seleccionar los {propiedad}</option>
          {
            allTypes.map((type) => (<option id={type.name} value={type.name} name={type.name}>{type.name}</option>))
          }
        </select>
      </div>

      ) :
      <></>
      }
    </div>
  );
};

export default CardForm;