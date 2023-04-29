import { useContext } from "react";
import CharactersContext from "../context/charactersContext";

const useCharactersContext = () => {
  return useContext(CharactersContext);
};

export default useCharactersContext;
