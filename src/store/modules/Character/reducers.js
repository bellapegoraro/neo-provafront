import { CHARACTER } from "./actionsTypes";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHARACTER:
      state = [action.character];
      return state;
    default:
      return state;
  }
};
