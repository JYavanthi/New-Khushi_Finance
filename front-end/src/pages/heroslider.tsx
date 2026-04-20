import { useState, useEffect } from "react";
const BASE = "/assets/images/hero/core";

const slides = [
  {
    img: `${BASE}/la.jpg`,
    title: "Loan Assistance",
    desc: "From personal loans to business and secured loans, we help you choose the right option with competitive rates and minimal hassle.",
  },
  {
    img: `${BASE}/ie.jpg`,
    title: "Income & Expense Analysis",
    desc: "We evaluate your earnings and spending patterns to help you understand where your money goes and how to optimize it.",
  },
  {
    img: `${BASE}/gb.jpg`,
    title: "Goal-based Financial Planning",
    desc: "We align your finances with your life goals—short-term and long-term—so every rupee works with purpose.",
  },
  {
    img: `${BASE}/cf.jpg`,
    title: "Debt and Cash-flow Management",
    desc: "We help you reduce financial stress by restructuring debt and improving monthly cash flow.",
  },
  {
    img: `${BASE}/fco.jpg`,
    title: "Financial Consultation",
    desc: "Get expert guidance on income planning, savings, debt management, and long-term financial stability — clear, honest, and practical.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % total), 3000);
    return () => clearInterval(timer);
  }, [current, total]);

  const prev = () => setCurrent(p => (p === 0 ? total - 1 : p - 1));
  const next = () => setCurrent(p => (p + 1) % total);
  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <section className="kf-slider-wrapper border-top">
      <h2 className="kf-slider-title text-center">Our Core Services</h2>

      <button className="kf-arrow kf-arrow-left" onClick={prev}>&#10094;</button>
      <button className="kf-arrow kf-arrow-right" onClick={next}>&#10095;</button>

      <div className="kf-slider-layout">
        {/* Image stack */}
        <div className="kf-img-stack" key={current}>
          <div className="kf-img kf-img-vs"><img src={slides[getIndex(-3)].img} alt="" /></div>
          <div className="kf-img kf-img-sm"><img src={slides[getIndex(-2)].img} alt="" /></div>
          <div className="kf-img kf-img-md"><img src={slides[getIndex(-1)].img} alt="" /></div>
          <div className="kf-img kf-img-lg"><img src={slides[getIndex(0)].img} alt="" /></div>
        </div>

        {/* Content */}
        <div className="kf-slide-content d-flex align-items-center justify-content-center">
          <div className="kf-content-box">
            <h2 className="kf-content-h2">{slides[current].title}</h2>
            <p className="kf-content-p">{slides[current].desc}</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="d-flex justify-content-center gap-md-5 gap-4 mt-4 pb-3">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`kf-dot ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;