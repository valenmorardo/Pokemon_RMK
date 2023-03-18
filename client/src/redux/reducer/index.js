const initialState = {
  mensajeErr: {},

  allPokemones: [],
  pokemonesHome: [],
  
  pokemonDetail:{},

  types: [],

  filtros: {},
  orden:{}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONES":
      return {
        ...state,
        allPokemones: action.payload, //pokemones que traigo intactos de la DB y los trabajo aca
        pokemonesHome: action.payload, // pokemones que muestro en el homePokemones
        mensajeErr: {},
        orden: {},
        filtros: {}
      };
      
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonDetail: action.payload
      }
    
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload
      }

    case 'FILTER':
      return {
          ...state,
          pokemonesHome: action.payload.filter(state.allPokemones),
          filtros: action.payload.filtros,
          orden: action.payload.orden,
      };

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
