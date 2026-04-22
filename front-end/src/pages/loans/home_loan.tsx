import { useState } from "react";
import ContactPopup from "../../components/contactpopup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const simpleItems = [
  {
    img: "/assets/images/hl/apply.jpg",
    title: "Quick and easy online home loan application",
    desc: "Apply digitally with guided support and minimal paperwork.",
    reverse: false,
  },
  {
    img: "/assets/images/hl/flex.jpg",
    title: "Flexible loan amount and tenure",
    desc: "Select a loan amount and repayment period that fits your budget.",
    reverse: true,
  },
  {
    img: "/assets/images/hl/emi.jpg",
    title: "Structured EMI planning",
    desc: "Plan your monthly EMI clearly and stay financially comfortable.",
    reverse: false,
  },
  {
    img: "/assets/images/hl/support.jpg",
    title: "Support for salaried and self-employed applicants",
    desc: "We assist working professionals and business owners. End-to-end guidance till disbursal.",
    reverse: true,
  },
];

const HomeLoan = () => {
  const [showContact, setShowContact] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Home Loan in Bangalore | Khushi Finance</title>
        <meta name="description" content="Home loan in Bangalore with the lowest home loan EMI options. To make your ideal home affordable and stress-free, compare lenders and take advantage of competitive rates, flexible tenure, and speedy approvals." />
      </Helmet>
      <main className="hl-page">

        {/* Hero */}
        <section className="hl-hero border-bottom">
          <div className="hl-hero-img-col">
            <img src="/assets/images/hl/home.jpg" alt="Home Loan" className="hl-hero-img" />
          </div>
          <div className="hl-hero-content">
            <h1 className="hl-hero-title">Home Loan</h1>
            <h2 className="hl-hero-sub">Own your dream home<br />with confidence</h2>
            <p className="hl-hero-desc">
              Get the right home loan with expert guidance from Khushi Finance.
              We help you choose the right housing loan, plan your EMIs and complete
              your application smoothly.
            </p>
            <button className="hl-btn-gold ms-auto" onClick={() => setShowContact(true)}>
              APPLY NOW
            </button>
          </div>
        </section>

        {/* Home Loan Made Simple */}
        <section className="py-4 py-md-5">
          <div className="container">
            <h2 className="hl-simple-title">
              <span className="hl-teal">Home</span> <span className="hl-gold">Loan</span> Made <span className="hl-gold">Simple</span>
            </h2>
            <hr className="hl-simple-divider" />
            {simpleItems.map((item, i) => (
              <div key={i} className={`hl-simple-row ${item.reverse ? "hl-row-reverse" : ""}`}>
                <div className="hl-simple-text">
                  <h4 className="hl-simple-item-title">{item.title}</h4>
                  <p className="hl-simple-item-desc mb-0">{item.desc}</p>
                </div>
                <img src={item.img} alt={item.title} className="hl-simple-icon" />
                {i < simpleItems.length - 1 && <div className="hl-item-divider" />}
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Banner */}
        <section className="hl-eli-banner my-3">
          <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center gap-4 px-2 text-center text-md-start">
              <img src="/assets/images/hl/eli.jpg" alt="Eligibility" className="hl-eli-img" />
              <p className="hl-eli-text mb-0">
                From eligibility check to approval and disbursal,<br />
                we support you fully.
              </p>
            </div>
          </div>
        </section>

        {/* Buy Build Switch */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-8 col-md-6">
                <h3 className="hl-buy-title">Buy, build or switch your home loan</h3>
                <ul className="hl-buy-list">
                  <li>Home purchase loan</li>
                  <li>Construction home loan</li>
                  <li>Home loan balance transfer</li>
                  <li>Top-up on existing home loan</li>
                </ul>
              </div>
              <div className="col-4 col-md-6 text-center">
                <img src="/assets/images/hl/lt.jpg" alt="Home types" className="hl-buy-img" />
              </div>
            </div>
          </div>
        </section>

        <hr className="hl-section-divider" />

        {/* Start Journey */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-5 text-center">
                <img src="/assets/images/hl/fam.jpg" alt="Family" className="hl-journey-img" />
              </div>
              <div className="col-12 col-md-7 text-center text-md-end">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-end gap-3 d-md-block">
                  <img src="/assets/images/lo.png" alt="logo" className="hl-journey-logo" />
                  <h3 className="hl-journey-title">Start your home loan<br />journey today</h3>
                </div>
                <p className="hl-journey-desc mb-0">
                  Apply for a home loan with Khushi Finance and move closer
                  to your dream home with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="hl-section-divider" />

        {/* CTA Buttons */}
        <section className="py-4 pb-md-5">
          <div className="container">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 gap-sm-5">
              <button className="hl-cta-btn-gold" onClick={() => setShowContact(true)}>
                APPLY NOW
              </button>
              <button className="hl-cta-btn-teal" onClick={() => navigate('/contact-us')}>
                CONTACT US
              </button>
            </div>
          </div>
        </section>

        <ContactPopup show={showContact} onClose={() => setShowContact(false)} />

      </main>
    </>
  );
};

export default HomeLoan;