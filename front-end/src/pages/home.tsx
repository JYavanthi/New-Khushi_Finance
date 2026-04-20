import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeroSlider from "./heroslider";
import ContactPopup from "../components/contactpopup";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const loanRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [showContact, setShowContact] = useState<boolean>(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      setTimeout(() => el?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Home Loan in Bangalore | Khushi Finance</title>
        <meta name="description" content="Searching for a home loan in Bangalore? Explore various options to discover the best home loan interest rates in India. Enjoy the benefits of flexible EMIs, swift approval processes, and budget-friendly financing to make your dream home a reality." />
      </Helmet>
      {/* ── HERO ── */}
      <section className="kf-hero d-flex align-items-center">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center ">
            <div className="col-12 col-md-6 ps-md-5 ps-3 pe-md-0 pe-2 ">
              <h1 className="kf-hero-h1">
                We Help You Take <br />
                Control of Your Finances
              </h1>
              <p className="kf-hero-sub">
                Clarity, control, and confidence for your financial journey.
              </p>
              <div className="kf-hero-btn-group">
                <div className="d-flex flex-column gap-3 mt-3">
                  <button
                    className="kf-btn-consult d-flex align-items-center gap-2 gap-md-4"
                    onClick={() => setShowContact(true)}
                  >
                    Book a Free Consultation
                    <span className="kf-phone-badge">
                      <i className="fa-solid fa-phone" />
                    </span>
                  </button>
                  <button
                    className="kf-btn-loan"
                    onClick={() => loanRef.current?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Check Loan Options
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-end ">
              <img src="/assets/images/hero/hero.png" alt="Hero" className="kf-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white py-0 kf-features-section">
        <div className="row g-0">
          <div className="col-12 col-md-6">
            <img src="/assets/images/hero/sec2/calculator.png" alt="Finance Calculation" className="w-100 kf-calc-img" />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center kf-features-box gap-md-4">
            {[
              { icon: "/assets/images/hero/sec2/search_icon.png", label: "No Hidden Charges" },
              { icon: "/assets/images/hero/sec2/trust_icon.png", label: "100% Transparent Advice" },
              { icon: "/assets/images/hero/sec2/verification_icon.png", label: "RBI-Compliant Loan Partners" },
              { icon: "/assets/images/hero/sec2/lead_icon.png", label: "Personalized Financial Guidance" },
            ].map(({ icon, label }) => (
              <div key={label} className="d-flex align-items-center gap-3 kf-feature-item">
                <img src={icon} alt={label} className="kf-feature-icon" />
                <p className="mb-0 kf-feature-text">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT BANNER ── */}
      <section
        className="kf-about-banner text-center"
        style={{ backgroundImage: "url(/assets/images/hero/moneyBg.png)" }}
      >
        <div className="kf-about-inner py-5 px-3">
          <h2 className="kf-about-h2">Smart Financial Solutions, Built Around You</h2>
          <div className="d-flex align-items-center justify-content-center gap-3 gap-md-4">
            <img src="/assets/images/lo.png" alt="logo" className="kf-lo" />
            <p className="kf-about-p mb-0">
              At Khushi Finance, we simplify money decisions. Whether you're planning your
              finances or looking for the right loan, our experts guide you with unbiased
              advice and solutions tailored to your needs.
            </p>
            <img src="/assets/images/lo.png" alt="logo" className="kf-lo kf-lo-flip" />
          </div>
        </div>
      </section>

      {/* ── SLIDER ── */}
      <HeroSlider />

      {/* ── LOAN ASSISTANCE ── */}
      <section id="loan" ref={loanRef} className="kf-loan">
        <div className="kf-loan-bg">
          <div className="row g-0 align-items-end justify-content-center">
            <div className="col-md-4 d-flex justify-content-center kf-loan-img-col">
              <img src="/assets/images/hero/assist/loanas.png" alt="Loan Assistance" className="kf-loan-img" />
            </div>
            <div className="col-12 col-md-5 ps-3 kf-loan-content-col mb-md-4">
              <h2 className="kf-loan-title">LOAN ASSISTANCE</h2>
              <div className="kf-loan-pill-group">
                <div className="d-flex flex-column gap-3 align-items-end">
                  {[
                    { icon: "/assets/images/hero/assist/bg_icon.png", label: "Personal Loans", path: "/loans/personal" },
                    { icon: "/assets/images/hero/assist/h_icon.png", label: "Home Loans", path: "/loans/home" },
                    { icon: "/assets/images/hero/assist/b_icon.png", label: "Business Loans", path: "/loans/business" },
                    { icon: "/assets/images/hero/assist/ed_icon.png", label: "Education Loans", path: "/loans/student" },
                  ].map(({ icon, label, path }) => (
                    <div key={label} className="kf-loan-pill d-flex align-items-center gap-3">
                      <img src={icon} alt={label} className="kf-pill-icon" />
                      <button className="kf-pill-btn" onClick={() => navigate(path)}>{label}</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="kf-loan-subtitle text-center mt-2 mx-2">
          We compare lenders, negotiate for you, and simplify the process.
        </p>
      </section>

      {/* ── WHY KHUSHI ── */}
      <section
        className="kf-why d-flex align-items-center"
        style={{ backgroundImage: "url(/assets/images/hero/why_bg.png)" }}
      >
        <div className="container-fluid px-md-5 px-3 py-3 py-md-5">
          <h2 className="kf-why-h2">Why Khushi Finance ?</h2>
          <ul className="kf-why-list list-unstyled">
            {["Client-first, not commission-first", "Simple explanations, no jargon",
              "Trusted lender network", "End-to-end support", "100% transparent process"].map(item => (
                <li key={item} className="kf-why-li">{item}</li>
              ))}
          </ul>
        </div>
      </section>

      {/* ── CLARITY ── */}
      <section className="kf-clarity">
        <div className="row g-0 align-items-stretch ">
          <div className="col-12 col-md-6 ">
            <img src="/assets/images/hero/money.png" alt="Holding money" className="kf-clarity-img" />
          </div>
          <div className="col-12 col-md-6 kf-clarity-text d-flex flex-column justify-content-center px-1 px-md-5 py-1 py-md-3">
            <h2 className="kf-clarity-h2 px-4">Your money deserves clarity, not confusion.</h2>
            <p className="kf-clarity-p px-4">
              Thousands of Indians struggle with poor financial advice. We're here to change that —
              with honesty, empathy, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        className="kf-how py-5"
        style={{ backgroundImage: "url(/assets/images/hero/how.png)" }}
      >
        <h2 className="kf-how-title text-center mb-5">HOW IT WORKS?</h2>
        <div className="container">
          <div className="row justify-content-center px-2 px-md-5" style={{ gap: "clamp(30px, 5vw, 60px) clamp(20px, 4vw, 50px)" }}>
            {[
              { icon: "/assets/images/hero/works/bc_icon.png", label: "Book a Consultation", cls: "light" },
              { icon: "/assets/images/hero/works/fp_icon.png", label: "Understand Your Financial Picture", cls: "orange" },
              { icon: "/assets/images/hero/works/ta_icon.png", label: "Get Tailored Advice / Loan Options", cls: "orange" },
              { icon: "/assets/images/hero/works/es_icon.png", label: "We Help You Execute Smoothly", cls: "light", smallIcon: true },
            ].map(({ icon, label, cls, smallIcon }) => (
              <div key={label} className="col-5">
                <div className={`kf-step-card kf-step-${cls} text-center`}>
                  <img src={icon} alt={label} className={`kf-step-icon mb-2 ${smallIcon ? "kf-step-icon-sm" : ""}`} />                  <p className="kf-step-label mb-0">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="kf-cta"
        style={{ backgroundImage: "url(/assets/images/hero/control_bg.png)" }}
      >
        <div className="d-flex justify-content-center">
          <div className="kf-cta-title">
            <p className="kf-cta-ready mb-1 mb-md-3">Ready to take</p>
            <h1 className="kf-cta-control mb-0">CONTROL?</h1>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <img src="/assets/images/hero/control.png" alt="Expert" className="kf-cta-img" />
          <div className="kf-cta-desc">
            <p className="kf-cta-sub mb-0">Speak to a certified financial expert today.</p>
            <div className="d-flex justify-content-end">
              <button className="kf-cta-btn" onClick={() => navigate("/contact-us")}>
                Book Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT POPUP ── */}
      <ContactPopup show={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Hero;