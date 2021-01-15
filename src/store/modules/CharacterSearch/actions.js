import { CHARACTERS } from "./actionsTypes";

export const getPokemon = (characters) => ({
  type: CHARACTERS,
  characters,
});
