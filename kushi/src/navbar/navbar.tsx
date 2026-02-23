// import "./Navbar.css";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div>
//         <img src={logo} className="logo" alt="Khushi Finance Logo" />
//       </div>

//       <ul>  
//         <li>Financial Planning </li>
//         <li className="dropdown">
//           Loans <i className="fa-solid fa-angle-down"></i>
//           <ul className="dd">
//             <li>Business Loan</li>
//             <li>Student Loan</li>
//             <li>Home Loan</li>
//             <li>Personal Loan</li>
//           </ul>
//         </li>
//         <li>Calculators </li>
//         <li>About Us</li>
//         <li>Blogs</li>
//         <li>Contact Us </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const navigate=useNavigate();
//   return (
//     <nav className="navbar">
//       <div>
//         <img src={logo} className="logo" alt="Khushi Finance Logo" />
//       </div>

//       <ul>
//         <li onClick={()=>navigate("/")}>Home</li>
//         <li onClick={()=>navigate("/fp")}>Financial Planning</li>

//         {/* Functional Hover Dropdown */}
//         <li
//           className="dropdown"
//           onMouseEnter={() => setOpenDropdown(true)}
//           onMouseLeave={() => setOpenDropdown(false)}
//         >
//           Loans <i className="fa-solid fa-angle-down"></i>

//           {openDropdown && (
//             <ul className="dd">
//               <li onClick={()=>navigate("/pl")}>Personal Loan</li>
//               <li onClick={()=>navigate("/hl")}>Home Loan</li>
//               <li onClick={()=>navigate("/bl")}>Business Loan</li>
//               <li onClick={()=>navigate("/sl")}>Student Loan</li>
//             </ul>
//           )}
//         </li>


//         <li onClick={()=>navigate("/C")}>Calculators</li>
//         <li onClick={()=>navigate("/au")}>About Us</li>
        
//         <li onClick={()=>navigate("/cu")}>Contact Us</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  const handleDropdownClick = () => {
    if (isMobile()) setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="navbar">
      <div>
        <img src={logo} className="logo" alt="Khushi Finance Logo" />
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? "nav-open" : ""}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/fp" className={({ isActive }) => isActive ? "active" : ""}>
            Financial Planning
          </NavLink>
        </li>

        {/* Dropdown */}
        <li
          className={`dropdown ${openDropdown ? "dd-open" : ""}`}
          onMouseEnter={() => !isMobile() && setOpenDropdown(true)}
          onMouseLeave={() => !isMobile() && setOpenDropdown(false)}
          onClick={handleDropdownClick}
        >
          <span>
            Loans <i className="fa-solid fa-angle-down"></i>
          </span>

          {openDropdown && (
            <ul className="dd">
              <li><NavLink to="/pl">Personal Loan</NavLink></li>
              <li><NavLink to="/hl">Home Loan</NavLink></li>
              <li><NavLink to="/bl">Business Loan</NavLink></li>
              <li><NavLink to="/sl">Student Loan</NavLink></li>
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/C" className={({ isActive }) => isActive ? "active" : ""}>
            Calculators
          </NavLink>
        </li>

        <li>
          <NavLink to="/au" className={({ isActive }) => isActive ? "active" : ""}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/cu" className={({ isActive }) => isActive ? "active" : ""}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;