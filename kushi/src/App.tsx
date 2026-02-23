import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./navbar/navbar.tsx"
import ScrollToTop from "./ScrollToTop.tsx"
import Footer from "./footer/footer.tsx"
import Hero from "./home/hero.tsx"
import FinancialPlanning from "./financial_planning/financial_planing.tsx"
import AboutUs from "./about_us/about_us.tsx"
import ContactUs from "./contact_us/contact_us.tsx"
import PersonalLoan from "./loans/personal_l/personal.tsx"
import Terms from "./terms/terms.tsx"   
import HomeLoan from "./loans/home_l/home_loan.tsx"
import BusinessLoan from "./loans/buisness_l/bu.tsx"
import StudentLoan from "./loans/edu_l/st.tsx"
import LoanCalculator from "./calculator/loancalculator.tsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Hero /></>} />
        <Route path="/fp" element={<><FinancialPlanning /></>} />
        <Route path="/au" element={<><AboutUs /></>} />
        <Route path="/cu" element={<><ContactUs/></>}/>
        <Route path="/t" element={<><Terms/></>}/>
        <Route path="/pl" element={<><PersonalLoan/></>}/>
        <Route path="/hl" element={<><HomeLoan/></>}/>
        <Route path="/bl" element={<><BusinessLoan/></>}/>
        <Route path="/sl" element={<><StudentLoan/></>} />
        <Route path="/C" element={<><LoanCalculator/></>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
