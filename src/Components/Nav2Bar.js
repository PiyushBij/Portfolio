import "./Nav2Bar.css";
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import LogoImageW from "../Images/Home/logo-white.png";
// import LogoImageB from "../Images/Home/logo-black.png";
function Nav2Bar() {
  const {cook,setcook}=useState(true);
  let menuId2=document.getElementById("n2-menu-container-id");
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const menuopenfn2=()=> {
    alert("menu opened");
    cook?menuId2.style.display="block":menuId2.style.display="none";
  }
  // const menuclsfn2=()=> {
  //   alert("menu closed");
  //   menuId2.style.display="none";
  // }
  return (
    <>
      








      <nav className="main-nav-n1">
        <NavLink exact to="/">
          <img
            id="logo-white"
            className="LogoImage"
            height="90"
            width="55"
            src={LogoImageW}
            alt="Logo"
          />
        </NavLink>
        <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("open");
          menuId2.style.display="block";
        }} className="menu-btn">
          <i class="fa-solid fa-ghost"></i>
      </button>
        <ul className="n1-nav-ul">
          <li className="home ">
            <a href="/#cases-id" className="link">
              <span className="strike">Latest Works</span>
            </a>
          </li>

          <li className="home ">
            <a href="/#about-id" className="link">
              <span className="strike">About Me</span>
            </a>
          </li>

          <li className="cases contact ">
            <a href="/#All-id" className="link">
              <span className="strike">All Works</span>
            </a>
          </li>

          <li className="cases cookies home">
            <NavLink exact className="link" to="/Contact">
              <span className="strike"> Contact</span>
            </NavLink>
          </li>

          <li className="cases contact cookies">
            <NavLink exact className="link" to="/">
              <span className="strike">Back To Home</span>
            </NavLink>
          </li>
        </ul>
      </nav>












      {/* <nav className="main-nav-mob-n2">
      <button onClick={menuopenfn2} className="menu-btn">
          <i class="fa-solid fa-ghost"></i>
      </button>

     </nav> */}

     
<div id="n2-menu-container-id" className="n2-menu-container">
  <div className="n2-menu-container-div">
  
     <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="n2-close">
         <i class="fa-solid fa-xmark"></i>
        </button>
      
      <ul className="n2-nav-ul">
          <li onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="home ">
            <a href="/#cases-id" className="link">
              <span className="strike">Latest Works</span>
            </a>
          </li>

          <li onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="home ">
            <a href="/#about-id" className="link">
              <span className="strike">About Me</span>
            </a>
          </li>

          <li onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="cases contact ">
            <a href="/#All-id" className="link">
              <span className="strike">All Works</span>
            </a>
          </li>

          <li onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="cases cookies home">
            <NavLink exact className="link" to="/Contact">
              <span className="strike"> Contact</span>
            </NavLink>
          </li>

          <li onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          // alert("close");
          menuId2.style.display="none";  
        }} className="cases contact cookies">
            <NavLink exact className="link" to="/">
              <span className="strike">Back To Home</span>
            </NavLink>
          </li>
        </ul>

          
        <ul className="n2-socials">
          <li><i class="i-4 fa-brands fa-twitter fa-2xs"></i></li>
          <li><i class="i-1 fa-brands fa-facebook-f fa-2xs"></i></li>
          <li><i class="i-2 fa-brands fa-whatsapp fa-2xs"></i></li>
          <li><i class="i-3 fa-brands fa-instagram fa-2xs"></i></li>
          <li><i class="i-5 fa-brands fa-linkedin-in fa-2xs"></i></li>
        </ul>
</div>
</div>

    </>
  );
}

export default Nav2Bar;




// <div id="menu-items-id" className="nav2-menu-items-m1">
//         <button onClick={menuclsfn2} className="m1-close">
//           close
//         </button>
//         <ul className="m1-links">
//           <li>home</li>
//           <li>experiments</li>
//           <li>latest works</li>
//           <li>contact</li>
//         </ul>
//         <ul className="m1-socials">
//           <li>twitter</li>
//           <li>instagram</li>
//           <li>linkedin</li>
//           <li>facebook</li>
//           <li>whatsapp</li>
//         </ul>
//       </div>






//       <nav className="main-nav">
//         <NavLink exact to="/">
//           <img
//             id="logo-white"
//             className="LogoImage"
//             height="90"
//             width="55"
//             src={LogoImageW}
//             alt="LogoAlternateText"
//           />
//           {/* <img id="logo-black" className="LogoImage" height="90" width="55" src={LogoImageB} alt="LogoAlternateText" /> */}
//         </NavLink>
//         <ul className="navul">
//           <li>
//             <a href="/#cases-id" className="link">
//               <span className="strike">All Works</span>
//             </a>
//           </li>
//           <li>
//             <NavLink exact className="link" to="/Contact">
//               <span className="strike"> Contact</span>
//             </NavLink>
//           </li>
//         </ul>
//         <button onClick={menuopenfn2} className="menu-btn">
//           <i class="fa-solid fa-ghost"></i>
//         </button>
//       </nav>
