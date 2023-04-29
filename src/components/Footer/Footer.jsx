import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: var(--clr-secondary);
  padding: 2rem;
`;

const FooterLogo = styled.img`
  width: 80px;
`;


function Footer() {
  return (
    <StyledFooter>
      <div>
        <Link>
          <FooterLogo src={logo} />
        </Link>
      </div>
    </StyledFooter>
  );
}

export default Footer;
