import "./Case.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer.js";
import Nav2Bar from "./Nav2Bar.js";
function Eparent() {
  return (
    <>
      <Nav2Bar />
      <section data-some="case" id="top" className="eparent-e1">
        <div className="home-e1">
          <div className="e1-image"></div>
          <div className="e1-heading-container">
            <h1>Eparent Company</h1>
            <h3 >
              <i >A tech parent company.</i>
            </h3>
          </div>
          <div className="e1-role">
            <div className="roles">
              <span className="ivaan-color">Role</span> Front end developer
            </div>
            <div className="roles">
              <span className="ivaan-color">Context</span> Website Redesign
            </div>
            <div className="roles">
              <span className="ivaan-color">Period</span> august 2020
            </div>
          </div>
        </div>

        <div className="project-e1">
          <h1 className="e1-project-heading">The Project</h1>
          <div class="wrapper">
            <p class="target">Eparent Website</p>
          </div>
          <div className="e1-pbtn-container">

          <p className="e1-project-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            eveniet voluptatibus fuga beatae esse sit voluptate, quidem
            inventore et vel earum voluptatum ex asperiores id, quisquam at
            adipisci quaerat quas! Excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia vitae deserunt consequatur,
            quaerat vero officia repellat ratione ut dicta, sint explicabo
            laudantium! Autem voluptate libero adipisci et vero, ipsum
            cupiditate.
          </p>
          {/* <button > */}
            <a className=" e1-nav e1-btn" target="_blank" href="https://eparentcompany.herokuapp.com/">
                    Visit <i class=" e1-i fa-solid fa-arrow-right-long"></i>
            </a>
         {/* </button> */}
          </div> 
        </div>

        <div className="nxtwrk-e1">
          <h3 className="e1-title">next work</h3>
          <div className="e1-nxtwrk-btn">
            <h1 className="e1-title2">Ivaan Studios I</h1>
            <NavLink className="e1-btn-nxtwrk" exact to="/Ivaan1">
              <i class="l1-i fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Eparent;
