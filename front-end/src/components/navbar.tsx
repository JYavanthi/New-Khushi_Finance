import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavbar = () => {
    navbarRef.current?.classList.remove("show");
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bg-white border-bottom ${scrolled ? "shadow-sm" : ""}`}>
      <div className="container-fluid">

        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img src="/assets/images/logo.png" alt="logo" className="logo-img" />
        </NavLink>

        {/* Divider */}
        <div className="vr mx-3 d-none d-lg-block"></div>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent" ref={navbarRef}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/financial-planning" className="nav-link" onClick={closeNavbar}>
                Financial Planning
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle cursor-pointer"
                role="button"
                data-bs-toggle="dropdown"
              >
                Loans
              </span>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/loans/personal" onClick={closeNavbar}>Personal Loans</NavLink></li>
                <li><NavLink className="dropdown-item" to="/loans/home" onClick={closeNavbar}>Home Loans</NavLink></li>
                <li><NavLink className="dropdown-item" to="/loans/business" onClick={closeNavbar}>Business Loans</NavLink></li>
                <li><NavLink className="dropdown-item" to="/loans/student" onClick={closeNavbar}>Student Loans</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/calculater" className="nav-link" onClick={closeNavbar}>
                Calculator
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" onClick={closeNavbar}>
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link" onClick={closeNavbar}>
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;