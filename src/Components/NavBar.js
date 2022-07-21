import "./NavBar.css";
import { NavLink } from "react-router-dom";
// import LatestWorks from "./LatestWorks.js";
// import Contact from "./Contact.js";
import LogoImage from "../Images/Home/logo-white.png";
function NavBar() {
  return (
    <>
      <nav className="main-nav">
        <img height="90" width="55" src={LogoImage} alt="LogoAlternateText" />
        <ul>
          <li>
           <a href="#cases-id"className="link">
              <span className="strike">Latest Works</span>
            </a>
          </li>
          <li>
            <NavLink exact className="link" to="/Contact">
              <span className="strike"> Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
