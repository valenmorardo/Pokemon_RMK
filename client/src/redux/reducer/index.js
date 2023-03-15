const initialState = {
  mensajeErr: {},

  allPokemones: [],
  pokemonesHome: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ERROR_MENSAJE":
      return {
        ...state,
        mensajeErr: action.payload,
      };

      
    case "GET_POKEMONES":
      return {
        ...state,
        allPokemones: action.payload, //pokemones que traigo intactos de la DB y los trabajo aca
        pokemonesHome: action.payload, // pokemones que muestro en el homePokemones
      };

    default:
      return state;
  }
};

export default rootReducer;
