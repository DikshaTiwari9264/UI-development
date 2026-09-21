"use client";

import { useState } from "react";

type ApplicantType = "salaried" | "self-employed";

const criteria: Record<
  ApplicantType,
  { label: string; icon: "age" | "work" | "salary" | "score"; lines: string[] }[]
> = {
  salaried: [
    {
      label: "Age",
      icon: "age",
      lines: ["21 to 58 years at the time of application."],
    },
    {
      label: "Employment",
      icon: "work",
      lines: [
        "Minimum 1 year of total work experience, with at least 6 months at your current employer (Private Ltd, PSU, MNC, or Public Sector).",
      ],
    },
    {
      label: "Net Monthly Salary",
      icon: "salary",
      lines: [
        "Metro Cities (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune): Minimum ₹20,000 per month.",
        "Non-Metro / Tier-2 Cities: Minimum ₹15,000 per month.",
      ],
    },
    {
      label: "Credit Score",
      icon: "score",
      lines: ["Minimum CIBIL score of 700 and above."],
    },
  ],
  "self-employed": [
    {
      label: "Age",
      icon: "age",
      lines: ["21 to 58 years at the time of application."],
    },
    {
      label: "Business",
      icon: "work",
      lines: [
        "Minimum 2 years of business continuity as a self-employed professional or business owner.",
      ],
    },
    {
      label: "Net Monthly Income",
      icon: "salary",
      lines: [
        "Minimum ₹25,000 average monthly income, supported by bank statements.",
        "Income tax returns filed for the last 2 financial years.",
      ],
    },
    {
      label: "Credit Score",
      icon: "score",
      lines: ["Minimum CIBIL score of 700 and above."],
    },
  ],
};

function RowIcon({ type }: { type: "age" | "work" | "salary" | "score" }) {
  if (type === "age") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="6" r="2.4" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M4.5 14.2c.7-2.2 2.4-3.4 4.5-3.4s3.8 1.2 4.5 3.4" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "work") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2.5" y="6" width="13" height="9" rx="1.5" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M6.5 6V4.8A1.8 1.8 0 0 1 8.3 3h1.4A1.8 1.8 0 0 1 11.5 4.8V6" stroke="#e94b78" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "salary") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="12" height="10" rx="1.5" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M9 6.5v5M7.4 8.1c.3-.6.8-.9 1.6-.9 1 0 1.6.5 1.6 1.2 0 .8-.7 1.1-1.6 1.3-.9.2-1.6.5-1.6 1.3 0 .7.6 1.2 1.6 1.2.8 0 1.3-.3 1.6-.8" stroke="#e94b78" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.5 12.5a5.5 5.5 0 0 1 11 0" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12.2L12.2 8" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="12.4" r="1.1" fill="#e94b78" />
    </svg>
  );
}

export function EligibilityCriteria() {
  const [type, setType] = useState<ApplicantType>("salaried");
  const rows = criteria[type];

  return (
    <section id="eligibility" className="bg-[#f6f5ef] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
            Eligibility Criteria
          </h2>
          <p className="mt-3 text-[15px] text-[#4a4a4a]">
            To qualify for an instant personal loan, applicants must meet the following standard criteria:
          </p>

          <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-[#3a3a3a] p-1">
            <button
              type="button"
              onClick={() => setType("salaried")}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[14px] font-semibold ${
                type === "salaried"
                  ? "bg-white text-[#e94b78] shadow-[0_0_0_1.5px_#e94b78]"
                  : "text-white"
              }`}
            >
              {type === "salaried" ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7.2L5.4 10.1L11.5 3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
              For Salaried Applicants
            </button>
            <button
              type="button"
              onClick={() => setType("self-employed")}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[14px] font-semibold ${
                type === "self-employed"
                  ? "bg-white text-[#e94b78] shadow-[0_0_0_1.5px_#e94b78]"
                  : "text-white"
              }`}
            >
              {type === "self-employed" ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7.2L5.4 10.1L11.5 3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
              For Self-Employed Applicants
            </button>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#efe6d2] bg-white">
            {rows.map((row) => (
              <div key={row.label} className="grid border-b border-[#f3eee4] last:border-b-0 sm:grid-cols-[220px_1fr]">
                <div className="flex items-start gap-2 px-4 py-4 text-[14.5px] font-semibold text-[#1f1f1f] sm:whitespace-nowrap">
                  <span className="mt-0.5">
                    <RowIcon type={row.icon} />
                  </span>
                  {row.label}
                </div>
                <div className="space-y-3 px-4 py-4 text-[14.5px] leading-6 text-[#3d3d3d]">
                  {row.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-2 min-h-[280px] overflow-hidden rounded-2xl lg:mt-16 lg:min-h-[340px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80')",
            }}
            role="img"
            aria-label="Family spending time together outdoors"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true" className="ml-1">
              <path d="M2 1.5L20.5 13L2 24.5V1.5Z" fill="#e94b78" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
