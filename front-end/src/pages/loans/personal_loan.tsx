import { useState } from "react";
import ContactPopup from "../../components/contactpopup";
import { Helmet } from "react-helmet-async";

const offerItems = [
    { img: "/assets/images/pl/apply.jpg", text: "Quick and easy online personal loan application" },
    { img: "/assets/images/pl/flexible.jpg", text: "Flexible loan amount and tenure" },
    { img: "/assets/images/pl/emi.jpg", text: "Structured EMI planning" },
    { img: "/assets/images/pl/support.jpg", text: "Support for salaried and self employed applicants" },
    { img: "/assets/images/pl/guidence.jpg", text: "End-to-end guidance till disbursal" },
];

const idealItems = [
    { img: "/assets/images/pl/edu.jpg", label: "Education and skill upgrades", pos: "top" },
    { img: "/assets/images/pl/pers.jpg", label: "Personal commitments", pos: "right" },
    { img: "/assets/images/pl/tra.jpg", label: "Travel and lifestyle expenses", pos: "bottom-right" },
    { img: "/assets/images/pl/med.jpg", label: "Medical and emergency needs", pos: "bottom-left" },
    { img: "/assets/images/pl/wed.jpg", label: "Wedding and family functions", pos: "left" },
];

const steps = [
    { img: "/assets/images/pl/step1.jpg", text: "Share your basic details", side: "left" },
    { img: "/assets/images/pl/step2.jpg", text: "Choose your preferred loan amount and tenure", side: "right" },
    { img: "/assets/images/pl/step3.jpg", text: "Get eligibility checked instantly", side: "left" },
    { img: "/assets/images/pl/step4.jpg", text: "Complete verification", side: "right" },
    { img: "/assets/images/pl/step5.jpg", text: "Receive disbursal support", side: "left" },
];

const PersonalLoan = () => {
    const [showContact, setShowContact] = useState<boolean>(false);

    return (
        <>
            <Helmet>
                <title>Personal Loans in Bangalore | Khushi Finance</title>
                <meta name="description" content="Looking for personal loans in Bangalore? Compare offers from trusted private loan lenders in Bangalore with low interest rates, quick approval, and flexible repayment options to meet your financial needs." />
            </Helmet>
            <main className="pl-page">

                {/* Hero */}
                <section className="pl-hero-new">
                    <div className="container-fluid ps-4 ps-md-5">
                        <div className="row align-items-center">
                            <div className="col-7 col-md-6 d-flex flex-column justify-content-center py-3">
                                <div className="d-flex align-items-center mb-3 mb-md-5 ms-1 ms-md-3">
                                    <img src="/assets/images/lo.png" alt="Khushi Finance" className="pl-hero-logomark" />
                                    <img src="/assets/images/kushi.png" alt="Khushi Finance" className="pl-hero-wordmark" />
                                </div>
                                <h1 className="pl-hero-heading mb-3 mb-md-5">
                                    PERSONAL<br />LOANS
                                </h1>
                                <button className="pl-btn-primary" onClick={() => setShowContact(true)}>
                                    Get Your Consultation Now
                                </button>
                            </div>
                            <div className="col-5 col-md-6 px-0 d-flex justify-content-end align-items-end">
                                <img src="/assets/images/pl/banner1.jpg" alt="Personal Loans" className="pl-hero-banner-img" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personal Loan Made Simple */}
                <section className="pl-simple py-3 py-md-4  position-relative overflow-hidden">
                    <img src="/assets/images/pl/leaf.png" alt="" className="pl-deco-left" />
                    <div className="container">
                        <h2 className="pl-sim-section-title text-center mb-3">
                            Personal <span className="pl-gold">Loan</span> Made <span className="pl-gold">Simple</span>
                        </h2>
                        <p className="pl-section-desc text-center mx-auto mb-4">
                            A personal loan helps you manage urgent or planned expenses — without
                            disturbing your long-term savings. We help you choose the right loan
                            structure, EMI plan, and tenure that fits your monthly cash flow.
                        </p>
                        <div className="pl-offer-box mx-auto px-3 px-md-5 py-3">
                            <h3 className="pl-offer-title text-center mb-3">What We Offer</h3>
                            {offerItems.map((item, i) => (
                                <div key={i} className={`pl-offer-item d-flex align-items-center gap-4 py-3${i < offerItems.length - 1 ? " border-bottom" : ""}`}>
                                    <img src={item.img} alt={item.text} className="pl-offer-icon flex-shrink-0" />
                                    <span className="pl-offer-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src="/assets/images/pl/plant.png" alt="" className="pl-deco-right" />
                </section>

                {/* Ideal For */}
                <section className="pl-ideal py-5">
                    <div className="container">
                        <h2 className="pl-section-title text-center mb-5">
                            <span className="pl-gold">Personal</span> Loan Is Ideal <span className="pl-gold">For</span>
                        </h2>
                        <div className="d-flex justify-content-center">
                            <div className="pl-ideal-ring position-relative">
                                {idealItems.map((item, i) => (
                                    <div key={i} className={`pl-ideal-item pl-ideal-${item.pos}`}>
                                        <img src={item.img} alt={item.label} className="pl-ideal-img" />
                                        <p className="pl-ideal-label mb-0">{item.label}</p>
                                    </div>
                                ))}
                                <div className="pl-ideal-center position-absolute d-flex align-items-center justify-content-center">
                                    <p className="mb-0">Ideal For</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="mx-4" />

                {/* Simple Application Process */}
                <section className="pl-process py-5">
                    <div className="container">
                        <h2 className="pl-section-title text-center mb-5">
                            Simple <span className="pl-gold">Application</span> Process
                        </h2>
                        <div className="d-flex flex-column">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`pl-step d-flex align-items-center gap-3 position-relative${step.side === "right" ? " pl-step-right" : ""}`}
                                >
                                    <img src={step.img} alt={step.text} className="pl-step-img flex-shrink-0" />
                                    <p className="pl-step-text mb-0">{step.text}</p>
                                    {i < steps.length - 1 && (
                                        <img
                                            src={`/assets/images/pl/s${i + 1}.png`}
                                            alt=""
                                            className={`pl-step-curve position-absolute pl-curve-${step.side}`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="mx-4" />

                {/* Transparent & Secure */}
                <section className="pl-transparent py-5">
                    <div className="container">
                        <h2 className="pl-section-title text-center mb-4">
                            Transparent <span className="pl-gold">&</span> Secure
                        </h2>
                        <div className="pl-transparent-box rounded px-3 px-md-5 py-3 mb-4">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <ul className="pl-transparent-list">
                                        <li>No confusing terms</li>
                                        <li>Clear repayment structure</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-12">
                                    <ul className="pl-transparent-list">
                                        <li>Professional financial guidance</li>
                                        <li>Secure data handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-4 justify-content-center mt-3">
                            <button className="pl-btn-teal" onClick={() => setShowContact(true)}>Apply For Personal Loan</button>
                        </div>
                    </div>
                </section>

                {/* Get Doubts Clarified */}
                <section className="pl-expert py-4 py-md-5">
                    <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-md-5 col-12 text-center">
                                <img src="/assets/images/pl/expert.jpg" alt="Expert" className="pl-expert-img" />
                            </div>
                            <div className="col-md-7 col-12">
                                <h3 className="pl-expert-title text-center mb-4">
                                    Get Your <span className="pl-gold">Doubts</span> Clarified<br />
                                    By Our <span className="pl-gold">Experts</span>
                                </h3>
                                <div className="text-center text-md-start ps-md-5">
                                    <button className="pl-btn-expert-teal" onClick={() => setShowContact(true)}>Talk to a Loan Expert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactPopup show={showContact} onClose={() => setShowContact(false)} />

            </main>
        </>
    );
};

export default PersonalLoan;