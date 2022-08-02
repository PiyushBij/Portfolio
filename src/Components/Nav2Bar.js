import "./Nav2Bar.css";
import { NavLink } from "react-router-dom";
import LogoImageW from "../Images/Home/logo-white.png";
import LogoImageB from "../Images/Home/logo-black.png";
function Nav2Bar() {
  return (
    <>
      <nav className="main-nav">
            <NavLink exact to="/">
        <img id="logo-white" className="LogoImage" height="90" width="55" src={LogoImageW} alt="LogoAlternateText" />
        {/* <img id="logo-black" className="LogoImage" height="90" width="55" src={LogoImageB} alt="LogoAlternateText" /> */}
            </NavLink>
        <ul className="navul">
          <li>
            <a href="/#cases-id" className="link"> 
              <span className="strike">All   Works</span>
            </a>
          </li>       
          <li>
            <NavLink exact className="link" to="/Contact">
              <span className="strike"> Contact</span>
            </NavLink>
          </li>
        </ul>
        <button className="menu-btn"><i class="fa-solid fa-ghost"></i></button>
      </nav>
    </>
  );
}

export default Nav2Bar;
