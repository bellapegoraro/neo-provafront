import { CHARACTER } from "./actionsTypes";

export const getPokemon = (character) => ({
  type: CHARACTER,
  character,
});
