import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import FinancialPlanning from './pages/FinancialPlanning';
import PersonalLoan from './pages/loans/personal_loan';
import StudentLoan from './pages/loans/student_loan';
import BusinessLoan from './pages/loans/buisness_loan'; 
import HomeLoan from './pages/loans/home_loan';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Footer from './components/footer';
import Calculator from './pages/calculater';
import ScrollToTop from "./components/scrolltotop";
import TermsPolicies from './pages/terms_policy';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-planning" element={<FinancialPlanning />} />
          <Route path="/loans/personal" element={<PersonalLoan />} />
          <Route path="/loans/student" element={<StudentLoan />} />
          <Route path="/loans/business" element={<BusinessLoan />} />
          <Route path="/loans/home" element={<HomeLoan />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/calculater" element={<Calculator />} />
          <Route path="/t" element={<TermsPolicies />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}