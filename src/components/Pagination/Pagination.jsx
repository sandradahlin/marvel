import { useEffect, useState, useRef, forwardRef } from "react";
import {PaginationWrapper, PaginationButton, StepButton} from './Pagination.styled';

function Pagination({ pages, currentPage }) {
  const handleClick = (page) => {
    // setcp(page);
  };
  const followingButton = useRef();
  const previousButton = useRef();

  const [currentPages, setCurrentPages] = useState(pages.slice(0, 10));

  const handleShowFollowingPages = () => {
    const lastPage = currentPages.pop() + 1;
    const newRange = lastPage + 10;
    setCurrentPages(pages.slice(lastPage, newRange));

  };

  const handleShowPreviousPages = () => {
    const lastPage = currentPages.shift();
    const newRange = lastPage - 10;
    setCurrentPages(pages.slice(newRange, lastPage));
  };


  return (
    <PaginationWrapper>
      <StepButton
        ref={previousButton}
        onClick={handleShowPreviousPages}
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
        onClick={handleShowFollowingPages}
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
