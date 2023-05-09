import React, { useContext, useReducer, useEffect, useCallback } from "react";
import charactersReducer from "../reducers/charactersReducer";
import {
  GET_CHARACTERS,
  SET_LOADING,
  SET_LOADING_DONE,
  SET_PAGE,
  SET_ERROR,
} from "../actions";
import { PUBLIC_KEY } from "../keys";

const URL = "https://gateway.marvel.com:443/v1/public/characters";
const CharactersContext = React.createContext();

const initialState = {
  data: [],
  total: 0,
  pages: 0,
  currentPage: 1,
  isLoading: true,
  isError: false,
};

const CharactersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  const fetchData = async () => {
    setIsLoading();

    try {
      const offset = state.currentPage * 20 - 20;
      const res = await fetch(`${URL}?offset=${offset}&apikey=${PUBLIC_KEY}`);
      const { data } = await res.json();
      setData(data);
      setLoadingDone();
    } catch (error) {
      setIsError();
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state.currentPage]);

  const setData = async (data) => {
    dispatch({ type: GET_CHARACTERS, payload: data });
  };

  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setLoadingDone = () => {
    dispatch({ type: SET_LOADING_DONE });
  };

  const setCurrentPage = (page) => {
    dispatch({ type: SET_PAGE, payload: page });
  };

  const setIsError = async () => {
    dispatch({ type: SET_ERROR });
  };

  return (
    <CharactersContext.Provider value={{ ...state, setCurrentPage }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContextProvider };
export default CharactersContext;
