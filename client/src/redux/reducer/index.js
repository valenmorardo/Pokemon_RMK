const initialState = {
  mensajeErr: {},

  allPokemones: [],
  pokemonesHome: [],

  search: "",
  
  pokemonDetail:{},

  types: [],

  filtros: {},
  orden:{},

  postPokemon: {}
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
        filtros: {},
        pokemonDetail: {}
        
      };

    case "SEARCH":
      return {
        ...state,
        search: action.payload,
        orden: {},
        filtros: {},
        mensajeErr: {},
      }
      
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonDetail: action.payload
      }
    
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload,
        search: ""
      }

    case 'FILTER':
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
      }


    //@SMELL recordar cambiar en los otros casos.
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
