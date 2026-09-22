"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I apply for an instant personal loan without a salary slip?",
    answer:
      "Yes. You can share bank statements for the last 3 to 6 months that show salary credits, or give permission through the Account Aggregator network so statements are fetched directly. A salary slip is not mandatory.",
  },
  {
    question: "Will checking my eligibility lower my credit score?",
    answer:
      "No. The eligibility check is only an illustration of your offer. It does not place a hard enquiry on your credit report. A bureau check happens later, only if you choose to continue with the full application.",
  },
  {
    question: "How does the auto-debit (e-NACH) process work?",
    answer:
      "After you e-sign the loan agreement, you register an e-NACH or e-Mandate on your linked bank account. Your EMI is then debited automatically on the due date, so you do not have to pay it manually each month.",
  },
  {
    question: "What should I do if my loan application gets rejected?",
    answer:
      "Review the reason shared with your decision. You can apply again after your income credits, employment history, or credit profile meet the eligibility criteria. Checking a fresh offer does not require a branch visit.",
  },
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#EEF2FF_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-center text-[20px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[24px] lg:text-[32px]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5 lg:mt-6 lg:space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-lg border border-[#eceff5] bg-white text-[#262626] lg:rounded-xl">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5 lg:gap-4 lg:px-5 lg:py-4"
                >
                  <span className="text-[13px] font-medium leading-5 text-[#262626] sm:text-[14px] lg:text-[15px]">{item.question}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`shrink-0 text-[#e94b78] transition ${open ? "rotate-180" : ""}`}
                  >
                    <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open ? (
                  <p className="mt-1 border-t border-[#f2f4f8] px-3 py-2.5 text-[12px] leading-5 text-[#4a4a4a] sm:px-4 sm:text-[13px] lg:mt-2 lg:px-5 lg:py-3 lg:text-[14px]">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
