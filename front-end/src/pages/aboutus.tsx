const kushilogo = "/assets/images/logo.png";
import { useState } from "react";
import ContactPopup from "../components/contactpopup";
import { Helmet } from "react-helmet-async";


const AboutUs = () => {
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Best Home Loan | Khushi Finance</title>
        <meta name="description" content="Look for the best house loan with easy qualifying, flexible tenure, and reasonable interest rates. To get rapid approvals and reasonable EMIs for your ideal home purchase, compare lenders." />
      </Helmet>
      <main className="about-page py-1 py-md-4">
        <div className="container py-4">
          <div className="row g-4 align-items-start">

            {/* Left Card */}
            <div className="col-12 col-md-5 d-flex justify-content-center">
              <div className="about-card text-center p-4 w-100">
                <div className="mb-4">
                  <img src={kushilogo} alt="Khushi Finance Logo" className="about-logo" />
                </div>

                <h3 className="about-owner-name mb-1">RAVI H R</h3>
                <p className="about-owner-role mb-4">OWNER</p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@khushifinance.com&su=Loan%20Application&body=Hi%20Khushi%20Finance%20Team,%0A%0AI%20want%20to%20apply%20for%20a%20loan.%0A%0AName:%0APhone:%0ALoan%20Type:%0AAmount:%0A%0AThanks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-email-btn d-inline-block mb-4"
                >
                  Email Us
                </a>

                <div className="about-socials d-flex justify-content-center gap-4 mt-4">
                  <a href="https://www.instagram.com/khushi_finance_official/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://x.com/Khushi__Finance" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=61552391963634" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/khushi-finance-88553a3b6/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-12 col-md-7 ps-md-5">
              <h2 className="about-title mb-4">About Khushi Finance</h2>

              <ul className="about-points ps-3 mb-4">
                <li>At Khushi Finance, we believe money decisions should never feel confusing, stressful, or rushed.</li>
                <li>We started Khushi Finance with one simple goal to help people make better financial choices with clarity and confidence. Whether you are planning your future, managing your monthly expenses, or looking for the right loan, our team is here to guide you honestly and responsibly.</li>
                <li>We take time to understand your income, expenses, commitments and life goals before suggesting any solution. Our advice is always practical, transparent and tailored to what truly works for you, not just what looks good on paper.</li>
                <li>From personal financial planning and cash flow support to home loans, personal loans and business funding, Khushi Finance stands by you at every stage of your financial journey as a trusted partner you can rely on today and in the years ahead.</li>
              </ul>

              <div className="d-flex flex-wrap gap-3">
                <button className="about-btn-primary" onClick={() => setShowContact(true)}>
                  Apply for a Loan
                </button>
                <button className="about-btn-secondary" onClick={() => setShowContact(true)}>
                  Talk to an Advisor
                </button>
              </div>
            </div>

          </div>
        </div>
        <ContactPopup show={showContact} onClose={() => setShowContact(false)} />
      </main>
    </>
  );
};

export default AboutUs;