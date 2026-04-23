import React, { useState } from "react";
import ContactPopup from "../../components/contactpopup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const features = [
  {
    icon: "/assets/images/bl/hr.png",
    title: "Flexible loan amount and repayment tenure",
    desc: "Select the right funding and tenure based on your business goals",
    align: "left",
  },
  {
    icon: "/assets/images/bl/think.png",
    title: "Structured EMI planning",
    desc: "Plan repayments clearly without affecting your daily operations",
    align: "right",
  },
  {
    icon: "/assets/images/bl/plan.png",
    title: "Designed for self-employed, MSMEs and business owners",
    desc: "Ideal for traders, professionals and small to mid-sized businesses.",
    align: "left",
  },
  {
    icon: "/assets/images/bl/lap.png",
    title: "End-to-end support till disbursal",
    desc: "We take care of the process from eligibility check to final disbursal",
    align: "right",
  },
];

const fundItems = [
  { icon: "/assets/images/bl/gro.png", label: "Business growth and expansion", trail: "/assets/images/bl/st1.png", align: "left" },
  { icon: "/assets/images/bl/des.png", label: "Working capital requirements", trail: "/assets/images/bl/st2.png", align: "right" },
  { icon: "/assets/images/bl/eng.png", label: "Machinery and equipment purchase", trail: "/assets/images/bl/st3.png", align: "left" },
  { icon: "/assets/images/bl/desk.png", label: "Office, showroom or branch setup", trail: "/assets/images/bl/st4.png", align: "right" },
  { icon: "/assets/images/bl/sel.png", label: "Inventory and operational needs", trail: null, align: "left" },
];

const BusinessLoan = () => {

  const [showContact, setShowContact] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Business Loans in Bangalore | Khushi Finance</title>
        <meta name="description" content="Discover business loans in Bangalore that can help with startup, expansion, or working capital needs for expanding companies. These loans provide affordable interest rates, speedy approvals, and flexible repayment alternatives." />
      </Helmet>

      <div className="bl-page">

        {/* Hero */}
        <section className="bl-hero">
          <img src="/assets/images/bl/ban.png" alt="Business Loan Banner" className="bl-hero-bg" />
          <div className="bl-hero-btn-wrap">
            <a className="bl-btn bl-btn-gold" onClick={() => setShowContact(true)}>
              APPLY NOW
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="py-1 py-md-3 px-3">
          <div className="container-fluid">
            <div className="row align-items-center g-2">
              <div className="col-9 col-md-10">
                <p className="bl-intro-text mb-0">
                  Get the right business loan with expert guidance from Khushi Finance.
                  We help you choose a suitable loan, plan your EMIs and complete your
                  application smoothly.
                </p>
              </div>
              <div className="col-3 col-md-2 text-end">
                <img src="/assets/images/bl/lf.png" alt="" className="bl-intro-leaf" />
              </div>
            </div>
          </div>
        </section>

        <hr className="bl-divider" />

        {/* Business Loan Made Simple */}
        <section className="py-4 py-md-5 px-3">
          <div className="container">
            <h2 className="bl-section-title">
              Business <span className="bl-gold">loan</span> made <span className="bl-gold">simple</span>
              <div className="bl-title-underline"></div>
            </h2>

            <div className="bl-simple-box">
              {features.map((f, i) => (
                <React.Fragment key={i}>
                  <div className={`bl-feature ${f.align === "right" ? "bl-feature-right" : ""}`}>
                    <img src={f.icon} alt={f.title} className="bl-feature-icon" />
                    <div className="bl-feature-text">
                      <h3 className="bl-feature-title">{f.title}</h3>
                      <p className="bl-feature-desc mb-0">{f.desc}</p>
                    </div>
                  </div>
                  {i < features.length - 1 && <hr className="bl-feature-sep" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <hr className="bl-divider" />

        {/* Fund Your Business */}
        <section className="py-4 py-md-5 px-3">
          <div className="container">
            <h2 className="bl-section-title">
              <span className="bl-gold">Fund</span> your <span className="bl-gold">business</span> for —
              <div className="bl-title-underline"></div>
            </h2>

            <div className="bl-fund-list">
              {fundItems.map((item, i) => (
                <div
                  key={i}
                  className={`bl-fund-item ${item.align === "right" ? "bl-fund-item-right" : ""}`}
                >
                  <img src={item.icon} alt={item.label} className="bl-fund-icon" />
                  <span className="bl-fund-label">{item.label}</span>
                  {item.trail && (
                    <img src={item.trail} alt="" className="bl-fund-trail" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="bl-divider" />

        {/* CTA Block */}
        <section className="bl-cta mx-3 mx-sm-2">
          <div className="container-fluid px-0">
            <div className="row g-0">
              <div className="col-6 bl-cta-left">
                <h2 className="bl-cta-title">Apply for a business loan today</h2>
                <p className="bl-cta-desc mb-0">
                  Apply for a business loan with Khushi Finance and power your business
                  growth with clarity, speed and confidence.
                </p>
              </div>
              <div className="col-6 bl-cta-right">
                <img src="/assets/images/bl/dis.png" alt="Business meeting" className="bl-cta-img" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 py-4 px-3">
          <a className="bl-btn bl-btn-gold" onClick={() => setShowContact(true)}>APPLY NOW</a>
          <a className="bl-btn bl-btn-teal" onClick={() => navigate('/contact-us')}>CONTACT US</a>
        </div>
        <ContactPopup show={showContact} onClose={() => setShowContact(false)} />
      </div>
    </>
  );
};

export default BusinessLoan;