import { getPokemon } from "./actions";
import axios from "axios";

export const getPokemonThunk = (input, setError, setOpen) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((res) => {
      dispatch(getPokemon(res.data));
    })
    .catch((err) => {
      setError(true);
      setOpen(true);
    });
};
