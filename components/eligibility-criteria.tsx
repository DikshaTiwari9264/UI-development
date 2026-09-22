"use client";

import Image from "next/image";
import { useState } from "react";

type ApplicantType = "salaried" | "self-employed";

const criteria: Record<
  ApplicantType,
  { label: string; icon: string; lines: string[] }[]
> = {
  salaried: [
    {
      label: "Age",
      icon: "/assets/eligibility-age.png",
      lines: ["21 to 58 years at the time of application."],
    },
    {
      label: "Employment",
      icon: "/assets/eligibility-employment.png",
      lines: [
        "Minimum 1 year of total work experience, with at least 6 months at your current employer (Private Ltd, PSU, MNC, or Public Sector).",
      ],
    },
    {
      label: "Net Monthly Salary",
      icon: "/assets/eligibility-salary.png",
      lines: [
        "Metro Cities (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune): Minimum ₹20,000 per month.",
        "Non-Metro / Tier-2 Cities: Minimum ₹15,000 per month.",
      ],
    },
    {
      label: "Credit Score",
      icon: "/assets/eligibility-credit-score.png",
      lines: ["Minimum CIBIL score of 700 and above."],
    },
  ],
  "self-employed": [
    {
      label: "Age",
      icon: "/assets/eligibility-age.png",
      lines: ["21 to 58 years at the time of application."],
    },
    {
      label: "Business",
      icon: "/assets/eligibility-employment.png",
      lines: [
        "Minimum 2 years of business continuity as a self-employed professional or business owner.",
      ],
    },
    {
      label: "Net Monthly Income",
      icon: "/assets/eligibility-salary.png",
      lines: [
        "Minimum ₹25,000 average monthly income, supported by bank statements.",
        "Income tax returns filed for the last 2 financial years.",
      ],
    },
    {
      label: "Credit Score",
      icon: "/assets/eligibility-credit-score.png",
      lines: ["Minimum CIBIL score of 700 and above."],
    },
  ],
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7.2L5.4 10.1L11.5 3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EligibilityCriteria() {
  const [type, setType] = useState<ApplicantType>("salaried");
  const rows = criteria[type];

  return (
    <section
      id="eligibility"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#FEFCE8_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[28px] font-semibold text-[#171717] sm:text-[34px]">
          Eligibility Criteria
        </h2>
        <p className="mt-2 max-w-[640px] text-[15px] text-[#262626]">
          To qualify for an instant personal loan, applicants must meet the following standard criteria:
        </p>

        <div className="mt-4 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_405px]">
          <div>
            <div className="inline-flex max-w-full items-center overflow-x-auto rounded-full bg-[#2F2F2F] p-1">
              <button
                type="button"
                onClick={() => setType("salaried")}
                className={`inline-flex h-8 shrink-0 items-center gap-2 rounded-full px-4 text-[14px] font-semibold whitespace-nowrap ${
                  type === "salaried"
                    ? "bg-white text-[#e94b78] shadow-[0_0_0_1.5px_#e94b78]"
                    : "text-white"
                }`}
              >
                {type === "salaried" ? <CheckIcon /> : null}
                For Salaried Applicants
              </button>
              <button
                type="button"
                onClick={() => setType("self-employed")}
                className={`inline-flex h-8 shrink-0 items-center gap-2 rounded-full px-4 text-[14px] font-semibold whitespace-nowrap ${
                  type === "self-employed"
                    ? "bg-white text-[#e94b78] shadow-[0_0_0_1.5px_#e94b78]"
                    : "text-white"
                }`}
              >
                {type === "self-employed" ? <CheckIcon /> : null}
                For Self-Employed Applicants
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-sm  bg-white">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid border-b border-[#F0E6C8] last:border-b-0 sm:grid-cols-[180px_1fr]"
                >
                  <div className="flex items-start gap-1.5 border-[#F0E6C8] px-4 py-3 text-[14.5px] font-semibold text-[#262626] sm:border-r sm:whitespace-nowrap">
                    <span className="mt-0.5 shrink-0">
                      <Image src={row.icon} alt="" width={18} height={18} />
                    </span>
                    {row.label}
                  </div>
                  <div className="text-[14.5px] text-[#262626]">
                    {row.lines.map((line, index) => (
                      <p
                        key={line}
                        className={`px-4 py-2 ${index > 0 ? "border-t border-[#F0E6C8]" : ""}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[405/270] w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-[270px] lg:w-[405px]">
            <Image
              src="/assets/frame-76.png"
              alt="Watch how an instant personal loan works"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 405px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
