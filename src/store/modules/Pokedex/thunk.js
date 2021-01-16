import { addPokemon, removePokemon } from "./actions";

export const addPokemonThunk = (favorite) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("favorite")) || [];
  list.push(favorite);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(addPokemon(favorite));
};

export const removeCharacterThunk = (name) => (dispatch, getState) => {
  const { favorite } = getState();
  const list = favorite.filter((character) => character.name !== name);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(removePokemon(list));
};
