import axios from "axios";

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

export { getPokemones, getPokemonByID };
