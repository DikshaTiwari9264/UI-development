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
    <aside className="w-full min-w-0 overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,rgba(32,22,20,0.94)_0%,rgba(48,24,28,0.94)_48%,rgba(122,32,58,0.92)_100%)] text-white shadow-[0_24px_50px_rgba(0,0,0,0.28)] backdrop-blur-md sm:rounded-[22px]">
      <div className="space-y-3 px-3 pb-3 pt-3 sm:space-y-4 sm:px-5 sm:pb-4 sm:pt-5 lg:space-y-5 lg:px-6">
        <h2 className="text-[13px] font-medium leading-5 text-white/95 sm:text-[14px] lg:text-[16px] lg:leading-6">
          See what your vehicle loan could look like
        </h2>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="min-w-0 text-[12px] leading-4 text-white/90 sm:text-[13px] lg:text-[13.5px]">How much do you need to borrow?</p>
            <div className="shrink-0 rounded-lg bg-[#1b1414] px-2 py-1.5 text-[12px] font-semibold sm:px-3 sm:py-2 sm:text-[13.5px]">
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
            <div className="flex justify-between text-[11px] text-white/70 sm:text-[12px]">
              <span>₹5,000</span>
              <span>₹100,000</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div>
            <p className="text-[12px] font-medium text-white/95 sm:text-[13px] lg:text-[13.5px]">For how many months?</p>
            <p className="text-[10px] text-white/60 sm:text-[11px] lg:text-[11.5px]">Repay anytime with 0 foreclosure charges</p>
          </div>

          <div className="relative flex items-center gap-1 sm:gap-2">
            <div className="flex min-w-0 flex-1 gap-1 overflow-hidden sm:gap-2">
              {visibleTenures.map((value) => {
                const selected = value === tenure;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTenure(value)}
                    className={`flex h-8 min-w-0 flex-1 items-center justify-center rounded-full px-0.5 text-[11px] font-medium transition sm:h-9 sm:min-w-[40px] sm:text-[12px] lg:text-[13px] ${
                      selected
                        ? "bg-[#f4ece8] text-[#2b1a1a]"
                        : "bg-white/8 text-white/85 ring-1 ring-white/10"
                    }`}
                  >
                    {selected ? (
                      <span className="inline-flex items-center gap-0.5 sm:gap-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="hidden sm:block">
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
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2a2222] text-white/80 ring-1 ring-white/10 sm:h-8 sm:w-8"
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
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2a2222] text-white/80 ring-1 ring-white/10 sm:h-8 sm:w-8"
                onClick={() => setTenureStart(0)}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[12px] text-white/90 sm:text-[13px] lg:text-[13.5px]">Choose the Interest Rate</p>
            <div className="shrink-0 rounded-lg bg-[#1b1414] px-2 py-1.5 text-[12px] font-semibold sm:px-3 sm:py-2 sm:text-[13.5px]">
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
          <div className="flex justify-between text-[11px] text-white/70 sm:text-[12px]">
            <span>9.99%</span>
            <span>38%</span>
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 pt-1 text-center sm:px-5 sm:pb-5 sm:pt-2 lg:px-6">
        <p className="text-[11px] text-white/85 sm:text-[12px] lg:text-[13px]">Your EMI will be</p>
        <p className="mt-0.5 text-[20px] font-semibold tracking-[-0.03em] sm:text-[24px] lg:mt-1 lg:text-[28px]">₹{formatInr(emi)}/Month</p>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-4">
          <div>
            <p className="text-[14px] font-semibold sm:text-[16px] lg:text-[18px]">₹{formatInr(interest)}</p>
            <p className="mt-0.5 text-[11px] text-white/70 sm:text-[12px]">Total interest to pay</p>
          </div>
          <div>
            <p className="text-[14px] font-semibold sm:text-[16px] lg:text-[18px]">₹{formatInr(total)}</p>
            <p className="mt-0.5 text-[11px] text-white/70 sm:text-[12px]">Total amount to pay</p>
          </div>
        </div>

        <button className="mt-3 h-10 w-full rounded-lg bg-white text-[13px] font-semibold text-[#c43b66] transition hover:bg-[#fff7f9] sm:mt-5 sm:h-11 sm:text-[14px] lg:h-12 lg:rounded-xl lg:text-[15px]">
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
