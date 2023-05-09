import {
  GET_CHARACTERS,
  SET_LOADING,
  SET_LOADING_DONE,
  SET_PAGE,
  SET_ERROR
} from "../actions";
const charactersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS: {
      return { ...state, characters: payload.results, total: payload.total };
    }
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_LOADING_DONE:
      return { ...state, isLoading: false };
    case SET_PAGE:
      return { ...state, currentPage: payload };
    default:
      return { ...state };
  }
};

export default charactersReducer;
