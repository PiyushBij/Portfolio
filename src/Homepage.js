import "./Homepage.css";
import { NavLink } from "react-router-dom";

import AboutImage from "./Images/About/About-image.png";
import h1magichtml from "./Images/Home/html.png";
import h1magiccss from "./Images/Home/css.png";
import h1magicjs from "./Images/Home/js.png";
import caseImg1 from "./Images/Case/case-1.png";
import caseImg2 from "./Images/Case/case-2.png";
import caseImg3 from "./Images/Case/case-3.png";

import Nav2Bar from "./Components/Nav2Bar.js";
import Footer from "./Components/Footer.js";
import Cookiepop from "./Cookiepop.js";

function Homepage() {

 
  return (
    <>
      <div className="loader">
        <div className="loader-content">
          <h1>loading...</h1>
        </div>
      </div>

      {/* <script>
        $(window).on("load",function () {
          $(".loader").fadeOut("slow")
        });
      </script> */}
      <section id="top" className="homepage-h1">
        <Cookiepop  />
        <Nav2Bar />

        <div className="h1-container">
          <div className="h1-headings">
            <h3>Hello, I'm &nbsp; </h3>
            <h1> Piyush </h1>
            <br />
            <h3> Yess... a front-end developer.</h3>
            <br />
            <h3 className=" animated-text-1 cursive">
              I do magic with these...
            </h3>
          </div>
          <div className="h1-social">
            <ul className="h1-social-ul">
              <li>
                <a>
                  <i class="i-4 fa-brands fa-twitter fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-1 fa-brands fa-facebook-f fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-2 fa-brands fa-whatsapp fa-2xs"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="i-3 fa-brands fa-instagram fa-2xs"></i>
                </a>
              </li>
              {/* <li>
                <a>
                  <i class=" fa-brands fa-youtube fa-2xs"></i>
                </a>
              </li> */}
              <li>
                <a>
                  <i class="i-5 fa-brands fa-linkedin-in fa-2xs"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h1-magic-boxes">
          <div className="h1-magics">
            <img src={h1magichtml} alt="htmlAlternate" />
          </div>
          <div className="h1-magics">
            <img src={h1magiccss} alt="cssAlternate" />
          </div>
          <div className="h1-magics">
            <img src={h1magicjs} alt="jsAlternate" />
          </div>
        </div>
      </section>

      <section id="about-id" className="about-a1">
        <div className="a1-content">
          <h1>My Journey</h1>
          <p>
            My name is Piyush Bijwey, an intern front-end develeper. I've
            started my web development journey when i was in college. Earlier I
            had decided to just be a creative front-end developer but from
            twenty twenty one, I've dived more into web and thaught to give a
            try to back-end also.
          </p>
        </div>
        <div className="a1-image">
          <img src={AboutImage} alt="AboutImageAlternate" />
        </div>
        <div class="a1-wrapper">
          <p class="a1-target">About Me</p>
        </div>
      </section>
      {/*
      <section>skills</section>
      <section>resume</section> */}
      <section id="cases-id" className="latest-l1">
        <h1 className="l1-heading">Case Studies</h1>
        <div className="l1-container">
          <div className="l1-cases l1-left">
            <img src={caseImg1} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <div className="l1-overlay-container">
                <h1>E-parent Website</h1>
                <h3>A servie porvider company.</h3>
                <button className="l1-btn">
                  <NavLink exact to="/Eparent" className="l1-nav">
                    Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="l1-cases l1-right">
            <img src={caseImg2} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <h1>Ivaan Studios</h1>
              <h3>A studio with creative developers.</h3>
              <button className="l1-btn">
                <NavLink exact to="/Ivaan1" className="l1-nav">
                  Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </button>
            </div>
          </div>

          <div className="l1-cases l1-left">
            <img src={caseImg3} alt="altCase" />
            <div className="l1-overlay"></div>
            <div className="l1-overlay-headings">
              <h1>Ivaan Studios II</h1>
              <h3>Recreated, with new implementations and design</h3>
              <button className="l1-btn">
                <NavLink exact to="/Ivaan2" className="l1-nav">
                  Case Study <i class="l1-i fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="code-c1">
        <h1 className="c1-heading">Look at some of my experiments:</h1>
        <div className="c1-pens-container">
          <div className="c1-pens">
            <a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a>
          </div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
          <div className="c1-pens"><a href="" target="_blank">
              <div className="c1-circle-container">
              <div className="c1-circle">
              </div>
              </div>
              <div className="c1-bottom">
                <h1 className="c1-title">Title</h1>
                <h3 className="c1-discription">This is something written.</h3>
                <div className="c1-No,Bar">
                  <span className="c1-bar"></span>
                </div>
              </div>
            </a></div>
        </div>
      </section>
 */}
      <Footer />
    </>
  );
}

export default Homepage;
