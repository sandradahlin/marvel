import styled from "styled-components";
import image from "../../assets/background-characters.jpeg";
const StyledHeroWrapper = styled.section`
  min-height: 450px;
  margin-top: -5rem;
  z-index: -1;
  background: linear-gradient(
      0deg,
      var(--bg-color-primary),
      var(--bg-color-primary)
    ),
    url(${image});
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
   span {
    color: var(--clr-white);
    text-transform: uppercase;
  }
`;

export { StyledHeroWrapper };
