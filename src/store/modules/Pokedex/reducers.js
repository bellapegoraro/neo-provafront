import { CHARACTERS } from "./actionsTypes";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHARACTERS:
      state = [...action.character];
      return state;
    default:
      return state;
  }
};
