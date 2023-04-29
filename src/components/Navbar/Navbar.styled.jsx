import styled from "styled-components";

const StyledNavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--clr-secondary);

  > li {
    color: var(--clr-white);
    text-transform: uppercase;
  }
  ${({ narrow }) =>
    narrow &&
    `
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;

`}
`;

export { StyledNavbarList };
