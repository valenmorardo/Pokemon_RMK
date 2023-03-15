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
            type: 'ERROR_MENSAJE',
            payload: error.response
        })
    }
  };
};









export { getPokemones };
