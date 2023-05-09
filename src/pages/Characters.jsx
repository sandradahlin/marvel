import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Pagination from "../components/Pagination";
import useCharactersContext from "../hooks/useCharactersContext";
import useFetch from "../hooks/useFetch";

function Characters() {
  const [pages, setPages] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  //   `https://gateway.marvel.com:443/v1/public/characters?apikey=39c37ddfc3fecc245db8bbe0683646d2`
  //   const { isLoading, isError, data, total } = useFetch(
  //     "https://gateway.marvel.com:443/v1/public/characters"
  // //   );
  // const offset = 20;

  // const nextPage = () => {
  //   setCurrentPage((prevState) => {
  //     setCurrentPage(prevState + 1);
  //   });
  //   // make a new fetch call
  //   // add loader
  // };
  const { characters, getCharacters, total, isLoading, currentPage } =
    useCharactersContext();

  useEffect(() => {
    const newOffset = 20 * currentPage;
    getCharacters();
    // make a call with new offset and update data (current characters)
  }, [currentPage]);

  // console.log(characters, "******");
  const paginate = (total) => {
    // setoffset
    // 20
    //calculate pages

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
