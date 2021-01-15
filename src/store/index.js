import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from "./modules/Character/reducers";

const reducers = combineReducers({
  pokemons: charactersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
