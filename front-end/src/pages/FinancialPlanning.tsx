import { Helmet } from "react-helmet-async";

const fpBg = "/assets/images/fp/fp_bg.png";
const whatBg = "/assets/images/fp/moneyp.png";
const descBg = "/assets/images/fp/what_bg.jpg";
const leafImg = "/assets/images/fp/leaf.png";
const humanImg = "/assets/images/fp/human.png";
const proImg = "/assets/images/fp/pro.png";
const fIcon = "/assets/images/fp/f_icon.png";
const hbIcon = "/assets/images/fp/hb_icon.png";
const hhIcon = "/assets/images/fp/hh_icon.png";
const hoIcon = "/assets/images/fp/ho_icon.png";
const tIcon = "/assets/images/fp/t_icon.png";
const calImg = "/assets/images/fp/cal.png";
const targetImg = "/assets/images/fp/target.png";
const cashImg = "/assets/images/fp/cash.png";
const graphImg = "/assets/images/fp/graph.png";
const growthImg = "/assets/images/fp/growth.png";

const whoItems = [
  { icon: hhIcon, text: "Individuals looking to manage income better" },
  { icon: fIcon, text: "Families planning long-term financial stability" },
  { icon: hbIcon, text: "Young professionals starting their financial journey" },
  { icon: hoIcon, text: "Business owners managing fluctuating cash flow" },
  { icon: tIcon, text: "Anyone feeling confused or stressed about money" },
];

const approachItems = [
  {
    img: calImg,
    title: "Income & Expense Analysis",
    desc: "We analyze your complete cash flow to understand where your money comes from and where it goes, helping you optimize spending and increase savings effortlessly.",
    reverse: false,
  },
  {
    img: targetImg,
    title: "Goal-Based Planning",
    desc: "Whether it's buying a home, children's education, retirement, or starting a business, we map your financial goals to a clear, achievable plan with timelines and priorities.",
    reverse: true,
  },
  {
    img: cashImg,
    title: "Debt & Cash-Flow Management",
    desc: "We help you manage EMIs, loans, and credit effectively — reducing financial pressure while improving monthly cash flow.",
    reverse: false,
  },
  {
    img: graphImg,
    title: "Investment & Wealth Strategy",
    desc: "Based on your risk profile and goals, we design smart investment strategies to grow your wealth steadily over time.",
    reverse: true,
  },
  {
    img: growthImg,
    title: "Risk & Insurance Planning",
    desc: "From emergency funds to retirement planning, we ensure you're prepared for both expected milestones and unexpected situations.",
    reverse: false,
  },
];

const FinancialPlanning = () => {
  return (
    <>
      <Helmet>
        <title>Home Loan Eligibility Calculator India | Khushi Finance</title>
        <meta name="description" content="To quickly determine borrowing capability, use a home loan eligibility calculator India. Perfect for home loan for first time buyers, it helps swiftly calculate budgets, EMIs, and approval possibilities." />
      </Helmet>
      <main className="fp-page">

        {/* Hero */}
        <section className="fp-hero" style={{ backgroundImage: `url(${fpBg})` }}>
          <div className="fp-hero-overlay w-100">
            <img src="/assets/images/lo.png" alt="Khushi Finance" className="fp-hero-logo" />
            <h1 className="fp-hero-title">
              Turn Your Income<br />Into a Life You<br />Want
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="fp-intro py-4 border-bottom">
          <div className="container">
            <p className="fp-intro-text text-center mx-auto mb-0">
              At Khushi Finance, financial planning isn't just about numbers — it's about building
              clarity, confidence, and long-term security. We help you take control of your money
              with structured, goal-based planning that aligns with your life goals.
            </p>
          </div>
        </section>

        {/* What Is Financial Planning */}
        <section className="fp-what" style={{ backgroundImage: `url(${whatBg})` }}>
          <div className="fp-what-overlay w-100">
            <div className="container">
              <h2 className="fp-what-title">What Is Financial<br />Planning?</h2>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="fp-desc pt-4 pt-md-5" style={{ backgroundImage: `url(${descBg})` }}>
          <div className="container">
            <div className="row align-items-center justify-content-center g-3">

              {/* Human — hidden on xs, visible from sm up */}
              <div className="col-sm-3 col-4 text-center d-none d-md-flex">
                <img src={humanImg} alt="human" className="fp-human-desc-img img-fluid" />
              </div>

              {/* Middle text — full width on mobile, 6 cols on md+ */}
              <div className="col-md-6 col-12 text-center order-first order-sm-0">
                <p className="fp-desc-text mb-3">
                  Financial planning is a structured approach to managing your income,
                  expenses, savings, investments, and liabilities so you can achieve both
                  short-term and long-term goals — without stress or guesswork.
                </p>
                <p className="fp-desc-highlight mb-0">
                  Our experts work with you to create a realistic, personalized plan that
                  evolves as your life and income grow.
                </p>
              </div>

              {/* Leaf — hidden on xs, visible from sm up */}
              <div className="col-sm-3 col-4 text-center d-none d-sm-flex">
                <img src={leafImg} alt="" className="fp-leaf-desc-img img-fluid" />
              </div>

            </div>
          </div>
        </section>

        {/* Protection image */}
        <section className="fp-protection">
          <img src={proImg} alt="protection" className="fp-protection-img" />
        </section>

        {/* Who Is This For */}
        <section className="fp-who py-4 border-bottom">
          <div className="container">
            <h2 className="fp-section-title mx-auto">Who Is This For?</h2>
            <ul className="fp-who-list list-unstyled mx-auto mb-0">
              {whoItems.map((item, i) => (
                <li key={i} className="d-flex align-items-center gap-4 mb-4">
                  <img src={item.icon} alt="" className="fp-who-icon flex-shrink-0" />
                  <span className="fp-who-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Approach */}
        <section className="fp-approach py-4 py-md-5">
          <div className="container">
            <h2 className="fp-ap-section-title text-center mx-auto mb-4">Our Financial Planning Approach</h2>
            {approachItems.map((item, i) => (
              <div
                key={i}
                className={`row align-items-center fp-approach-row mb-4 p-3 p-md-4${item.reverse ? " flex-md-row-reverse" : ""}`}
              >
                <div className="col-md-5 col-12 text-center mb-3 mb-md-0">
                  <img src={item.img} alt={item.title} className="fp-approach-img img-fluid" />
                </div>
                <div className="col-md-7 col-12">
                  <h4 className="fp-approach-title">{item.title}</h4>
                  <p className="fp-approach-desc mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
      );
};

      export default FinancialPlanning;