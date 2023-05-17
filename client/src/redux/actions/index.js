import axios from "axios";
import filter from "../../Utils/filter";
import orden from "../../Utils/orden";

const getPokemonesAction = (payload) => {
  return async (dispatch) => {
    try {
      const allPokemones = await axios("http://localhost:3001/getPokemones");

      return dispatch({
        type: "GET_POKEMONES",
        payload: allPokemones.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_POKEMONES",
        payload: error.response,
      });
    }
  };
};

const searchPokemonAction = (pokemonName) => {
  return async (dispatch) => {
    try {
      const searchResult = await axios("http://localhost:3001/getPokemonByName", {
        params: { name: pokemonName }
      });

      return dispatch({
        type: "SEARCH",
        payload: searchResult.data
      })

    } catch (error) {
      return dispatch({
        type: "SEARCH",
        payload: error.response.data
      })
    }
  };
};

const getPokemonByIDAction = (payload) => {
  return async (dispatch) => {
    const id = payload;
    try {
      const pokemonByID = await axios(
        `http://localhost:3001/getPokemonByID/${id}`
      );
        
      return dispatch({
        type: "GET_POKEMON_BY_ID",
        payload: pokemonByID.data,
      });

    } catch (error) {
      return dispatch({
        type: "GET_POKEMON_BY_ID",
        payload: error.response.data,
      });
    }
  };
};

const getTypesAction = () => {
  return async (dispatch) => {
    try {
      const types = await axios.get("http://localhost:3001/getTypes");
      
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_TYPES",
        payload: error.response,
      });
    }
  };
};


const filterPokemonesAction = (payload) => {
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


const postPokemonAction = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/postPokemon",
        payload
      );

      return dispatch({
        type: "POST_POKEMON",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "POST_POKEMON",
        payload: error.response.data,
      });
    }
  };
};

const postPaymentDonationAction = (payload) => {
  return async function (dispatch) {
    try {
      let donation = {
        title: "donacion",
        amount: payload,
      };

      await axios
        .post("http://localhost:3001/postPayment", donation)
        .then(
          (res) => (window.location.href = res.data.response.body.init_point)
        );
    } catch (error) {
      return dispatch({
        type: "ERROR_MENSAJE",
        payload: error.response,
      });
    }
  };
};

const cleanStatePostAction = () => {
  return {
    type: "CLEAN_POST",
  };
};

export {
  getPokemonesAction,
  getPokemonByIDAction,
  getTypesAction,
  filterPokemonesAction,
  searchPokemonAction,
  postPokemonAction,
  postPaymentDonationAction,
  cleanStatePostAction,
};
