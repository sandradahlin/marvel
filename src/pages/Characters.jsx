import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import useCharactersContext from "../hooks/useCharactersContext";
import useFetch from "../hooks/useFetch";
function Characters() {

    const [pages, setPages] = useState( Array.from(Array(10).keys()))
    const [currentPage, setCurrentPage] = useState(1);
  //   `https://gateway.marvel.com:443/v1/public/characters?apikey=39c37ddfc3fecc245db8bbe0683646d2`
//   const { isLoading, isError, data, total } = useFetch(
//     "https://gateway.marvel.com:443/v1/public/characters"
//   );
const offset = 20;

const nextPage = () => {
  setCurrentPage((prevState) => {
    setCurrentPage(prevState +1)
  })
  // make a new fetch call
  // add loader
}
const context = useCharactersContext();
console.log(context, "jekkk");
useEffect(() => {
  const newOffset = 20 * currentPage;
  // make a call with new offset and update data (current characters)
}, [currentPage])
//   const paginate = (total) => {
//     // setoffset
//     // 20
//     //calculate pages
//     console.log("total ", total)

//     const pages = total / 20;
//     console.log("kkkk ", pages)
//     setPages(pages)

// }
//   useEffect(() => {
// paginate(total);
//   }, [total])


  console.log(pages, "datra")
  return (
    <>
      <Hero />
      <p>characters</p>
    {/* characters ( current characters map) */}
      {pages?.map(page => {
      console.log(page)
      return(
      <span>{page +1}</span>)})}
    </>
  );
}

export default Characters;
