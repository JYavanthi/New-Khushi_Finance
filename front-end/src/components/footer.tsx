import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* About Section */}
      <div className="footer-about text-center py-4 px-5">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <img src="/assets/images/coin.png" alt="rupee coin" className="footer-coin" />
          <h2 className="footer-brand mb-0">About Khushi Finance</h2>
          <img src="/assets/images/coin.png" alt="rupee coin" className="footer-coin" />
        </div>
        <p className="footer-about-text mx-auto mb-0">
          Khushi Finance is a financial consultation and loan advisory firm
          committed to helping people make confident, well-informed money
          decisions.
        </p>
      </div>

      <hr className="footer-divider m-0" />

      {/* Links Section */}
      <div className="container-fluid container-xxl py-4">
        <div className="row justify-content-center align-items-start g-4">
          {/* Quick Links */}
          <div className="col-6 col-md-5 footer-links-col footer-links-col--left  text-center">
            <h5 className="footer-col-title mb-3">Quick Links</h5>
            <ul className="footer-list mb-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/#loan">Loans</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/t#privacy">Privacy Policy</Link></li>
              <li><Link to="/t#terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-5 footer-links-col footer-links-col-service  text-center">
            <h5 className="footer-col-title-s mb-3">Services</h5>
            <ul className="footer-services-list mb-0">
              <li><Link to="/financial-planning">Financial Consultation</Link></li>
              <li><Link to="/loans/personal">Personal Loans</Link></li>
              <li><Link to="/loans/home">Home Loans</Link></li>
              <li><Link to="/loans/business">Business Loans</Link></li>
              <li><Link to="/loans/student">Education Loans</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider m-0" />

      {/* Contact Info */}
      <div className="footer-contact py-4 px-3">
        <div className="footer-contact-block">
          <p className="footer-contact-title mb-2">Contact Us</p>
          <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>Bengaluru, India</p>
          <p className="mb-1"><i className="fas fa-phone me-2"></i>+91 9739871634</p>
          <p className="mb-0"><i className="fas fa-envelope me-2"></i>support@khushifinance.com</p>
        </div>
      </div>
      <hr className="footer-divider m-0" />

      {/* Copyright */}
      <div className="footer-copyright text-center px-3 py-3">
        <p className="mb-0">
          © 2026 Khushi Finance. Created by TechVaraha Solution Pvt Ltd.
          All rights reserved. Investments and loans are subject to eligibility
          and market risks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;