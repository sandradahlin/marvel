import { GET_CHARACTERS } from "../actions";
const charactersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS:
      return { key: "hello" };
    default:
      return { ...state };
  }
};

export  default charactersReducer;