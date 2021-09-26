import {
  LIST_POKEMON,
  DETAIL_POKEMON,
  ADD_WISHLIST,
  IS_ERROR,
  IS_LOADING,
} from "./actionType";
const initialState = {
  pokemons: {},
  pokemon: {},
  wishlists: [],
  isLoading: false,
  isError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_POKEMON:
      const listPokemon = {
        ...state,
        pokemons: action.payload,
      };
      return listPokemon;
    case DETAIL_POKEMON:
      const detailPokemon = {
        ...state,
        pokemon: action.payload,
      };
      return detailPokemon;
    case ADD_WISHLIST:
      const newWishlist = {
        ...state,
        wishlists: state.wishlists.concat(action.payload),
      };
      return newWishlist;
    case IS_LOADING:
      const newLoading = {
        ...state,
        isLoading: action.payload,
      };
      return newLoading;
    case IS_ERROR:
      const newError = {
        ...state,
        isError: action.payload,
      };
      return newError;
    default:
      console.log("not action");
  }
  return state;
}
