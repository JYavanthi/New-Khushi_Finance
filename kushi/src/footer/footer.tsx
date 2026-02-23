import "./Footer.css";
import { useNavigate, useLocation } from "react-router-dom";


import coin from "../assets/coin.png";



const Footer = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const goTopOrNavigate = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <section className="about-khushi">

      {/* tittle + text */}
      <div className="about-container">
        <div className="about-title">
          <div className="coin_image">
            <img src={coin} alt="About Khushi Finance" />
          </div>

          <div className="title_text">
            <h2><u>About Khushi Finance</u></h2>
          </div>

          <div className="coin_image">
            <img src={coin} alt="About Khushi Finance" />
          </div>
        </div>

        <div className="about-text">
          <p>
            Khushi Finance is a financial consultation and loan advisory firm
            committed to helping people make confident, well-informed money
            decisions.
          </p>
        </div>
      </div>

      {/* all links */}
      <div className="link-groups">
        <div className="quick-links">

          <div className="links-title">
            <h2>Quick Links</h2>
          </div>

          <ul>
            <li onClick={() => goTopOrNavigate("/")}>Home</li>

            <li onClick={() => goTopOrNavigate("/au")}>About</li>

            {/* <li onClick={()=>navigate("/s")}>Services</li> */}
            <li onClick={() => navigate("/#loan")}>Loans</li>

            <li onClick={() => goTopOrNavigate("/cu")}>Contact</li>

            <li onClick={() => navigate("/t#privacy")}>Privacy Policy</li>
            <li onClick={() => navigate("/t#terms")}>Terms & Conditions</li>

          </ul>

        </div>

        <div className="services-links">
          <div className="services-title">
            <h2>Our Services</h2>
          </div>

          <ul>
            <li onClick={() => goTopOrNavigate("/fp")}>Financial Consultation</li>
            <li onClick={() => goTopOrNavigate("/pl")}>Personal Loans</li>
            <li onClick={() => goTopOrNavigate("/hl")}>Home Loans</li>
            <li onClick={() => goTopOrNavigate("/bl")}>Business Loans</li>
            <li onClick={() => goTopOrNavigate("/sl")}>Education Loans</li>
          </ul>
        </div>
      </div>

      {/* contact us */}
      <div className="contactUs">
        <h3>Contact Us</h3>
        <p className="loc"><i className="fa-solid fa-location-dot"></i>5th Cross, 1st Main
          Netajinagar, Bengaluru, Karnataka, 560024</p>
        <p className="ph"><i className="fa-solid fa-phone"></i> +91 9739871634</p>
        <p className="em"><i className="fa-solid fa-envelope"></i> support@khushifinance.com</p>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Khushi Finance. Created by TechVaraha Solution Pvt Ltd.
          All rights reserved. Investments and loans are subject to eligibility and market.
        </p>
      </div>

    </section>
  );
};

export default Footer;
