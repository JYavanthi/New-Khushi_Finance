import "./about_us.css";
import { useState } from "react";
import logo from "../assets/logo.png";

const PHONE_NUMBER = "+919739871634";
const WHATSAPP_NUMBER = "919739871634";

const AboutUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNumberPopup, setShowNumberPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCallClick = () => {
    const isTrulyMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isTrulyMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      setShowPopup(false);
      setShowNumberPopup(true);
    }
  };

  const handleWhatsAppClick = () => {
    const isTrulyMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
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

  return (
    <>
      <section className="about-page">
        <div className="about-wrapper">

          <div className="about-card">
            <img src={logo} alt="Khushi Finance" className="about-logo" />
            <h3 className="owner-name">RAVI H R</h3>
            <p className="owner-role">OWNER</p>

            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@khushifinance.com&su=Loan%20Application&body=Hi%20Khushi%20Finance%20Team,%0A%0AI%20want%20to%20apply%20for%20a%20loan.%0A%0AName:%0APhone:%0ALoan%20Type:%0AAmount:%0A%0AThanks"
              target="_blank"
              rel="noopener noreferrer"
              className="email-btn"
            >
              Email Us
            </a>

            <div className="social-icons">
              <a href="https://www.instagram.com/khushi_finance_official/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/Khushi__Finance" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552391963634" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/khushi-finance-88553a3b6/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="about-content2">
            <h2>About Khushi Finance</h2>
            <ul>
              <li>At Khushi Finance, we believe money decisions should never feel confusing, stressful, or rushed.</li>
              <li>We started Khushi Finance with one simple goal to help people make better financial choices with clarity and confidence. Whether you are planning your future, managing your monthly expenses, or looking for the right loan, our team is here to guide you honestly and responsibly.</li>
              <li>We take time to understand your income, expenses, commitments and life goals before suggesting any solution. Our advice is always practical, transparent and tailored to what truly works for you, not just what looks good on paper.</li>
              <li>From personal financial planning and cash flow support to home loans, personal loans and business funding, Khushi Finance stands by you at every stage of your financial journey as a trusted partner you can rely on today and in the years ahead.</li>
            </ul>

            <div className="about-buttons">
              <button className="apply-btn" onClick={() => setShowPopup(true)}>Apply for a Loan</button>
              <button className="talk-btn" onClick={() => setShowPopup(true)}>Talk to an Advisor</button>
            </div>
          </div>

        </div>
      </section>

      {showPopup && (
        <div className="au-popup-overlay">
          <div className="au-popup">
            <button className="au-close-btn" onClick={() => setShowPopup(false)}>
              <i className="fa-solid fa-x"></i>
            </button>
            <h3>Contact Us</h3>
            <button className="au-popup-btn-whatsapp" onClick={handleWhatsAppClick}>
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </button>
            <button className="au-popup-btn-call" onClick={handleCallClick}>
              <i className="fa-solid fa-phone"></i> Call Now
            </button>
          </div>
        </div>
      )}

      {showNumberPopup && (
        <div className="popup1-overlay">
          <div className="popup1">
            <button className="close-btn" onClick={() => { setShowNumberPopup(false); setCopied(false); }}>
              <i className="fa-solid fa-x"></i>
            </button>
            <p className="number-heading">Our contact number</p>
            <p className="phone-number">{PHONE_NUMBER}</p>
            <button className={`copy-number-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
              {copied
                ? <><i className="fa-solid fa-check"></i> Copied!</>
                : <><i className="fa-solid fa-copy"></i> Copy Number</>}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;