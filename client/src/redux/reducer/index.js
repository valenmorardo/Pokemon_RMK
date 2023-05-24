const initialState = {
  pokemones: {},
  pokemonDetail:{},
  postPokemon: {},
  types:{},

  filtro: [],
  orden: [],
  search: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONES":
      return {
        ...state,
        pokemones: action.payload,

        /* search: action.payload.nameSearched || state.search, */
        search: action.payload.nameSearched,
        pokemonDetail:{},

        filtro: action.payload.filtro,
        orden: action.payload.orden,
        
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
