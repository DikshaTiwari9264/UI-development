"use client";

import { useMemo, useState } from "react";

const TENURES = [6, 12, 24, 36, 48, 60, 72];
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 100000;
const MIN_RATE = 9.99;
const MAX_RATE = 38;

function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

function calculateEmi(principal: number, annualRate: number, months: number) {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return principal / months;
  const factor = (1 + monthlyRate) ** months;
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(32000);
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(MIN_RATE);
  const [tenureStart, setTenureStart] = useState(0);

  const visibleTenures = TENURES.slice(tenureStart, tenureStart + 6);
  const amountProgress = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
  const rateProgress = ((rate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;

  const { emi, interest, total } = useMemo(() => {
    const monthly = calculateEmi(amount, rate, tenure);
    const payable = monthly * tenure;
    return {
      emi: monthly,
      total: payable,
      interest: payable - amount,
    };
  }, [amount, rate, tenure]);

  return (
    <aside className="w-full overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(32,22,20,0.94)_0%,rgba(48,24,28,0.94)_48%,rgba(122,32,58,0.92)_100%)] text-white shadow-[0_24px_50px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="space-y-5 px-5 pb-4 pt-5 sm:px-6">
        <h2 className="text-[16px] font-medium leading-6 text-white/95">
          See what your vehicle loan could look like
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[13.5px] text-white/90">How much do you need to borrow?</p>
            <div className="rounded-lg bg-[#1b1414] px-3 py-2 text-[13.5px] font-semibold">
              ₹ {formatInr(amount)}
            </div>
          </div>

          <div className="space-y-2">
            <input
              className="loan-range"
              type="range"
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step={1000}
              value={amount}
              aria-label="Loan amount"
              style={{ ["--progress" as string]: `${amountProgress}%` }}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
            <div className="flex justify-between text-[12px] text-white/70">
              <span>₹5,000</span>
              <span>₹100,000</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-[13.5px] font-medium text-white/95">For how many months?</p>
            <p className="text-[11.5px] text-white/60">Repay anytime with 0 foreclosure charges</p>
          </div>

          <div className="relative flex items-center gap-2">
            <div className="flex min-w-0 flex-1 gap-2 overflow-hidden">
              {visibleTenures.map((value) => {
                const selected = value === tenure;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTenure(value)}
                    className={`flex h-9 min-w-[44px] flex-1 items-center justify-center rounded-full text-[13px] font-medium transition ${
                      selected
                        ? "bg-[#f4ece8] text-[#2b1a1a]"
                        : "bg-white/8 text-white/85 ring-1 ring-white/10"
                    }`}
                  >
                    {selected ? (
                      <span className="inline-flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6.2L4.6 8.8L10 3.2" stroke="#2b1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </button>
                );
              })}
            </div>

            {tenureStart + 6 < TENURES.length ? (
              <button
                type="button"
                aria-label="Show more tenures"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2a2222] text-white/80 ring-1 ring-white/10"
                onClick={() => setTenureStart((value) => Math.min(value + 1, TENURES.length - 6))}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                aria-label="Show earlier tenures"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2a2222] text-white/80 ring-1 ring-white/10"
                onClick={() => setTenureStart(0)}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[13.5px] text-white/90">Choose the Interest Rate</p>
            <div className="rounded-lg bg-[#1b1414] px-3 py-2 text-[13.5px] font-semibold">
              {rate.toFixed(2)} %
            </div>
          </div>

          <input
            className="loan-range"
            type="range"
            min={MIN_RATE}
            max={MAX_RATE}
            step={0.01}
            value={rate}
            aria-label="Interest rate"
            style={{ ["--progress" as string]: `${rateProgress}%` }}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <div className="flex justify-between text-[12px] text-white/70">
            <span>9.99%</span>
            <span>38%</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 text-center sm:px-6">
        <p className="text-[13px] text-white/85">Your EMI will be</p>
        <p className="mt-1 text-[28px] font-semibold tracking-[-0.03em]">₹{formatInr(emi)}/Month</p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[18px] font-semibold">₹{formatInr(interest)}</p>
            <p className="mt-1 text-[12px] text-white/70">Total interest to pay</p>
          </div>
          <div>
            <p className="text-[18px] font-semibold">₹{formatInr(total)}</p>
            <p className="mt-1 text-[12px] text-white/70">Total amount to pay</p>
          </div>
        </div>

        <button className="mt-5 h-12 w-full rounded-xl bg-white text-[15px] font-semibold text-[#c43b66] transition hover:bg-[#fff7f9]">
          Check your eligibility
        </button>

        <p className="mt-3 text-[10px] leading-4 text-white/55">
          Personal loan calculator is only for illustration purposes. For actual calculations
          refer to your Repayment Schedule &amp; Loan Agreement. *T&amp;C Apply
        </p>
      </div>
    </aside>
  );
}
