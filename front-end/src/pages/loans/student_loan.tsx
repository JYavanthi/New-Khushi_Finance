import { useState, Fragment } from "react";
import ContactPopup from "../../components/contactpopup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const features = [
  {
    img: "/assets/images/sl/mon.jpg",
    title: "Loan options for India and abroad studies",
    desc: "Support for undergraduate, postgraduate and overseas education funding.",
    align: "left",
  },
  {
    img: "/assets/images/sl/gui.jpg",
    title: "Flexible repayment and moratorium guidance",
    desc: "We help you understand study-period moratorium and post-study repayment planning.",
    align: "right",
  },
  {
    img: "/assets/images/sl/sup.jpg",
    title: "Co-applicant and eligibility support",
    desc: "Clear assistance for parent or guardian co-applicant requirements.",
    align: "left",
  },
  {
    img: "/assets/images/sl/cla.jpg",
    title: "Interest and subsidy clarity",
    desc: "Get transparent guidance on interest structure and available government benefits.",
    align: "right",
  },
  {
    img: "/assets/images/sl/montree.jpg",
    title: "Collateral and security guidance",
    desc: "We clarify when collateral is needed and how to plan for secured or unsecured loans.",
    align: "left",
  },
];

const steps = [
  {
    img: "/assets/images/sl/stude.jpg",
    title: "Share your study details",
    desc: "Tell us your course, college or university, country of study and estimated expenses.",
    trail: "/assets/images/sl/sg1.png",
    align: "left",
  },
  {
    img: "/assets/images/sl/elgi.jpg",
    title: "Free eligibility check",
    desc: "We review your profile, co-applicant details and basic financials to confirm loan eligibility.",
    trail: "/assets/images/sl/sg2.png",
    align: "right",
  },
  {
    img: "/assets/images/sl/lp.jpg",
    title: "Get the right loan plan",
    desc: "We suggest the suitable loan amount, repayment structure and moratorium period based on your studies.",
    trail: "/assets/images/sl/sg3.png",
    align: "left",
  },
  {
    img: "/assets/images/sl/ds.jpg",
    title: "Document support",
    desc: "We help you prepare and verify all required documents for student and co-applicant.",
    trail: "/assets/images/sl/sg4.png",
    align: "right",
  },
  {
    img: "/assets/images/sl/abs.jpg",
    title: "Application & bank submission",
    desc: "Your loan application is filed and submitted to the right lending partner.",
    trail: "/assets/images/sl/sg5.png",
    align: "left",
  },
  {
    img: "/assets/images/sl/ads.jpg",
    title: "Approval and disbursal support",
    desc: "We follow up till approval and guide you till the loan amount is disbursed.",
    trail: null,
    align: "right",
  },
];

const ctaButtons = [
  { label: "Talk to an Education Loan Advisor", variant: "teal", type: "popup" },
  { label: "Get a Free Loan Planning Call", variant: "gold", type: "link", link: "/contact-us" },
  { label: "Apply for Student Loan Assistance", variant: "teal", type: "popup" },
];

const StudentLoan = () => {

  const navigate = useNavigate();
  const [showContact, setShowContact] = useState<boolean>(false);
  return (
    <>
      <Helmet>
        <title>Education Loans in Bangalore | Khushi Finance</title>
        <meta name="description" content="Apply for education loans in Bangalore with quick approvals, flexible repayment options, and cheap interest rates. Finance postsecondary education in India or overseas with simple eligibility requirements and little paperwork." />
      </Helmet>
      <div className="sl-page">

        {/* Hero */}
        <section className="sl-hero">
          <img src="/assets/images/sl/slb.jpg" alt="Student Loan Banner" className="sl-hero-bg" />
          <div className="sl-hero-btn-wrap">
            <button className="sl-btn sl-btn-teal" onClick={() => setShowContact(true)}>
              APPLY NOW
            </button>
          </div>
        </section>

        {/* Education Loan Planning */}
        <section className="py-4 py-md-5">
          <div className="container">
            <h2 className="sl-section-title">
              Education <span className="sl-text-gold">loan</span> Planning
            </h2>
            <hr className="sl-title-rule" />
            <p className="sl-planning-sub text-center mx-auto mb-4">
              Get clear advice on how much to borrow and how to structure your
              student loan responsibly.
            </p>

            <div className="sl-features-box mx-auto">
              {features.map((f, i) => (
                <Fragment key={i}>
                  <div className={`sl-feature d-flex align-items-center gap-3 p-3${f.align === "right" ? " flex-row-reverse" : ""}`}>
                    <img src={f.img} alt={f.title} className="sl-feature-icon flex-shrink-0" />
                    <div className={`sl-feature-text${f.align === "right" ? " text-end" : ""}`}>
                      <h3 className="sl-feature-title">{f.title}</h3>
                      <p className="sl-feature-desc mb-0">{f.desc}</p>
                    </div>
                  </div>
                  {i < features.length - 1 && <hr className="sl-feature-sep m-0" />}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <hr className="sl-divider" />

        {/* Steps to Apply */}
        <section className="py-4 py-md-5">
          <div className="container">
            <h2 className="sl-section-title">
              Steps <span className="sl-text-gold"> to </span> Apply<span className="sl-text-gold">at</span> Khushi <span className="sl-text-gold">Finance</span>
            </h2>
            <hr className="sl-title-rule" />

            <div className="sl-steps-list mx-auto">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`sl-step d-flex align-items-start gap-3 pb-4 pb-md-5 position-relative${step.align === "right" ? " flex-row-reverse" : ""}`}
                >
                  <img src={step.img} alt={step.title} className="sl-step-icon flex-shrink-0" />
                  <div className={`sl-step-text pt-2${step.align === "right" ? " text-end" : ""}`}>
                    <h3 className="sl-step-title">{step.title}</h3>
                    <p className="sl-step-desc mb-0">{step.desc}</p>
                  </div>
                  {step.trail && (
                    <img
                      src={step.trail}
                      alt=""
                      className={`sl-step-trail position-absolute ${step.align === "right" ? "sl-trail-right" : "sl-trail-left"}`}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="sl-divider" />

        {/* CTA Block */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-5 col-12 text-center">
                <img src="/assets/images/sl/discu.jpg" alt="Students" className="sl-cta-img" />
              </div>
              <div className="col-md-7 col-12">
                <div className="d-flex flex-column gap-3 ps-md-2">
                  {ctaButtons.map((btn, i) => (
                    <button
                      key={i}
                      className={`sl-btn sl-btn-${btn.variant} sl-btn-block`}
                      onClick={() => {
                        if (btn.type === "popup") {
                          setShowContact(true);
                        } else {
                          navigate(btn.link as string);
                        }
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactPopup show={showContact} onClose={() => setShowContact(false)} />
      </div>
    </>
  );
};

export default StudentLoan;