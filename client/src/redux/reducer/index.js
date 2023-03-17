const initialState = {
  mensajeErr: {},

  allPokemones: [],
  pokemonesHome: [],
  
  pokemonDetail:{}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONES":
      return {
        ...state,
        allPokemones: action.payload, //pokemones que traigo intactos de la DB y los trabajo aca
        pokemonesHome: action.payload, // pokemones que muestro en el homePokemones
        mensajeErr: {}
      };
      
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonDetail: action.payload
      }

    case "ERROR_MENSAJE":
      return {
        ...state,
        pokemonesHome: [],
        mensajeErr: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
