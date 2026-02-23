import "./financial_planing.css";
import fp_bg from "../assets/fp/fp_bg.png";
import lo from "../assets/fp/lo.png"
import moneyp from "../assets/fp/moneyp.png";
import what_bg from "../assets/fp/what_bg.jpg"
import hu from "../assets/fp/human.png"
import le from "../assets/fp/leaf.png"
import pro from "../assets/fp/pro.png"
import hh from "../assets/fp/hh_icon.png"
import f from "../assets/fp/f_icon.png"
import hb from "../assets/fp/hb_icon.png"
import ho from "../assets/fp/ho_icon.png"
import t from "../assets/fp/t_icon.png"
import cal from "../assets/fp/cal.png"
import tar from "../assets/fp/target.png"
import cash from "../assets/fp/cash.png"
import gra from "../assets/fp/graph.png"
import gro from "../assets/fp/growth.png"

const FinancialPlanning = () => {
  return (
    <div className="fp-container">
      <section
        className="fp-hero"
      >
        <div className="fp-hero-overlay" >

          <div className="fp-hero-content"
            style={{ backgroundImage: `url(${fp_bg})` }}
          >
            <img src={lo} alt="logo" className="logoimg" />
            <h1>
              Turn Your Income <br />
              Into a Life You <br /> Want
            </h1>
          </div>

          <p>
            At Khushi Finance, financial planning isn’t just about numbers—it’s
            about building clarity, confidence, and long-term security. We help you take control of your money with structured,goal- based planning that aligns with your life goals.
          </p>
        </div>
      </section>


      {/* What is Financial Planning */}
      <section className="fp-section">

        <div className="fp-section-title"
          style={{ backgroundImage: `url(${moneyp})` }}
        >
          <h2>What Is Financial Planning?</h2>
        </div>

        <div className="fp-text-content" 
          style={{backgroundImage:`url(${what_bg})` }}
        >

          <img src={hu} alt="human" className="human" />

          <p className="fp-text">
            Financial planning is a structured approach to managing your income, expenses, savings, investments, and liabilities so you can achieve both
            short-term and long-term goals—without stress or guesswork.

            <span>
              Our experts work with you to create a realistic, personalized plan
              that evolves as your life and income grow.
            </span>

          </p>

          <img src={le} alt="leaf" className="leaf" />

        </div>
      </section>

      {/* Who Is This For */}
      <section className="fp-section-light">

        <img
          src={pro}
          alt="Who is this for"
          className="fp-section-image"
        />

        <h2 className="fp-light-title">Who Is This For?</h2>

        <div className="fp-list">
          <div className="fp-item">
            <img src={hh} alt="individual" className="fp-icon"/>
            <p className="highlight">Individuals looking to manage income better</p>
          </div>

          <div className="fp-item">
            <img src={f} alt="families" className="fp-icon"/>
            <p>Families planning long-term financial stability</p>
          </div>

          <div className="fp-item">
            <img src={hb} alt="young profesional" className="fp-icon"/>
            <p className="highlight">Young professionals starting their financial journey</p>
          </div>

          <div className="fp-item">
            <img src={ho} alt="buisness owners" className="fp-icon"/>
            <p>Business owners managing fluctuating cash flow</p>
          </div>

          <div className="fp-item">
            <img src={t} alt="questions" className="fp-icon"/>
            <p className="highlight">Anyone feeling confused or stressed about money</p>
          </div>
        </div>

      </section>

      {/* Our Approach */}
      <section className="fp-approch">
        <h2>Our Financial Planning Approach</h2>

        <div className="fp-cards">

          <div className="fp-card">

            <div className="fp-im">
              <img src={cal} alt="calculator" />
            </div>

            <div className="fp-app-text">

            <h3>Income & Expense Analysis</h3>
            <p>
              We analyze your complete cash flow to understand where your
              money comes from and where it goes, helping you optimize spending and increase savings effortlessly
            </p>

            </div>
          
          </div>

          <div className="fp-card">

            <div className="fp-im">
              <img src={tar} alt="target" />
            </div>

            <div className="fp-app-text">
            <h3>Goal-Based Planning</h3>
            <p>
              Whether it’s buying a home, children’s education, retirement, or starting a business, we map your financial goals to a clear, achievable plan with timelines and priorities.
            </p>
            </div>
          </div>

          <div className="fp-card">

            <div className="fp-im">
              <img src={cash} alt="cash flow" />
            </div>

            <div className="fp-app-text">

            <h3>Debt & Cash-Flow Management</h3>
            <p>
             We help you manage EMIs, loans, and credit effectively—reducing financial pressure while improving monthly cash flow.
            </p>
            </div>
          </div>

          <div className="fp-card">

            <div className="fp-im">
              <img src={gra} alt="graph" />
            </div>

            <div className="fp-app-text">

            <h3>Investment & Wealth Strategy</h3>
            <p>
              Based on your risk profile and goals, we design smart investment strategies to grow your wealth steadily over time.
            </p>
            </div>
          </div>

          <div className="fp-card">

            <div className="fp-im">
              <img src={gro} alt="growth" />
            </div>

            <div className="fp-app-text">
            <h3>Emergency & Retirement Planning</h3>
            <p>
              From emergency funds to retirement planning, we ensure you’re prepared for both expected milestones and unexpected situations.
            </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FinancialPlanning;
