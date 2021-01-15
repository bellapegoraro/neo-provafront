import { CHARACTERS } from "./actionsTypes";

export const getPokemon = (character) => ({
  type: CHARACTERS,
  character,
});
