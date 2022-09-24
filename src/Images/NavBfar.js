 import "./NavBar.css";
import { NavLink } from "react-router-dom";
import LogoImageW from "../Images/Home/logo-white.png";
import LogoImageB from "../Images/Home/logo-black.png";
function NavBar() {
  let menuId=document.getElementById("menu-items-id");
  const menuopenfn=()=> {
    alert("menu opened");
    menuId.style.display="block";
  }
  const menuclsfn=()=> {
    alert("menu closed");
    menuId.style.display="none";
  }
  return (
    <>
    <div id="menu-items-id" className="menu-items-m1">
        <button onClick={menuclsfn} className="m1-close">close</button>
        <ul className="m1-links">
          <li>home</li>
          <li>experiments</li>
          <li>latest works</li>
          <li>contact</li>
        </ul>
        <ul className="m1-socials">
          <li>twitter</li>
          <li>instagram</li>
          <li>linkedin</li>
          <li>facebook</li>
          <li>whatsapp</li>
        </ul>
      </div>
      <nav className="main-nav">
            <NavLink exact to="/">
        <img id="logo-white" className="LogoImage" height="90" width="55" src={LogoImageW} alt="LogoAlternateText" />
        {/* <img id="logo-black" className="LogoImage" height="90" width="55" src={LogoImageB} alt="LogoAlternateText" /> */}
            </NavLink>
        <ul className="navul">
          <li>
            <a href="/#cases-id" className="link"> 
              <span className="strike">Latest Works</span>
            </a>
          </li>
          <li>
            <NavLink exact className="link" to="/Contact">
              <span className="strike"> Contact</span>
            </NavLink>
          </li>
        </ul>
        <button onClick={menuopenfn} className="menu-btn"><i class="fa-solid fa-ghost"></i></button>
      </nav>
    </>
  );
}

export default NavBar;
