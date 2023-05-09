import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Pagination from "../components/Pagination";
import useCharactersContext from "../hooks/useCharactersContext";
import useFetch from "../hooks/useFetch";

function Characters() {
  const [pages, setPages] = useState([]);

  const { characters, total, isLoading, currentPage } =
    useCharactersContext();

  const paginate = (total) => {
    const pages = 5801 / 20;
    setPages(Array.from(Array(Math.ceil(pages)).keys()));
  };
  
  useEffect(() => {
    paginate(total);
  }, [total]);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Hero />
      <p>characters</p>
      <p>{currentPage}</p>
      {/* {characters?.map((character) => {
        return <span>{character.name}</span>;
      })} */}
      {/* characters ( current characters map) */}
      <Pagination pages={pages} currentPage={currentPage} />
      {/* {pages?.map((page) => {
        return <button>{page + 1}</button>;
      })} */}
    </>
  );
}

export default Characters;
