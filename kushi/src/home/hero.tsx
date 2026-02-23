import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import hero from "../assets/hero.png"
import moneyBg from "../assets/moneyBg.png"
import calculator from "../assets/calculator.png"
import HeroSlider from "./heroslider"
import control_bg from "../assets/control_bg.png"
import how_bg from "../assets/how.png"
import whybg from "../assets/why_bg3.png"
import control from "../assets/control.png"
import lo from "../assets/fp/lo.png"

import useScaleGap from "../usescale";

const PHONE_NUMBER = "+919739871634";
const WHATSAPP_NUMBER = "919739871634";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNumberPopup, setShowNumberPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const loanRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  useScaleGap();

  const handleCallClick = () => {
    const ua = navigator.userAgent;
    const isTrulyMobile = /Android|iPhone|iPad|iPod/i.test(ua);

    if (isTrulyMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      setShowPopup(false);
      setShowNumberPopup(true);
    }
  };

  const handleWhatsAppClick = () => {
    const ua = navigator.userAgent;
    const isTrulyMobile = /Android|iPhone|iPad|iPod/i.test(ua);

    if (isTrulyMobile) {
      window.open(`whatsapp://send?phone=${WHATSAPP_NUMBER}`, "_blank");
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="page-scaler">
      <section className="hero">
        <div className="hero-text">
          <h1>
            We Help You Take <br />
            Control of Your Finances
          </h1>
          <p>Clarity, control, and confidence for your financial journey.</p>
          <div className="hero-button-group">
            <div className="hero-button1">
              <button
                style={{ backgroundColor: "#29606d", color: "white", border: "none" }}
                onClick={() => setShowPopup(true)}
              >
                Book a free <br /> consultation <i className="fa-solid fa-phone"></i>
              </button>
            </div>
            <div className="hero-button2">
              <button
                style={{
                  backgroundColor: "#ffbd59",
                  color: "white",
                  border: "none",
                  padding: "15px 16px",
                  borderRadius: "12px",
                  fontSize: "25px",
                  width: "252px",
                  cursor: "pointer"
                }}
                onClick={() => loanRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                check loan options
              </button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Hero Image" />
        </div>
      </section>

      {/* Contact Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <h3>Contact Us</h3>

            <button
              className="popup-btn-whatsapp"
              onClick={handleWhatsAppClick}
            >
              <i className="fa-brands fa-whatsapp"></i>WhatsApp
            </button>

            <button className="popup-btn-call" onClick={handleCallClick}>
              <i className="fa-solid fa-phone"></i>Call Now
            </button>
          </div>
        </div>
      )}

      {/* Number Copy Popup - Desktop */}
      {showNumberPopup && (
        <div className="popup1-overlay">
          <div className="popup1">
            <button
              className="close-btn"
              onClick={() => {
                setShowNumberPopup(false);
                setCopied(false);
              }}
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <p className="number-heading">Our contact number</p>
            <p className="phone-number">{PHONE_NUMBER}</p>
            <button
              className={`copy-number-btn ${copied ? "copied" : ""}`}
              onClick={handleCopy}
            >
              {copied
                ? <><i className="fa-solid fa-check"></i> Copied!</>
                : <><i className="fa-solid fa-copy"></i> Copy Number</>}
            </button>
          </div>
        </div>
      )}

      <section className="features-section">
        <div className="features-container">
          <div className="features-image">
            <img src={calculator} alt="Finance Calculation" />
          </div>

          <div className="features-box">
            <div className="feature-item">
              <img src="/src/assets/search_icon.png" alt="Verification" />
              <p>No Hidden Charges</p>
            </div>

            <div className="feature-item">
              <img src="/src/assets/trust_icon.png" alt="Advice" />
              <p>100% Transparent Advice</p>
            </div>

            <div className="feature-item">
              <img src="/src/assets/verification_icon.png" alt="RBI Compliant" />
              <p>RBI-Compliant Loan Partners</p>
            </div>

            <div className="feature-item">
              <img src="/src/assets/lead_icon.png" alt="Financial Guidance" />
              <p>Personalized Financial Guidance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-banner" style={{ backgroundImage: `url(${moneyBg})`, width: "100%" }}>
        <div className="about-content">
          <h2>Smart Financial Solutions, Built Around You</h2>
          <div className="acm">
            <img src={lo} alt="logo" className="lo" />
            <p>
              At Khushi Finance, we simplify money decisions. Whether you're planning your
              finances or looking for the right loan, our experts guide you with unbiased
              advice and solutions tailored to your needs.
            </p>
            <img src={lo} alt="logo" className="lo1" />
          </div>
        </div>
      </section>

      <HeroSlider />

      <section id="loan" ref={loanRef} className="loan-assistance">
        <div className="loan-layout">
          <div className="assistance_container">
            <div className="loan-image">
              <img src="./src/assets/loanas.png" alt="Loan Assistance" />
            </div>

            <div className="loan_container">
              <h2 className="section-title">LOAN ASSISTANCE</h2>
              <div className="loan-options">
                <div className="loan-pill">
                  <img src="/src/assets/bg_icon.png" />
                  <button onClick={() => navigate("/pl")}>Personal Loans</button>
                </div>

                <div className="loan-pill">
                  <img src="/src/assets/h_icon.png" />
                  <button onClick={() => navigate("/hl")}>Home Loans</button>
                </div>

                <div className="loan-pill">
                  <img src="/src/assets/b_icon.png" />
                  <button onClick={() => navigate("/bl")}>Business Loans</button>
                </div>

                <div className="loan-pill">
                  <img src="/src/assets/ed_icon.png" />
                  <button onClick={() => navigate("/sl")}>Education Loans</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="section-subtitle">
          We compare lenders, negotiate for you, and simplify the process.
        </p>
      </section>

      <section
        className="why-khushi"
        style={{ backgroundImage: `url(${whybg})` }}
      >
        <div className="why-overlay">
          <div className="why-container">
            <div className="why-content">
              <h2>Why Khushi Finance?</h2>
              <ul>
                <li>Client-first, not commission-first</li>
                <li>Simple explanations, no jargon</li>
                <li>Trusted lender network</li>
                <li>End-to-end support</li>
                <li>100% transparent process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="clarity-section">
        <div className="clarity-container">
          <div className="clarity-image">
            <img src={('./src/assets/money.png')} alt="Holding money" />
          </div>
          <div className="clarity-text">
            <h2>Your money deserves clarity, not confusion.</h2>
            <p>
              Thousands of Indians struggle with poor financial advice. We're here to change that —
              with honesty, empathy, and expertise.
            </p>
          </div>
        </div>
      </section>

      <section
        className="how-it-works"
        style={{ backgroundImage: `url(${how_bg})` }}
      >
        <div className="how-container">
          <div className="how-title">
            <h2>HOW IT WORKS?</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card light">
              <div className="step-icon">
                <img src="/src/assets/bc_icon.png" />
              </div>
              <p>Book a Consultation</p>
            </div>

            <div className="step-card orange">
              <div className="step-icon">
                <img src="/src/assets/fp_icon.png" />
              </div>
              <p>Understand Your Financial Picture</p>
            </div>

            <div className="step-card orange">
              <div className="step-icon">
                <img src="/src/assets/ta_icon.png" />
              </div>
              <p>Get Tailored Advice / Loan Options</p>
            </div>

            <div className="step-card light">
              <div className="step-icon">
                <img src="/src/assets/es_icon.png" />
              </div>
              <p>We Help You Execute Smoothly</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ct-section"
        style={{ backgroundImage: `url(${control_bg})` }}
      >
        <div className="ct-container">
          <div className="ct-title">
            <h2>Ready to take</h2>
            <h1>CONTROL?</h1>
          </div>

          <div className="ct-divider">
            <div className="ct-image">
              <img src={control} alt="Consultation" />
            </div>

            <div className="ct-content">
              <p>Speak to a certified financial expert today.</p>
              <button className="primary-btn" onClick={() => navigate("/cu")}>
                Book Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero