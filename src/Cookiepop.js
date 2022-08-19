import "./Cookiepop.css";
import { NavLink } from "react-router-dom";
import React,{useState} from 'react';

import cookieImage from "./Images/Home/Cookiess.png";
function Cookiepop() {
    let cookiepop = document.getElementById("cookie-id");
    const [isExpanded, setIsExpanded] = useState(true);
    // let dismissCookiesFun = () => {
    //   cookiepop.style.display = "none";
    //   alert("dismissed");
    // };
    return (
        
    <>
    <div id="cookie-id" className="cookies-popup">
          <img height="20" width="20" src={cookieImage} alt="cookieImage" />
          <span>
            {" "}
            This website uses{" "}
            <NavLink to="/Cookies">
              <span className="strike cook-txt"> Cookies</span>
            </NavLink>{" "}
            -{" "}
            <span onClick={() => { 
          setIsExpanded(!isExpanded);
          // alert("open");
          cookiepop.style.display = "none";
        }}className="strike dismiss">
              Dismiss
            </span>
          </span>
        </div>
    </>
    );
}

export default Cookiepop;