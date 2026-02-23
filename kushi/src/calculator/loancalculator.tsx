import { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import "./LoanCalculator.css";

interface Results {
  emi: number;
  totalPayable: number;
  totalInterest: number;
  principal: number;
}

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  prefix: string;
  suffix: string;
  decimals: number;
  maxLabel: string;
}

interface StatCardProps {
  label: string;
  value: string;
  colorClass: "blue" | "amber" | "purple";
}

const formatCurrency = (val: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [duration, setDuration] = useState<number>(5);
  const [results, setResults] = useState<Results | null>(null);

  useEffect(() => {
    if (!loanAmount || !interestRate || !duration) return;
    const r = interestRate / 100 / 12;
    const n = duration * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - loanAmount;
    setResults({ emi, totalPayable, totalInterest, principal: loanAmount });
  }, [loanAmount, interestRate, duration]);

  const chartData = results
    ? [
        { name: "Principal", value: results.principal },
        { name: "Interest", value: Math.round(results.totalInterest) },
      ]
    : [];

  const COLORS: string[] = ["#2563eb", "#f59e0b"];

  return (
    <div className="lc-wrapper">
      <div className="lc-card">
        <div className="lc-header">
          <div className="lc-badge">EMI CALCULATOR</div>
          <h1 className="lc-title">Loan Calculator</h1>
          <p className="lc-subtitle">Know your monthly payments before you apply</p>
        </div>

        <div className="lc-body">
          <div className="lc-left-col">
            <div className="lc-input-section">
              <SliderInput
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                min={10000}
                max={10000000}
                step={10000}
                prefix="₹"
                suffix=""
                decimals={0}
                maxLabel="1Cr"
              />
              <SliderInput
                label="Interest Rate (per annum)"
                value={interestRate}
                onChange={setInterestRate}
                min={1}
                max={30}
                step={0.1}
                prefix=""
                suffix="% p.a."
                decimals={1}
                maxLabel="30%"
              />
              <SliderInput
                label="Loan Duration"
                value={duration}
                onChange={setDuration}
                min={1}
                max={30}
                step={1}
                prefix=""
                suffix=" Yr"
                decimals={0}
                maxLabel="30 Yr"
              />
            </div>
          </div>

          <div className="lc-right-col">
            {results && (
              <div className="lc-results">
                <div className="lc-emi-box">
                  <div>
                    <div className="lc-emi-label">Monthly EMI</div>
                    <div className="lc-emi-sub">Based on your inputs</div>
                  </div>
                  <span className="lc-emi-value">{formatCurrency(results.emi)}</span>
                </div>

                <div className="lc-stats-row">
                  <StatCard label="Principal Amount" value={formatCurrency(results.principal)} colorClass="blue" />
                  <StatCard label="Total Interest" value={formatCurrency(results.totalInterest)} colorClass="amber" />
                  <StatCard label="Total Payable" value={formatCurrency(results.totalPayable)} colorClass="purple" />
                </div>

                <div className="lc-chart-wrapper">
                  <p className="lc-chart-title">Breakup of Total Payment</p>
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {chartData.map((_entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number | undefined) =>
                          value !== undefined ? formatCurrency(value) : ""
                        }
                        contentStyle={{
                          background: "#0d1526",
                          border: "1px solid #2563eb",
                          borderRadius: 8,
                          color: "#ffffff",        // ← tooltip box text color (white)
                        }}
                        labelStyle={{
                          color: "#ffffff",        // ← label (Principal / Interest) color (white)
                          fontWeight: "bold",
                        }}
                        itemStyle={{
                          color: "#ffffff",        // ← value text color (white)
                        }}
                      />
                      <Legend
                        iconType="circle"
                        formatter={(value: string) => (
                          <span className="lc-legend-label">{value}</span>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="lc-chart-center">
                    <span className="lc-chart-percent">
                      {((results.principal / results.totalPayable) * 100).toFixed(1)}%
                    </span>
                    <span className="lc-chart-center-label">Principal</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SliderInput Component ────────────────────────────────────────────────────

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  decimals,
  maxLabel,
}: SliderInputProps) {
  const [inputVal, setInputVal] = useState<string>(String(value));
  const isFocused = useRef<boolean>(false);
  const inputValRef = useRef<string>(String(value));
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  useEffect(() => {
    if (!isFocused.current) {
      setInputVal(String(value));
      inputValRef.current = String(value);
    }
  }, [value]);

  const clampAndRound = (num: number): number => {
    const clamped = Math.min(max, Math.max(min, num));
    return decimals === 0 ? Math.round(clamped) : parseFloat(clamped.toFixed(decimals));
  };

  const commitValue = (raw: string): void => {
    const num = parseFloat(raw);
    let final: number;
    if (raw === "" || isNaN(num) || num < min) {
      final = min;
    } else if (num > max) {
      final = max;
    } else {
      final = clampAndRound(num);
    }
    onChange(final);
    setInputVal(String(final));
    inputValRef.current = String(final);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setInputVal(raw);
    inputValRef.current = raw;
  };

  const handleFocus = (): void => {
    isFocused.current = true;
    setInputVal("");
    inputValRef.current = "";
  };

  const handleBlur = (): void => {
    isFocused.current = false;
    commitValue(inputValRef.current);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const v = parseFloat(e.target.value);
    onChange(v);
    setInputVal(String(v));
  };

  return (
    <div className="lc-input-group">
      <div className="lc-input-label-row">
        <span className="lc-input-label">{label}</span>
        <div className="lc-type-box">
          {prefix && <span className="lc-type-prefix">{prefix}</span>}
          <input
            className="lc-type-input"
            type="text"
            inputMode="decimal"
            value={inputVal}
            onChange={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          {suffix && <span className="lc-type-suffix">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        className="lc-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSlider}
        style={{
          background: `linear-gradient(to right, #2563eb ${pct}%, #1e2d45 ${pct}%)`,
        }}
      />
      <div className="lc-slider-range">
        <span>{prefix}{min}{suffix}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

// ─── StatCard Component ───────────────────────────────────────────────────────

function StatCard({ label, value, colorClass }: StatCardProps) {
  return (
    <div className={`lc-stat-card lc-stat-${colorClass}`}>
      <span className="lc-stat-label">{label}</span>
      <span className={`lc-stat-value lc-stat-value-${colorClass}`}>{value}</span>
    </div>
  );
}