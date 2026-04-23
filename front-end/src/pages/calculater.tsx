import { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Helmet } from "react-helmet-async";


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
    symbol: string;
    decimals: number;
    minLabel: string;
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

    const COLORS: string[] = ["#28606d", "#f59e0b"];

    return (
        <>
            <Helmet>
                <title>Home Loan EMI Calculator | Khushi Finance</title>
                <meta name="description" content="Use a home loan EMI calculator to estimate monthly payments easily. Plan your budget, compare loan options, and choose the best tenure and interest rates for affordable home financing." />
            </Helmet>

            <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center py-4 px-3">
                <div className="w-100 lc-card rounded-4 overflow-hidden" style={{ maxWidth: 1100 }}>

                    {/* Header */}
                    <div className="lc-header text-center py-5 px-4">
                        <span className="lc-badge fw-semibold px-4 py-2 mb-3 text-uppercase d-inline-block">
                            EMI Calculator
                        </span>
                        <h1 className="text-white fw-bold mb-2" style={{ fontSize: "clamp(22px, 5vw, 50px)", fontFamily: "Georgia, serif" }}>
                            Loan Calculator
                        </h1>
                        <p className="text-white mb-0" style={{ fontSize: 15 }}>
                            Know your monthly payments before you apply
                        </p>
                    </div>

                    {/* Body */}
                    <div className="bg-white p-4">
                        <div className="row g-4 align-items-start">

                            {/* Left: Inputs */}
                            <div className="col-12 col-md-5 col-lg-4">
                                <div className="d-flex flex-column gap-4">
                                    <SliderInput
                                        label="Loan Amount"
                                        value={loanAmount}
                                        onChange={setLoanAmount}
                                        min={10000} max={10000000} step={10000}
                                        symbol="₹" decimals={0}
                                        minLabel="₹10K" maxLabel="₹1Cr"
                                    />
                                    <SliderInput
                                        label="Interest Rate (per annum)"
                                        value={interestRate}
                                        onChange={setInterestRate}
                                        min={1} max={30} step={0.1}
                                        symbol="% p.a." decimals={1}
                                        minLabel="1%" maxLabel="30%"
                                    />
                                    <SliderInput
                                        label="Loan Duration"
                                        value={duration}
                                        onChange={setDuration}
                                        min={1} max={30} step={1}
                                        symbol="Yr" decimals={0}
                                        minLabel="1 Yr" maxLabel="30 Yr"
                                    />
                                </div>
                            </div>

                            {/* Right: Results */}
                            <div className="col-12 col-md-7 col-lg-8">
                                {results && (
                                    <div className="lc-results">

                                        {/* EMI */}
                                        <div className="lc-emi-box d-flex justify-content-between align-items-center px-4 py-3">
                                            <div>
                                                <div className="fw-bold" style={{ fontSize: "clamp(14px,2.5vw,25px)" }}>Monthly EMI</div>
                                                <div className="text-secondary" style={{ fontSize: 14 }}>Based on your inputs</div>
                                            </div>
                                            <span
                                                className="fw-bold text-end lc-emi-value"
                                                style={{
                                                    color: "#28606d",
                                                    fontSize: "clamp(16px,2.2vw,30px)",
                                                    maxWidth: "55%",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {formatCurrency(results.emi)}
                                            </span>
                                        </div>

                                        {/* Stats */}
                                        <div className="lc-stats-row row g-0">
                                            <div className="col-4"><StatCard label="Principal Amount" value={formatCurrency(results.principal)} colorClass="blue" /></div>
                                            <div className="col-4"><StatCard label="Total Interest" value={formatCurrency(results.totalInterest)} colorClass="amber" /></div>
                                            <div className="col-4"><StatCard label="Total Payable" value={formatCurrency(results.totalPayable)} colorClass="purple" /></div>
                                        </div>

                                        {/* Pie chart */}
                                        <div className="position-relative pt-3 pb-2">
                                            <p className="text-center text-secondary text-uppercase mb-2" style={{ fontSize: 12, letterSpacing: 1 }}>
                                                Breakup of Total Payment
                                            </p>
                                            <ResponsiveContainer width="100%" height={240}>
                                                <PieChart>
                                                    <Pie
                                                        data={chartData}
                                                        cx="50%" cy="50%"
                                                        innerRadius={65} outerRadius={100}
                                                        paddingAngle={3} dataKey="value"
                                                    >
                                                        {chartData.map((_entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip
                                                        formatter={(value) => formatCurrency(value as number)}
                                                        contentStyle={{ background: "#0d1526", border: "1px solid #28606d", borderRadius: 8, color: "#fff" }}
                                                        labelStyle={{ color: "#fff", fontWeight: "bold" }}
                                                        itemStyle={{ color: "#fff" }}
                                                    />
                                                    <Legend
                                                        iconType="circle"
                                                        formatter={(value: string) => (
                                                            <span className="lc-legend-label">{value}</span>
                                                        )}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            {/* Center label */}
                                            <div className="position-absolute text-center" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 10 }}>
                                                <span className="d-block fw-bold text-white" style={{ fontSize: 22 }}>
                                                    {((results.principal / results.totalPayable) * 100).toFixed(1)}%
                                                </span>
                                                <span className="d-block" style={{ color: "#60a5fa", fontSize: 11 }}>Principal</span>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

// SliderInput

function SliderInput({ label, value, onChange, min, max, step, symbol, decimals, minLabel, maxLabel }: SliderInputProps) {
    const [inputVal, setInputVal] = useState<string>(
        decimals > 0 ? value.toFixed(decimals) : String(value)
    );
    const isFocused = useRef<boolean>(false);
    const inputValRef = useRef<string>(String(value));
    const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

    useEffect(() => {
        if (!isFocused.current) {
            const formatted = decimals > 0 ? value.toFixed(decimals) : String(value);
            setInputVal(formatted);
            inputValRef.current = formatted;
        }
    }, [value, decimals]);

    const clampAndRound = (num: number): number => {
        const clamped = Math.min(max, Math.max(min, num));
        return decimals === 0 ? Math.round(clamped) : parseFloat(clamped.toFixed(decimals));
    };

    const commitValue = (raw: string): void => {
        const num = parseFloat(raw);
        let final: number;
        if (raw === "" || isNaN(num) || num < min) final = min;
        else if (num > max) final = max;
        else final = clampAndRound(num);
        onChange(final);
        const formatted = decimals > 0 ? final.toFixed(decimals) : String(final);
        setInputVal(formatted);
        inputValRef.current = formatted;
    };

    return (
        <div>
            {/* Label row */}
            <div className="d-flex justify-content-between align-items-center gap-3 mb-2">
                <span className="fw-medium lc-slider-label">{label}</span>

                {/* Input box — number on left, teal symbol pill on right */}
                <div className="lc-type-box d-flex align-items-center rounded-2">
                    <input
                        className="lc-type-input"
                        type="text"
                        inputMode="decimal"
                        value={inputVal}
                        onChange={e => {
                            const raw = e.target.value.replace(/[^0-9.]/g, "");
                            setInputVal(raw);
                            inputValRef.current = raw;
                        }}
                        onFocus={() => {
                            isFocused.current = true;
                            setInputVal("");
                            inputValRef.current = "";
                        }}
                        onBlur={() => {
                            isFocused.current = false;
                            commitValue(inputValRef.current);
                        }}
                        onKeyDown={e => { if (e.key === "Enter") e.currentTarget.blur(); }}
                    />
                    <span className="lc-symbol-pill">{symbol}</span>
                </div>
            </div>

            {/* Slider */}
            <input
                type="range"
                className="lc-slider"
                min={min} max={max} step={step} value={value}
                onChange={e => {
                    const v = parseFloat(e.target.value);
                    onChange(v);
                    const formatted = decimals > 0 ? v.toFixed(decimals) : String(v);
                    setInputVal(formatted);
                }}
                style={{ background: `linear-gradient(to right, #28606d ${pct}%, #1e2d45 ${pct}%)` }}
            />

            {/* Min / Max labels */}
            <div className="d-flex justify-content-between text-secondary mt-1 lc-range-labels">
                <span>{minLabel}</span>
                <span>{maxLabel}</span>
            </div>
        </div>
    );
}

// StatCard

function StatCard({ label, value, colorClass }: StatCardProps) {
    return (
        <div className="p-3">
            <div className="text-uppercase fw-medium mb-1 lc-stat-label">{label}</div>
            <div className={`fw-bold lc-stat-value lc-stat-value-${colorClass}`}>{value}</div>
        </div>
    );
}