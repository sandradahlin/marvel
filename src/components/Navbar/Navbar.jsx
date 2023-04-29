import logo from "../../assets/navbar-logo.svg";
import { StyledNavbarList, StyledSubMenu } from "./Navbar.styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
function Navbar() {
  return (
    <nav>
      <StyledNavbarList>
        <li>Sign in</li>
        <li>
          <Link to={ROUTES.home}>
            {" "}
            <img src={logo} />
          </Link>
        </li>
        <li>Marvel</li>
      </StyledNavbarList>
      <StyledNavbarList narrow={true}>
        <li>
          <Link to={ROUTES.characters}>characters</Link>
        </li>
        <li>comics</li>
      </StyledNavbarList>
    </nav>
  );
}

export default Navbar;
