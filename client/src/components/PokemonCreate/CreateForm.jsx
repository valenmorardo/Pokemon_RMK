import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTypes, getPokemones } from "../../redux/actions";
import { postPokemonAction } from "../../redux/actions";

import { Link, useNavigate } from "react-router-dom";

import CardForm from "./CardForm";
import CardSelectedTypes from "./CardSelectedTypes";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allTypes = useSelector((state) => state.types);
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

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [newPokemon, setNewPokemon] = useState({});

  function handleChangeNewPokemon(e) {
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    });
  }

  const handleSelectTypes = (e) => {
    setSelectedTypes([...selectedTypes, e.target.value]);
  };

  useEffect(() => {
    setNewPokemon({ ...newPokemon, Types: selectedTypes });
  }, [selectedTypes]);
  
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const postPokemon = useSelector((state) => state.postPokemon);
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemonAction(newPokemon));
  };

  useEffect(() => {
    if (postPokemon.created) {
      alert("pokemon creado");
      setNewPokemon({});
      setSelectedTypes({})
      navigate("/home");
    } else {
      setErrores(postPokemon.errores || {});
    }
  }, [postPokemon]);

  

  return (
    <div>
      <div>
        <div>
          <h1>Crea tu pokemon!</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            {propiedades.map((e) => (
              <CardForm
                propiedad={e}
                allTypes={allTypes}
                handleChangeNewPokemon={handleChangeNewPokemon}
                handleSelectTypes={handleSelectTypes}
                selectedTypes={selectedTypes}
                errores={errores}
              />
            ))}
            {selectedTypes.length > 0 ? (
              <CardSelectedTypes
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
              />
            ) : null}

            <button
              type="submit"
              disabled={
                !(
                  Object.values(newPokemon).length === 9 &&
                  selectedTypes.length > 0
                )
                  ? true
                  : false
              }
              onClick={(e) => handleSubmit(e)}
            >
              CREAR
            </button>
          </form>
        </div>

        {Object.values(errores).length ? (
          <div>
            {Object.entries(errores).map(([key, value]) => {
              return <h3 key={key}>{value.message}</h3>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreateForm;
