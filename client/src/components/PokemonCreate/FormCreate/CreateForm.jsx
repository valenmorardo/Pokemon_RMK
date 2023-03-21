import React, { useEffect } from "react";
import CardsForm from "../CardsForm/CardsForm";
import { getTypes, getPokemones } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CardTypes from "../CardsForm/CardTypes";
import { postPokemon } from "../../../redux/actions";

const CreateForm = () => {
  const dispatch = useDispatch();

  const propiedades = [
    "Name",
    "Life",
    "Attack",
    "Defense",
    "Speed",
    "Weight",
    "Height",
    "Types",
    "Images",
  ];
  const allTypes = useSelector((state) => state.types);
  const allPokemones = useSelector((state) => state.allPokemones);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [newPokemon, setNewPokemon] = useState({});

  const handleSelectTypes = (e) => {
    setSelectedTypes([...selectedTypes, e.target.value]);
  };

  function handleChangeNewPokemon(e) {
    //handler de los inputs y el select
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmit(e) {
    dispatch(postPokemon(newPokemon));
  }




  useEffect(() => {
    setNewPokemon({...newPokemon, Types:selectedTypes })
  }, [selectedTypes])

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemones());
  }, [dispatch]);

  
  return (
    <div>
      <h1>Crea tu pokemon</h1>
      <form>
        <CardsForm
          propiedades={propiedades}
          allTypes={allTypes}
          handleChangeNewPokemon={handleChangeNewPokemon}
          handleSelectTypes={handleSelectTypes}
          selectedTypes={selectedTypes}
        />

        {selectedTypes.length > 0 ? (
          <CardTypes
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        ) : (
          <></>
        )}

        <button onClick={(e) => handleSubmit(e)}>Crear</button>
      </form>
    </div>
  );
};

export default CreateForm;
