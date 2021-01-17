import { addPokemon, removePokemon } from "./actions";

export const addPokemonThunk = (favorite) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("favorite")) || [];
  list.push(favorite);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(addPokemon(favorite));
};

export const removePokemonThunk = (name) => (dispatch, getState) => {
  const { pokedex } = getState();
  console.log(name);
  console.log(pokedex);
  const list = pokedex.filter((character) => character.species.name !== name);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(removePokemon(list));
};
