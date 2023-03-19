import axios from "axios";
import filter from "../../Utils/filter";
import orden from "../../Utils/orden";

const getPokemones = (payload) => {
  return async (dispatch) => {
    try {
      const allPokemones = await axios("http://localhost:3001/getPokemones", {
        params: {
          name: payload,
        },
      });

      return dispatch({
        type: "GET_POKEMONES",
        payload: allPokemones.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR_MENSAJE",
        payload: error.response,
      });
    }
  };
};

const searchPokemon = (pokemonName) => {
  return async (dispatch) => {
    return dispatch({
      type: "SEARCH",
      payload: pokemonName,
    });
  }

};

const getPokemonByID = (payload) => {
  return async (dispatch) => {
    try {
      const pokemonDetail = await axios(
        `http://localhost:3001/getPokemonByID/${payload}`
      );
      return dispatch({
        type: "GET_POKEMON_BY_ID",
        payload: pokemonDetail.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR_MENSAJE",
        payload: error.response,
      });
    }
  };
};

const getTypes = (payload) => {
  return async (dispatch) => {
    try {
      let json = await axios.get("http://localhost:3001/getTypes");
      let tipos = json.data;
      return dispatch({
        type: "GET_TYPES",
        payload: tipos,
      });
    } catch (error) {}
  };
};

const filterPokemones = (payload) => {
  const functionFilter = (pokemones) => {
    const filteredPokemones = filter(payload.filtros, pokemones);
    return orden(payload.orden, filteredPokemones);
  };
  return {
    type: "FILTER",
    payload: {
      filter: functionFilter,
      filtros: payload.filtros,
      orden: payload.orden,
    },
  };
};

export {
  getPokemones,
  getPokemonByID,
  getTypes,
  filterPokemones,
  searchPokemon,
};
