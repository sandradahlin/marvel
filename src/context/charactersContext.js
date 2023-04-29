import React, { useContext, useReducer, useEffect } from "react";
import charactersReducer from "../reducers/charactersReducer";
import { GET_CHARACTERS } from "../actions";
const CharactersContext = React.createContext();
console.log(CharactersContext, "con initial");

const initialState = {
  currentCharacters: [],
};

const CharactersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  //fetch data here

  return (
    <CharactersContext.Provider value={{ ...state }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContextProvider };
export default CharactersContext;
