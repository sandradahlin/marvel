import React, { useContext, useReducer, useEffect, useCallback } from "react";
import charactersReducer from "../reducers/charactersReducer";
import { GET_CHARACTERS, SET_LOADING, SET_LOADING_DONE } from "../actions";
import { PUBLIC_KEY } from "../keys";
import useFetch from "../hooks/useFetch";

const URL = "https://gateway.marvel.com:443/v1/public/characters";
const CharactersContext = React.createContext();
console.log(CharactersContext, "con initial");

const initialState = {
  characters: [],
  total: 0,
  pages: 0,
  currentPage: 0,
  isLoading: true,
};

const CharactersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  const fetchData = async () => {
    setIsLoading();

    try {
      // const res = await fetch(`${URL}?apikey=${PUBLIC_KEY}`);
      // const { data } = await res.json();
      setLoadingDone();
const data={results: []}
      return data;
    } catch (error) {
      // setIsError(true);
      console.error(error);
    }
  };
  //   `https://gateway.marvel.com:443/v1/public/characters?apikey=39c37ddfc3fecc245db8bbe0683646d2`

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
  //fetch data here
  const getCharacters = async (offset) => {
    const data = await fetchData();
    dispatch({ type: GET_CHARACTERS, payload: data });
  };

  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const setLoadingDone = () => {
    dispatch({ type: SET_LOADING_DONE });
  };
  // const setLoadingFinished = () => {
  //   dispatch({ type: SET_LOADING});
  // }

  return (
    <CharactersContext.Provider value={{ ...state, getCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContextProvider };
export default CharactersContext;
