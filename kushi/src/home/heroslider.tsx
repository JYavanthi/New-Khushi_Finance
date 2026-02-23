import { useState, useEffect } from "react";
import financialconsultation from "../assets/images/fco.jpg";
import loanassistant from "../assets/images/la.jpg";
import incomeexpenses from "../assets/images/ie.jpg";
import goalbased from "../assets/images/gb.jpg";
import cashflow from "../assets/images/cf.jpg";
import "../App.css";

const slides = [
  {
    img: loanassistant,
    title: "Loan Assistance",
    desc: "From personal loans to business and secured loans, we help you choose the right option with competitive rates and minimal hassle.",
  },
  {
    img: incomeexpenses,
    title: "Income & expense analysis",
    desc: "We evaluate your earnings and spending patterns to help you understand where your money goes and how to optimize it.",
  },
  {
    img: goalbased,
    title: "Goal-based Financial Planning",
    desc: "We align your finances with your life goals—short-term and long-term—so every rupee works with purpose.",
  },
  {
    img: cashflow,
    title: "Debt and Cash-flow Management",
    desc: "We help you reduce financial stress by restructuring debt and improving monthly cash flow.",
  },
  {
    img: financialconsultation,
    title: "Financial Consultation",
    desc: "Get expert guidence on income planning, savings debt management,and long term financial stability,clear,honest and practical.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [current,total]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % total);

  const getIndex = (offset: number) =>
    (current + offset + total) % total;

  return (
    <section className="hero-slider-wrapper">

      <div className="core-title"><span>Our Core Services</span></div>

      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="hero-slider-container">
        {/* LEFT IMAGE STACK */}
        <div className="image-stack" key={current}>

          <div className="img very-small">
            <img src={slides[getIndex(-3)].img} />
          </div>

          <div className="img small">
            <img src={slides[getIndex(-2)].img} />
          </div>

          <div className="img medium">
            <img src={slides[getIndex(-1)].img} />
          </div>

          <div className="img large">
            <img src={slides[getIndex(0)].img} />
          </div>

          <div className="img behind">
            <img src={slides[getIndex(1)].img} />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-slide-content">
          <div className="content-box">
            <h2>{slides[current].title}</h2>
            <p>{slides[current].desc}</p>
          </div>
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>


      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
