import { getPokemon } from "./actions";
import axios from "axios";

export const getPokemonThunk = (input, setError) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((res) => {
      dispatch(getPokemon(res));
    })
    .catch((err) => setError(err));
};
