import Image from "next/image";

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
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "#E11D48",
    className: "h-4 w-4 shrink-0 lg:h-5 lg:w-5",
    "aria-hidden": true as const,
  };

  if (type === "apr") {
    return (
      <svg {...common}>
        <circle cx="10" cy="6.2" r="2.7" />
        <path d="M4.2 16.6c.5-2.8 2.7-4.3 5.8-4.3s5.3 1.5 5.8 4.3c.1.4-.2.7-.6.7H4.8c-.4 0-.7-.3-.6-.7Z" />
      </svg>
    );
  }

  if (type === "fee") {
    return (
      <svg {...common}>
        <circle cx="7.1" cy="6.4" r="2.1" />
        <circle cx="13.1" cy="6.8" r="1.7" />
        <path d="M3.4 15.8c.35-2.1 1.9-3.2 3.8-3.2 1.7 0 3 .9 3.5 2.3.2-.9.8-1.6 1.7-2 .9-.3 1.8-.2 2.6.3.7.5 1.1 1.2 1.3 2.1.1.4-.2.7-.6.7H4c-.4 0-.7-.3-.6-.6Z" />
      </svg>
    );
  }

  if (type === "stamp") {
    return (
      <svg {...common}>
        <path d="M10 2.6 2.8 7.2h14.4L10 2.6Z" />
        <path d="M4.3 8.4h1.7v5.2H4.3V8.4Zm4.8 0h1.8v5.2H9.1V8.4Zm4.9 0h1.7v5.2h-1.7V8.4Z" />
        <path d="M3.2 14.6h13.6v1.7H3.2v-1.7Z" />
      </svg>
    );
  }

  if (type === "late") {
    return (
      <svg {...common}>
        <path d="M5 2.8h7.2L15.6 6v10.2c0 .7-.5 1.2-1.2 1.2H5c-.7 0-1.2-.5-1.2-1.2V4c0-.7.5-1.2 1.2-1.2Z" />
        <path d="M12 2.8V6h3.4" fill="#fff" />
        <path d="M6.2 9.1h6.2v1.2H6.2V9.1Zm0 2.3h6.2v1.2H6.2v-1.2Zm0 2.3h4v1.2h-4v-1.2Z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4.4 2.8h7.1l3.5 3.3v10c0 .7-.5 1.2-1.2 1.2H4.4c-.7 0-1.2-.5-1.2-1.2V4c0-.7.5-1.2 1.2-1.2Z" />
      <path d="M11.2 2.8v3.2h3.4" fill="#fff" />
      <path d="M5.8 8.8h5.2v1.15H5.8V8.8Zm0 2.2h3.6v1.15H5.8V11Z" fill="#fff" />
      <path d="M11.2 12.2 14.6 8.8l1.5 1.5-3.4 3.4h-1.5v-1.5Z" fill="#fff" />
    </svg>
  );
}

const exampleLeft = [
  { label: "Sanctioned Amount:", value: "₹1,00,000" },
  { label: "Processing Fee (2.5% + GST):", value: "₹2,950" },
  { label: "Net Disbursed Amount:", value: "₹97,050" },
];

const exampleRight = [
  { label: "Monthly EMI:", value: "₹8,979" },
  { label: "Total Interest Payable:", value: "₹7,748" },
  { label: "Total Amount Repaid:", value: "₹1,07,748 (Effective APR ~18.6%)" },
];

export function PricingStructure() {
  return (
    <section
      id="fees"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#F0F9FF_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="text-[20px] font-semibold leading-7 text-[#171717] sm:text-[24px] lg:text-[34px] lg:leading-tight">
              Interest Rates, Fees, and Pricing Structure
            </h2>
            <p className="mt-1.5 text-[13px] leading-5 text-[#525252] sm:mt-2 sm:text-[14px] lg:text-[15px]">
              Transparent pricing ensures you know the exact cost of your loan before signing:
            </p>
          </div>

          <div className="flex flex-col-reverse gap-4 sm:gap-5 lg:contents">
          <div className="overflow-hidden rounded-lg border border-[#E6EEF5] bg-white lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-[auto_1fr]">
              {fees.map((item, index) => (
                <div key={item.title} className="contents">
                  <div
                    className={`flex items-center gap-2.5 border-b border-[#E6EEF5] px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5 lg:block lg:row-start-1 lg:px-3 lg:pb-3 lg:pt-4 xl:px-4 ${
                      index !== fees.length - 1 ? "lg:border-r" : ""
                    }`}
                  >
                    <FeeIcon type={item.icon} />
                    <h3 className="text-[13px] font-semibold leading-5 text-[#171717] sm:text-[14px] lg:mt-3 lg:text-[13px] xl:text-[14px]">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`px-3 py-2.5 text-[12px] leading-5 text-[#737373] sm:px-4 sm:py-3 sm:text-[13px] lg:row-start-2 lg:px-3 lg:py-3 lg:text-[12px] xl:px-4 xl:py-4 xl:text-[13px] ${
                      index !== fees.length - 1 ? "border-b border-[#E6EEF5] lg:border-b-0 lg:border-r" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] max-h-[220px] overflow-hidden rounded-lg sm:max-h-[280px] lg:col-start-2 lg:row-start-2 lg:aspect-auto lg:h-full lg:max-h-none lg:rounded-xl">
            <Image
              src="/assets/frame-76.png"
              alt="Family spending time together outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 300px, 100vw"
            />
          </div>
          </div>

          <div className="rounded-lg border border-[#BAE6FD] bg-[#E0F2FE] px-3 py-3 sm:px-4 sm:py-4 lg:col-start-1 lg:row-start-3 lg:px-5">
            <h3 className="text-[14px] font-semibold text-[#0C4A6E] sm:text-[15px] lg:text-[16px]">Representative Loan Example</h3>
            <p className="mt-1.5 text-[12px] leading-5 text-[#0C4A6E] sm:mt-2 sm:text-[13px] lg:text-[14px]">
              For a loan of ₹1,00,000 borrowed for 12 months at an interest rate of 14% p.a.:
            </p>
            <div className="mt-2 grid gap-1.5 sm:mt-3 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10">
              {[exampleLeft, exampleRight].map((column) => (
                <ul key={column[0].label} className="space-y-1 text-[12px] leading-5 text-[#0C4A6E] sm:space-y-1.5 sm:text-[13px] lg:text-[14px]">
                  {column.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>
                        <span className="font-bold">{item.label}</span> {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
