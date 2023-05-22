import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonesAction } from "../../../../redux/actions";

const Searchbar = ({ setPagina }) => {
  const dispatch = useDispatch();
  const searched = useSelector((state) => state.pokemones);

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Enter the name of the Pokémon before searching");
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setIsVisible(true);
    } else if (name) {
      dispatch(getPokemonesAction(name));
      setPagina(1);
      setError("");
      setName("");
      document.getElementById("inputSearch").value = "";
    }
  };

  const ShowAll = () => {
    dispatch(getPokemonesAction());
    setPagina(1);
    setError("");
    setName("");
  };

  
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            
            placeholder="Name of pokemon..."
            onChange={(e) => handleInput(e)}
            id="inputSearch"
          />

          <input
            type="submit"
            value="SEARCH"
            onClick={(e) => handleSubmit(e)}
          />
        </form>

        {error && isVisible ? (
          <div>
            <span>{error}</span>
          </div>
        ) : null}

          {searched && searched.nameSearched ? (
            <div>
              <h4>
                search results for: "
                <span>{searched.nameSearched.toUpperCase()}</span>"
              </h4>
              <button onClick={ShowAll}>Show ALL</button>
            </div>
          ) : null}

      </div>
    </div>
  );
};

export default Searchbar;
