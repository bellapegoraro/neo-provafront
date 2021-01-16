import { ADD_POKEDEX, REMOVE_POKEDEX } from "./actionsTypes";

export const addPokemon = (character) => ({
  type: ADD_POKEDEX,
  character,
});

export const removePokemon = (list) => ({
  type: REMOVE_POKEDEX,
  list,
});
