import styled from "styled-components";

const PaginationWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border-color: transparent;
  padding: 1rem;
  outline: none;

  &:hover {
    border-color: var(--clr-red-light);
  }
  &:focus {
    color: var(--clr-red-light);
  }
`;

const StepButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border-color: transparent;
  padding: 1rem;
  outline: none;
  &:first-of-type {
    margin-right: 1rem;
  }
  &:last-of-type {
    margin-left: 1rem;
  }
  &:hover {
    border-color: var(--clr-red-light);
  }
  &:focus {
    color: var(--clr-red-light);
  }
`;

export {
  PaginationWrapper,
  PaginationButton,
  StepButton
}