import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsPolicies = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      setTimeout(() => el?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  return (
    <section className="bg-light py-5 px-3">

      {/* TERMS */}
      <div id="terms" className="tp-container mx-auto bg-white rounded-3 shadow-sm p-4 p-md-5 mb-4">
        <h1 className="tp-title">Terms & Conditions</h1>
        <p className="text-muted small mb-4">Last updated: January 2026</p>

        {[
          { h: "1. Introduction", p: "By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
          { h: "2. Use of Our Services", p: "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use." },
          { h: "3. Intellectual Property", p: "All content, logos, designs, and materials on this website are the property of the company and may not be reused without permission." },
        ].map(({ h, p }) => (
          <div key={h} className="mb-4">
            <h2 className="tp-section-title">{h}</h2>
            <p className="tp-text">{p}</p>
          </div>
        ))}
      </div>

      {/* PRIVACY */}
      <div id="privacy" className="tp-container mx-auto bg-white rounded-3 shadow-sm p-4 p-md-5">
        <h1 className="tp-title">Privacy Policy</h1>

        {[
          { h: "1. Information We Collect", p: "We may collect personal information such as name, email address, and usage data to improve our services." },
          { h: "2. How We Use Your Information", p: "Your information is used to provide better services, respond to inquiries, and improve user experience." },
          { h: "3. Data Protection", p: "We take appropriate security measures to protect your data against unauthorized access or disclosure." },
          { h: "4. Changes to These Policies", p: "We may update these policies from time to time. Continued use of the website means you accept the updated version." },
        ].map(({ h, p }) => (
          <div key={h} className="mb-4">
            <h2 className="tp-section-title">{h}</h2>
            <p className="tp-text">{p}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TermsPolicies;