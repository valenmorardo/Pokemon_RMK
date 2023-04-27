import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones } from "../../../redux/actions/index";
import { searchPokemon } from "../../../redux/actions/index";

import s from "./SearchBar.module.css";

const SearchBar = ({ setPagina }) => {
  const dispatch = useDispatch();

  const [namePokemon, setNamePokemon] = useState("");
  const [errores, setErrores] = useState({});

  const search = useSelector((state) => state.search);

  const handleInput = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("inputSearch").value;

    if (!input) {
      setErrores({ error: "Enter the name of the Pokémon before searching" });
    } else if (input) {
      setErrores({});
      setPagina(1);
      dispatch(getPokemones(namePokemon));
      dispatch(searchPokemon(namePokemon));
      setNamePokemon("");
      document.getElementById("inputSearch").value = "";
    }
  };

  const handleShowAll = () => {
    setErrores({});
    setPagina(1);
    dispatch(getPokemones());
    dispatch(searchPokemon());
  };

  return (
    <div className={s.container}>
      <form className={s.form}>
        <input
          type="text"
          required
          placeholder="Name..."
          onChange={(e) => handleInput(e)}
          id="inputSearch"
          className={s.textBox}
        ></input>

        <input
          type="submit"
          value="SEARCH"
          onClick={(e) => handleSubmit(e)}
          className={s.button}
        ></input>
      </form>

      {errores.error? (
        <div className={s.error}>
          <span>{errores.error}</span>
        </div>
      ) : null}

      {search ? (
        <div className={s.divShowAll}>
          <h4>Recent search: "<span> {search.toUpperCase()}</span>"</h4>
          <button onClick={handleShowAll}>Show ALL</button>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
