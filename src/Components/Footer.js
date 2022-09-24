import "./Footer.css";
import LogoImage from "../Images/Home/logo-white.png";
function Footer() {
  return (
    <>
      <section className="footer-f1">
        <div className="f1-img-container">
          <a href="#top">
            <img className="f1-img" src={LogoImage} alt="logoAlternateText" />
            <span className="f1-top">Top</span>
          </a>
        </div>
        <div className="f1-socials">
          <hr />
          <ul className="f1-social-ul">
            <li>
              <a href="https://twitter.com/PiyushBijwey" target="_blank">
                <span className="strike">twitter</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">github</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">whatsapp</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">instagram</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <span className="strike">linkedin</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <span className="f1-copyright">@copyright-PiyushPortfolio.com</span>
      </section>
    </>
  );
}

export default Footer;
