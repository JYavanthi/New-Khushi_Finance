import "./terms.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsPolicies = () => {

  const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);


  return (
    <section className="tp-page">

      {/* ===== TERMS SECTION ===== */}
      <div id="terms" className="tp-container">

        <h1 className="tp-main-title">Terms & Conditions</h1>
        <p className="tp-updated">Last updated: January 2026</p>

        <div className="tp-section">
          <h2>1. Introduction</h2>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our
            services.
          </p>
        </div>

        <div className="tp-section">
          <h2>2. Use of Our Services</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use.
          </p>
        </div>

        <div className="tp-section">
          <h2>3. Intellectual Property</h2>
          <p>
            All content, logos, designs, and materials on this website are the
            property of the company and may not be reused without permission.
          </p>
        </div>

      </div>


      {/* ===== PRIVACY SECTION ===== */}
      <div id="privacy" className="tp-container">

        <h1 className="tp-main-title">Privacy Policy</h1>

        <div className="tp-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as name, email address, and
            usage data to improve our services.
          </p>
        </div>

        <div className="tp-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to provide better services, respond to
            inquiries, and improve user experience.
          </p>
        </div>

        <div className="tp-section">
          <h2>3. Data Protection</h2>
          <p>
            We take appropriate security measures to protect your data against
            unauthorized access or disclosure.
          </p>
        </div>

        <div className="tp-section">
          <h2>4. Changes to These Policies</h2>
          <p>
            We may update these policies from time to time. Continued
            use of the website means you accept the updated version.
          </p>
        </div>

      </div>

    </section>
  );
};

export default TermsPolicies;
