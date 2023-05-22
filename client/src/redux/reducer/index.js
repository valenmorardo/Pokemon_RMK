const initialState = {
  pokemones: {},
  pokemonDetail:{},
  postPokemon: {},
  types:{}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONES":
      return {
        ...state,
        pokemones: action.payload,

        search: action.payload.nameSearched || state.search
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,

      };


    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case "FILTER":
      return {
        ...state,
        pokemonesHome: action.payload.filter(state.allPokemones),
          filtros: action.payload.filtros,
          orden: action.payload.orden,
      };

    case "POST_POKEMON":
      return {
        ...state,
        postPokemon: action.payload,
      };

    case "CLEAN_POST":
      return {
        ...state,
        postPokemon: {},
      };

    default:
      return state;
  }
};

export default rootReducer;
