import React from "react";
import CardForm from "./CardForm";

const CardsForm = ({ propiedades, allTypes, handleChangeNewPokemon, handleSelectTypes, selectedTypes }) => {

  return (
    <div>
      {propiedades.map((prop) => (
        <CardForm propiedad={prop}  allTypes={allTypes} handleChangeNewPokemon={handleChangeNewPokemon} handleSelectTypes={handleSelectTypes} selectedTypes={selectedTypes}/>
      ))}
    </div>
  );
};

export default CardsForm;
