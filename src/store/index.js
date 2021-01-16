import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from "./modules/Character/reducers";
import { pokedexReducer } from "./modules/Pokedex/reducers";
const reducers = combineReducers({
  pokemons: charactersReducer,
  pokedex: pokedexReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
