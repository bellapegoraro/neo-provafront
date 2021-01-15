import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = {};

const store = createStore(reducers, applyMiddleware(thunk));

export default store;