import { ADD_POKEDEX, REMOVE_POKEDEX } from "./actionsTypes";

export const addPokemon = (favorite) => ({
  type: ADD_POKEDEX,
  favorite,
});

export const removePokemon = (list) => ({
  type: REMOVE_POKEDEX,
  list,
});
