import axios from "axios";


const getPokemonesAction = (namePokemon) => {
  return async (dispatch) => {
    try {
      const pokemones = await axios("http://localhost:3001/getPokemones", {
        params: {
          name: namePokemon,
        },
      });
      
      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error) {

      return dispatch({
        type: "GET_POKEMONES",
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

const getFilteredPokemonesAction = (payload) => {
  return async (dispatch) => {
    try {
      const pokemones = await axios("http://localhost:3001/getPokemones", {
        params: {
          filtro: payload.filtros,
          orden: payload.orden,
        }
      });
      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_POKEMONES",
        payload: error.response,
      });
    }
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
  getFilteredPokemonesAction,
  postPokemonAction,
  postPaymentDonationAction,
  cleanStatePostAction,
};
