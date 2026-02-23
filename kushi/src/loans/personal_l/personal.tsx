import "./personal.css";
import { useState } from "react";

import banner from "../../assets/pl/banner.jpg";
import lo from "../../assets/fp/lo.png";
import ku from "../../assets/pl/kushi.png";

import leaf from "../../assets/pl/leaf.png";
import plant from "../../assets/pl/plant.png";
import apply from "../../assets/pl/apply.jpg";
import flexible from "../../assets/pl/flexible.jpg";
import emi from "../../assets/pl/emi.jpg";
import support from "../../assets/pl/support.jpg";
import guidance from "../../assets/pl/guidence.jpg";

import edu from "../../assets/pl/edu.jpg";
import wedding from "../../assets/pl/wed.jpg";
import medical from "../../assets/pl/med.jpg";
import travel from "../../assets/pl/tra.jpg";
import personal from "../../assets/pl/pers.jpg";

import step1 from "../../assets/pl/step1.jpg";
import step2 from "../../assets/pl/step2.jpg";
import step3 from "../../assets/pl/step3.jpg";
import step4 from "../../assets/pl/step4.jpg";
import step5 from "../../assets/pl/step5.jpg";
import s1 from "../../assets/pl/s1.png";
import s2 from "../../assets/pl/s2.png";
import s3 from "../../assets/pl/s3.png";
import s4 from "../../assets/pl/s4.png";

import expertImg from "../../assets/pl/expert.jpg";

const PHONE_NUMBER = "+919739871634";
const WHATSAPP_NUMBER = "919739871634";

const PersonalLoan = () => {
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
            {/* BANNER SECTION */}
            <section className="pl-banner">
                <img src={banner} alt="Personal Loan Banner" className="pl-bg" />

                <div className="pl-logo">
                    <img src={lo} alt="Khushi Finance logo" className="lo2" />
                    <img src={ku} alt="Kushi Finance" className="ku" />
                </div>

                <div className="pl-buttons">
                    <button className="btn-primary" onClick={() => setShowPopup(true)}>Get Your Consultation Now</button>
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section className="pl-details">

                <img src={leaf} alt="" className="leaf-img" />
                <img src={plant} alt="" className="plant-img" />

                <h2 className="pl-title">
                    Personal <span>Loan</span> Made <span>Simple</span>
                </h2>

                <p className="pl-desc">
                    A personal loan helps you manage urgent or planned expenses—without
                    disturbing your long-term savings. We help you choose the right loan
                    structure, EMI plan, and tenure that fits your monthly cash flow.
                </p>

                <div className="pl-box">
                    <h3>What We Offer</h3>

                    <div className="pl-item">
                        <img src={apply} alt="" />
                        <p>Quick and easy online personal loan application</p>
                    </div>

                    <div className="pl-item">
                        <img src={flexible} alt="" />
                        <p>Flexible loan amount and tenure</p>
                    </div>

                    <div className="pl-item">
                        <img src={emi} alt="" />
                        <p>Structured EMI planning</p>
                    </div>

                    <div className="pl-item">
                        <img src={support} alt="" />
                        <p>Support for salaried and self employed applicants</p>
                    </div>

                    <div className="pl-item">
                        <img src={guidance} alt="" />
                        <p>End-to-end guidance till disbursal</p>
                    </div>
                </div>
            </section>

            <section className="ideal-section">
                <h2 className="ideal-title">
                    <span>Personal</span> Loan Is Ideal <span>For</span>
                </h2>

                <div className="ideal-circle">

                    <div className="ideal-item ideal-top">
                        <img src={edu} alt="" />
                        <p>Education and skill upgrades</p>
                    </div>

                    <div className="ideal-item ideal-right">
                        <img src={personal} alt="" />
                        <p>Personal commitments</p>
                    </div>

                    <div className="ideal-item ideal-bottom-right">
                        <img src={travel} alt="" />
                        <p>Travel and lifestyle expenses</p>
                    </div>

                    <div className="ideal-item ideal-bottom-left">
                        <img src={medical} alt="" />
                        <p>Medical and emergency needs</p>
                    </div>

                    <div className="ideal-item ideal-left">
                        <img src={wedding} alt="" />
                        <p>Wedding and family functions</p>
                    </div>

                    <div className="ideal-center">Ideal For</div>
                </div>
            </section>

            <section className="process-section">
                <h2 className="process-title">
                    Simple <span>Application</span> Process
                </h2>

                <div className="process-steps">

                    <div className="process-row-left">
                        <img src={step1} alt="" className="step1" />
                        <p>Share your basic details</p>
                    </div>

                    <img src={s1} className="process-string s1-left-string" alt="" />

                    <div className="process-row-right">
                        <img src={step2} alt="" className="step2" />
                        <p>Choose your preferred loan amount and tenure</p>
                    </div>

                    <img src={s2} className="process-string s2-right-string" alt="" />

                    <div className="process-row-left">
                        <img src={step3} alt="" className="step3" />
                        <p>Get eligibility checked instantly</p>
                    </div>

                    <img src={s3} className="process-string s3-left-string" alt="" />

                    <div className="process-row-right">
                        <img src={step4} alt="" className="step4" />
                        <p>Complete verification</p>
                    </div>

                    <img src={s4} className="process-string s4-right-string" alt="" />

                    <div className="process-row-left">
                        <img src={step5} alt="" className="step5" />
                        <p>Receive disbursal support</p>
                    </div>

                </div>
            </section>

            <section className="ts-section">

                <h2 className="ts-title">
                    Transparent <span>&</span> Secure
                </h2>

                <div className="ts-info-box">
                    <ul>
                        <li>No confusing terms</li>
                        <li>Clear repayment structure</li>
                    </ul>
                    <ul>
                        <li>Professional financial guidance</li>
                        <li>Secure data handling</li>
                    </ul>
                </div>

                <div className="ts-buttons">
                    <button className="btn-one" onClick={() => setShowPopup(true)}>Apply For Personal Loan</button>
                </div>

                <div className="ts-bottom">
                    <div className="ts-image">
                        <img src={expertImg} alt="Loan Expert" />
                    </div>

                    <div className="ts-text">
                        <h3>
                            Get Your <span>Doubts</span> Clarified <br />
                            By Our <span>Experts</span>
                        </h3>
                        <button className="btn-expert" onClick={() => setShowPopup(true)}>
                            Talk to a Loan Expert
                        </button>
                    </div>
                </div>

            </section>

            {/* Contact Popup */}
            {showPopup && (
                <div className="pl-popup-overlay">
                    <div className="pl-popup">
                        <button className="pl-close-btn" onClick={() => setShowPopup(false)}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <h3>Contact Us</h3>

                        <button
                            className="pl-popup-btn-whatsapp"
                            onClick={handleWhatsAppClick}
                        >
                            <i className="fa-brands fa-whatsapp"></i> WhatsApp
                        </button>

                        <button className="pl-popup-btn-call" onClick={handleCallClick}>
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

export default PersonalLoan;