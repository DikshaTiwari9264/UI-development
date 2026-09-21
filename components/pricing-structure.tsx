const fees = [
  {
    title: "Annual Percentage Rate (APR)",
    text: "Ranges from 10.99% to 29.99% per annum depending on your credit profile, risk tier, and income stability.",
    icon: "apr",
  },
  {
    title: "Processing Fee",
    text: "1.5% to 3.5% of the loan amount (deducted upfront from the disbursed amount, plus applicable GST).",
    icon: "fee",
  },
  {
    title: "Stamp Duty & Documentation",
    text: "Nominal fees levied as per actual state-specific stamp duty laws.",
    icon: "stamp",
  },
  {
    title: "Late Payment Charges",
    text: "2% per month on the overdue EMI amount for delayed payments.",
    icon: "late",
  },
  {
    title: "Foreclosure / Prepayment",
    text: "Option to prepay your loan after a minimum specified tenure (typically 3 to 6 months), subject to applicable foreclosure terms detailed in your contract.",
    icon: "prepay",
  },
] as const;

function FeeIcon({ type }: { type: (typeof fees)[number]["icon"] }) {
  if (type === "apr") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="6" r="2.2" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M4.8 14.2c.6-2.1 2.2-3.2 4.2-3.2s3.6 1.1 4.2 3.2" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "fee" || type === "late") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="10" height="12" rx="1.5" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M6.5 7h5M6.5 10h5M6.5 12.5h3" stroke="#e94b78" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "stamp") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3.5 8L9 4l5.5 4" stroke="#e94b78" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 8.2v5.3M8 8.2v5.3M11 8.2v5.3M14 8.2v5.3M3.8 14.2h10.4" stroke="#e94b78" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="9" height="11" rx="1.4" stroke="#e94b78" strokeWidth="1.5" />
      <path d="M6 7.5h4M6 10h2.5M11.5 12.5l3-3 1.4 1.4-3 3h-1.4v-1.4Z" stroke="#e94b78" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

const exampleLeft = [
  "Sanctioned Amount: ₹1,00,000",
  "Processing Fee (2.5% + GST): ₹2,950",
  "Net Disbursed Amount: ₹97,050",
];

const exampleRight = [
  "Monthly EMI: ₹8,979",
  "Total Interest Payable: ₹7,748",
  "Total Amount Repaid: ₹1,07,748 (Effective APR ~18.6%)",
];

export function PricingStructure() {
  return (
    <section id="fees" className="bg-[#f4f8fb] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
              Interest Rates, Fees, and Pricing Structure
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#4a4a4a]">
              Transparent pricing ensures you know the exact cost of your loan before signing:
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-[#e6eef5] bg-white">
              <div className="grid sm:grid-cols-2 xl:grid-cols-5">
                {fees.map((item) => (
                  <div key={item.title} className="border-b border-[#eef3f7] px-4 py-5 sm:border-r xl:border-b-0 last:border-r-0">
                    <FeeIcon type={item.icon} />
                    <h3 className="mt-3 text-[14.5px] font-semibold leading-5 text-[#1f1f1f]">{item.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-6 text-[#5a5a5a]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl lg:mt-28 lg:min-h-[280px]">
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

        <div className="mt-5 rounded-xl border border-[#d7e7f5] bg-[#eaf3fb] px-5 py-5 sm:px-6">
          <h3 className="text-[16px] font-semibold text-[#1f1f1f]">Representative Loan Example</h3>
          <p className="mt-2 text-[14.5px] text-[#3d3d3d]">
            For a loan of ₹1,00,000 borrowed for 12 months at an interest rate of 14% p.a.:
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-10">
            <ul className="space-y-2 text-[14.5px] leading-6 text-[#2f2f2f]">
              {exampleLeft.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-[14.5px] leading-6 text-[#2f2f2f]">
              {exampleRight.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
