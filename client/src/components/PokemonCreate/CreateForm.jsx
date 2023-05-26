import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTypesAction, postPokemonAction } from "../../redux/actions";

import { Link, useNavigate } from "react-router-dom";

import CardForm from "./CardForm";
import CardSelectedTypes from "./CardSelectedTypes";

import s from "./CreateForm.module.css";

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

    "Image",
    "Types",
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
    dispatch(getTypesAction());
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
      setSelectedTypes({});
      navigate("/home");
    } else {
      setErrores(postPokemon.errores || {});
    }
  }, [postPokemon]);

  return (
    <div className={s.background}>
      <div className={s.divBtn}>
        <Link to="/home">
          <button>GO BACK</button>
        </Link>
      </div>

      <div className={s.mainContainer}>
        <div className={s.divTitle}>
          <h1>Crea tu pokemon!</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit} className={s.formContainer}>
            {propiedades.map((e) => (
              <CardForm
                propiedad={e}
                allTypes={allTypes.types}
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
              className={s.buttonSubmit}
            >
              CREAR
            </button>
          </form>
        </div>

        {Object.values(errores).length ? (
          <div className={s.divErrores}>
            {Object.entries(errores).map(([key, value]) => {
              return (
                <h3 key={key} className={s.msjErr}>
                  {value.message}
                </h3>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreateForm;
