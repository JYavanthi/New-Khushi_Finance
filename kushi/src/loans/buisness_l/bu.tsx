import "./bu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import banner from "../../assets/bl/ban.png";
import leaf from "../../assets/bl/lf.png";

import hourglass from "../../assets/bl/hr.png";
import idea from "../../assets/bl/think.png";
import business from "../../assets/bl/plan.png";
import support from "../../assets/bl/lap.png";

import growth from "../../assets/bl/gro.png";
import working from "../../assets/bl/des.png";
import machinery from "../../assets/bl/eng.png";
import office from "../../assets/bl/desk.png";
import inventory from "../../assets/bl/sel.png";

import st1 from "../../assets/bl/st1.png";
import st2 from "../../assets/bl/st2.png";
import st3 from "../../assets/bl/st3.png";
import st4 from "../../assets/bl/st4.png";

import meetingImg from "../../assets/bl/dis.png";

const PHONE_NUMBER = "+919739871634";
const WHATSAPP_NUMBER = "919739871634";

const BusinessLoan = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showNumberPopup, setShowNumberPopup] = useState(false);
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();

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

    return (
        <>
            <section className="bl-container">

                {/* HERO SECTION */}
                <div className="bl-hero">
                    <img src={banner} alt="Business Loan" className="bl-bg" />
                    <button className="bl-btn" onClick={() => setShowPopup(true)}>APPLY NOW</button>
                </div>

                {/* BOTTOM DESCRIPTION */}
                <div className="bl-description">
                    <p>
                        Get the right business loan with expert guidance from Khushi
                        Finance. We help you choose a suitable loan, plan your EMIs
                        and complete your application smoothly.
                    </p>
                    <img src={leaf} alt="leaf" className="bl-leaf" />
                </div>

            </section>

            <section className="bl-details">

                <h2 className="bl-title">
                    Business <span>loan</span> made <span>simple</span>
                </h2>

                <div className="bl-box">

                    <div className="bl-row">
                        <img src={hourglass} alt="Flexible tenure" />
                        <div className="bl-d-text">
                            <h3>Flexible loan amount and repayment tenure</h3>
                            <p>Select the right funding and tenure based on your business goals</p>
                        </div>
                    </div>

                    <hr />

                    <div className="bl-row bl-row-reverse">
                        <div className="bl-d-text">
                            <h3>Flexible loan amount and repayment tenure</h3>
                            <p>Plan repayments clearly without affecting your daily operations</p>
                        </div>
                        <img src={idea} alt="Planning" />
                    </div>

                    <hr />

                    <div className="bl-row">
                        <img src={business} alt="MSME" />
                        <div className="bl-d-text">
                            <h3>Designed for self-employed, MSMEs and business owners</h3>
                            <p>Ideal for traders, professionals and small to mid-sized businesses.</p>
                        </div>
                    </div>

                    <hr />

                    <div className="bl-row bl-row-reverse">
                        <div className="bl-d-text">
                            <h3>End-to-end support till disbursal</h3>
                            <p>We take care of the process from eligibility check to final disbursal</p>
                        </div>
                        <img src={support} alt="Support" />
                    </div>

                </div>
            </section>

            <section className="bl-fybf-section">

                <h2 className="bl-fybf-title">
                    <span>Fund</span> your <span>business</span> for-
                </h2>

                <div className="bl-fybf-container">

                    <div className="bl-fybf-row">
                        <img src={growth} alt="" />
                        <h3>Business growth and expansion</h3>
                    </div>

                    <img src={st1} className="bl-fybf-string" alt="" />

                    <div className="bl-fybf-row bl-fybf-row-reverse">
                        <h3>Working capital requirements</h3>
                        <img src={working} alt="" />
                    </div>

                    <img src={st2} className="bl-fybf-string" alt="" />

                    <div className="bl-fybf-row">
                        <img src={machinery} alt="" />
                        <h3>Machinery and equipment purchase</h3>
                    </div>

                    <img src={st3} className="bl-fybf-string" alt="" />

                    <div className="bl-fybf-row bl-fybf-row-reverse">
                        <h3>Office, showroom or branch setup</h3>
                        <img src={office} alt="" />
                    </div>

                    <img src={st4} className="bl-fybf-string" alt="" />

                    <div className="bl-fybf-row">
                        <img src={inventory} alt="" />
                        <h3>Inventory and operational needs</h3>
                    </div>

                </div>
            </section>

            <section className="bl-f-section">

                <div className="bl-f-container">

                    <div className="bl-f-left">
                        <h1 className="bl-f-title">Apply for a business loan today</h1>
                        <p className="bl-f-subtitle">
                            Apply for a business loan with Khushi Finance and power your
                            business growth with clarity, speed and confidence.
                        </p>
                    </div>

                    <div className="bl-f-right">
                        <img src={meetingImg} alt="Business Meeting" />
                    </div>

                </div>

                <div className="bl-f-btn-wrapper">
                    <button className="bl-f-btn bl-f-apply" onClick={() => setShowPopup(true)}>APPLY NOW</button>
                    <button className="bl-f-btn bl-f-contact" onClick={() => navigate("/cu")}>CONTACT US</button>
                </div>

            </section>

            {/* Contact Popup */}
            {showPopup && (
                <div className="bl-popup-overlay">
                    <div className="bl-popup">
                        <button className="bl-close-btn" onClick={() => setShowPopup(false)}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <h3>Contact Us</h3>

                        <button
                            className="bl-popup-btn-whatsapp"
                            onClick={handleWhatsAppClick}
                        >
                            <i className="fa-brands fa-whatsapp"></i> WhatsApp
                        </button>

                        <button className="bl-popup-btn-call" onClick={handleCallClick}>
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

export default BusinessLoan;