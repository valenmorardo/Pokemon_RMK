import React, { useEffect } from "react";
import CardsForm from "../CardsForm/CardsForm";
import { getTypes, getPokemones } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CardTypes from "../CardsForm/CardTypes";
import { postPokemon } from "../../../redux/actions";
import validacion from "./validaciones";
import { Link, useNavigate } from "react-router-dom";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [errores, setErrores] = useState({});

  const handleSelectTypes = (e) => {
    setSelectedTypes([...selectedTypes, e.target.value]);
  };

  function handleChangeNewPokemon(e) {
    //handler de los inputs y el select
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    });

    setErrores(
      validacion({
        ...newPokemon,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    let validarName = allPokemones.find((e) => e.Name === newPokemon.Name);

    if (validarName) {
      alert("Ya existe ese pokemon con ese nombre");
    } else if (
      Object.values(newPokemon).length === 9 &&
      Object.values(errores).length === 0 &&
      newPokemon.Name &&
      newPokemon.Life &&
      newPokemon.Attack &&
      newPokemon.Defense &&
      newPokemon.Speed &&
      newPokemon.Weight &&
      newPokemon.Height &&
      newPokemon.Images 
    ) {
      if (selectedTypes.length > 0) {
        dispatch(postPokemon(newPokemon));
        setNewPokemon({});
        alert("Pokemon Creado");
        navigate("/home");
      } else {
        alert("Seleccione al menos 1 tipo");
      }
    } else {
      alert("alguno de los campos es incorrecto o esta incompleto");
    }
  }

  useEffect(() => {
    setNewPokemon({ ...newPokemon, Types: selectedTypes });
  }, [selectedTypes]);

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
          errores={errores}
        />

        {selectedTypes.length > 0 ? (
          <CardTypes
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        ) : (
          <></>
        )}

        {Object.values(newPokemon).length === 9 && selectedTypes.length > 0 ? (
          <button onClick={(e) => handleSubmit(e)}>Crear</button>
        ) : (
          <button disabled onClick={(e) => handleSubmit(e)}>
            Crear
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateForm;
