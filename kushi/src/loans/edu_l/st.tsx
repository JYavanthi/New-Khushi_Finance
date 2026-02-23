import "./st.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import banner from "../../assets/sl/slb.jpg";

import icon1 from "../../assets/sl/mon.jpg";
import icon2 from "../../assets/sl/gui.jpg";
import icon3 from "../../assets/sl/sup.jpg";
import icon4 from "../../assets/sl/cla.jpg";
import icon5 from "../../assets/sl/montree.jpg";

import step1 from "../../assets/sl/stude.jpg";
import step2 from "../../assets/sl/elgi.jpg";
import step3 from "../../assets/sl/lp.jpg";
import step4 from "../../assets/sl/ds.jpg";
import step5 from "../../assets/sl/abs.jpg";
import step6 from "../../assets/sl/ads.jpg";

import sg1 from "../../assets/sl/sg1.png";
import sg2 from "../../assets/sl/sg2.png";
import sg3 from "../../assets/sl/sg3.png";
import sg4 from "../../assets/sl/sg4.png";
import sg5 from "../../assets/sl/sg5.png";

import students from "../../assets/sl/discu.jpg";

const PHONE_NUMBER = "+919739871634";
const WHATSAPP_NUMBER = "919739871634";

const StudentLoan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNumberPopup, setShowNumberPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

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
      <section className="sl-hero">
        <img src={banner} alt="Student Loan" className="sl-bg" />
        <button className="sl-btn" onClick={() => setShowPopup(true)}>APPLY NOW</button>
      </section>

      <section className="ep-section">

        <h2 className="ep-title">
          Education <span>loan</span> Planning
        </h2>

        <p className="ep-subtitle">
          Get clear advice on how much to borrow and how to structure your
          student loan responsibly.
        </p>

        <div className="ep-box">

          <div className="ep-row">
            <img src={icon1} alt="" />
            <div>
              <h3>Loan options for India and abroad studies</h3>
              <p>Support for undergraduate, postgraduate and overseas education funding.</p>
            </div>
          </div>

          <div className="ep-row-rev">
            <div>
              <h3>Flexible repayment and moratorium guidance</h3>
              <p>We help you understand study-period moratorium and post-study repayment planning.</p>
            </div>
            <img src={icon2} alt="" />
          </div>

          <div className="ep-row">
            <img src={icon3} alt="" />
            <div>
              <h3>Co-applicant and eligibility support</h3>
              <p>Clear assistance for parent or guardian co-applicant requirements.</p>
            </div>
          </div>

          <div className="ep-row-rev">
            <div>
              <h3>Interest and subsidy clarity</h3>
              <p>Get transparent guidance on interest structure and available government benefits.</p>
            </div>
            <img src={icon4} alt="" />
          </div>

          <div className="ep-row">
            <img src={icon5} alt="" />
            <div>
              <h3>Interest and subsidy clarity</h3>
              <p>Get transparent guidance on interest structure and available government benefits.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="sa-section">

        <h2 className="sa-title">
          Steps <span>to </span>Apply <span>at</span> Khushi <span>Finance</span>
        </h2>

        <div className="sa-container">

          <div className="sa-step-left">
            <img src={step1} alt="" className="sa-img" />
            <div>
              <h3>Share your study details</h3>
              <p>Tell us your course, college or university, country of study and estimated expenses.</p>
            </div>
          </div>

          <img src={sg1} alt="" className="sa-string-1" />

          <div className="sa-step-right">
            <div>
              <h3>Free eligibility check</h3>
              <p>We review your profile, co-applicant details and basic financials to confirm loan eligibility.</p>
            </div>
            <img src={step2} alt="" className="sa-img" />
          </div>

          <img src={sg2} alt="" className="sa-string-2" />

          <div className="sa-step-left">
            <img src={step3} alt="" className="sa-img" />
            <div>
              <h3>Get the right loan plan</h3>
              <p>We suggest suitable loan amount, repayment structure and moratorium period.</p>
            </div>
          </div>

          <img src={sg3} alt="" className="sa-string-3" />

          <div className="sa-step-right">
            <div>
              <h3>Document support</h3>
              <p>We help you prepare and verify all required documents for student and co-applicant.</p>
            </div>
            <img src={step4} alt="" className="sa-img" />
          </div>

          <img src={sg4} alt="" className="sa-string-4" />

          <div className="sa-step-left">
            <img src={step5} alt="" className="sa-img" />
            <div>
              <h3>Application & bank submission</h3>
              <p>Your loan application is filed and submitted to the right lending partner.</p>
            </div>
          </div>

          <img src={sg5} alt="" className="sa-string-5" />

          <div className="sa-step-right">
            <div>
              <h3>Approval and disbursal support</h3>
              <p>We follow up till approval and guide you till the loan amount is disbursed.</p>
            </div>
            <img src={step6} alt="" className="sa-img" />
          </div>

        </div>
      </section>

      <section className="bl-loan">
        <div className="l-container">
          <div className="l-content">

            <div className="l-image">
              <img src={students} alt="Students" />
            </div>

            <div className="l-buttons">
              <button className="l-btn l-btn-teal" onClick={() => setShowPopup(true)}>
                Talk to an Education Loan Advisor
              </button>

              <button className="l-btn l-btn-orange" onClick={() => navigate("/cu")}>
                Get a Free Loan Planning Call
              </button>

              <button className="l-btn l-btn-teal" onClick={() => setShowPopup(true)}>
                Apply for Student Loan Assistance
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Popup */}
      {showPopup && (
        <div className="sl-popup-overlay">
          <div className="sl-popup">
            <button className="sl-close-btn" onClick={() => setShowPopup(false)}>
              <i className="fa-solid fa-x"></i>
            </button>
            <h3>Contact Us</h3>

            <button
              className="sl-popup-btn-whatsapp"
              onClick={handleWhatsAppClick}
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </button>

            <button className="sl-popup-btn-call" onClick={handleCallClick}>
              <i className="fa-solid fa-phone"></i> Call Now
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

    </>
  );
};

export default StudentLoan;