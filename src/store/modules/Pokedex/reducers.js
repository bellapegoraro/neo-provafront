import { ADD_POKEDEX, REMOVE_POKEDEX } from "./actionsTypes";

export const pokedexReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEDEX:
      return [...state, action.favorite];
    case REMOVE_POKEDEX:
      return action.list;
    default:
      return state;
  }
};
