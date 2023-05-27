import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER,
  ORDER,
  SHOW_ALL_FAVORITES,
} from "./actions";
const initialState = { myFavorites: [], allCharacters: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      }; //express
    // return {
    //   ...state,
    //   myFavorites: [...state.myFavorites, action.payload], //
    //   allCharacters: [...state.myFavorites, action.payload], //ambos tienen el mismo valor xq comienzan con ese estado
    // };

    case REMOVE_FAVORITE:
      return { ...state, myFavorites: action.payload };
    // const remove = state.myFavorites.filter(
    //   (character) => character.id !== action.payload
    // );
    // return {
    //   ...state,
    //   myFavorites: [...remove],
    //   allCharacters: [...remove],
    // };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          //hago el filtrado en la copia de los favoritos para consevar a todos los favoritos una vez hecho el filtro.
          (character) => character.gender === action.payload
        ),
      };

    case ORDER:
      let orderedByID;
      //si al filtro se lo aplicaria a allcharacters, el filtrado que ya hice lo perderia,
      //porque allcharacters me va a devolver ordenados ascendente o descendente
      //a TODOS los favoritos, no a los females,o males, o el genero q sea.
      if (action.payload === "Ascendente") {
        orderedByID = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        orderedByID = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }

      return { ...state, myFavorites: [...orderedByID] };

    case SHOW_ALL_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };

    default:
      return state;
  }
};

export default rootReducer;
