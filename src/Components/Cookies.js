import "./Cookies.css";
import {useEffect} from "react";
import Nav2Bar from "./Nav2Bar.js";
import Footer from "./Footer.js";

function Cookies() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Nav2Bar />
      <div id="top" className="cookie-section-cs1">
        <h1 className="cs1-heading">Cookies</h1>
        <h1 className="cs1-background-heading">Cookies</h1>
        <div className="cs1-p-container">
          <p className=" cs1-para">
            This internet website uses its own technical cookies in order to
            help users navigate the site as efficiently and easily as possible.
          </p>
          <p className=" cs1-para">
            This website uses Google Analytics cookies to count the number of
            site visits.
          </p>
          <p className=" cs1-para">
            Analytical cookies are used to collect anonymous statistics
            information about the use of the site by users.
          </p>
          <p className=" cs1-para">
            You may consent or not to the installation of cookies even with the
            use of your computer's functionality.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cookies;
