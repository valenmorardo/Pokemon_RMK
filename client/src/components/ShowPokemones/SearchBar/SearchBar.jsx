import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones } from "../../../redux/actions/index";
import { searchPokemon } from "../../../redux/actions/index";

const SearchBar = ({setPagina}) => {
  const dispatch = useDispatch();

  const [namePokemon, setNamePokemon] = useState("");
  const [errores, setErrores] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("inputSearch").value;

    if (!input) {
      setErrores({ error: "Escriba el nombre del pokemon antes de buscar" });
    } else if (input) {
      setErrores({});
      setPagina(1)
      dispatch(getPokemones(namePokemon));
      dispatch(searchPokemon(namePokemon));
      setNamePokemon("");
      document.getElementById("inputSearch").value = "";
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Nombre del pokemon..."
          onChange={(e) => handleInput(e)}
          id="inputSearch"
        ></input>
        <span>{errores.error}</span>

        <input
          type="submit"
          value="buscar"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
