import { useEffect, useState, useRef, forwardRef } from "react";
import {
  PaginationWrapper,
  PaginationButton,
  StepButton,
} from "./Pagination.styled";
import useCharactersContext from "../../hooks/useCharactersContext";

function Pagination({ pages, currentPage }) {
  const { characters, getCharacters, total, setCurrentPage } =
    useCharactersContext();

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const followingButton = useRef();
  const previousButton = useRef();

  const [currentPages, setCurrentPages] = useState(pages.slice(0, 10));

  const handlePages = (next) => {
    const lastPage = next ? currentPages.pop() + 1 : currentPages.shift();
    const newRange = next ? lastPage + 10 : lastPage - 10;
    console.log(lastPage, "last page");
    console.log(newRange, "newRange");


    setCurrentPages(
      next ? pages.slice(lastPage, newRange) : pages.slice(newRange, lastPage)
    );

    setCurrentPage(next ? lastPage + 1 : lastPage -9);
  };

  return (
    <PaginationWrapper>
      <StepButton
        ref={previousButton}
        onClick={() => handlePages(false)}
        disabled={currentPages[0] + 1 === 1 ? true : false}
      >
        {"<"}{" "}
      </StepButton>
      {currentPages?.map((page) => {
        return (
          <PaginationButton key={page} onClick={() => handleClick(page)}>
            {page + 1}
          </PaginationButton>
        );
      })}
      <StepButton
        ref={followingButton}
        onClick={() => handlePages(true)}
        disabled={
          currentPages[currentPages.length - 1] === pages[pages.length - 1]
            ? true
            : false
        }
      >
        {">"}
      </StepButton>
    </PaginationWrapper>
  );
}

export default Pagination;
