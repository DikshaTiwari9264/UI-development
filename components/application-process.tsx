const steps = [
  {
    step: "Step 1",
    title: "Check Your Eligibility",
    text: "Enter basic personal details, PAN, and monthly income to view your pre-approved loan offer in under 60 seconds.",
    icon: "eligibility",
  },
  {
    step: "Step 2",
    title: "Select Amount & Tenure",
    text: "Choose your loan amount (up to ₹10 Lakhs) and repayment tenure (6–60 months) to adjust your preferred monthly EMI.",
    icon: "amount",
  },
  {
    step: "Step 3",
    title: "Complete Digital e-KYC",
    text: "Perform instant Aadhaar-based OTP verification and take a live selfie for identity matching.",
    icon: "kyc",
  },
  {
    step: "Step 4",
    title: "Link Bank Account",
    text: "Connect your primary bank account via the Account Aggregator or upload your digital bank statement.",
    icon: "bank",
  },
  {
    step: "Step 5",
    title: "Sign Agreement & Set Up Auto-Debit",
    text: "Review your Key Fact Statement (KFS), e-sign the loan contract using Aadhaar OTP, and register an e-NACH/e-Mandate for automated EMI clearing.",
    icon: "sign",
  },
  {
    step: "Step 6",
    title: "Receive Instant Disbursal",
    text: "The approved net loan amount is transferred straight to your bank account within minutes.",
    icon: "disbursal",
  },
] as const;

function StepIcon({ type }: { type: (typeof steps)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "eligibility") {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="12" height="15" rx="2" stroke="#e94b78" strokeWidth="1.6" />
        <path d="M8 8h6M8 11.5h6M8 15h3.5" stroke="#e94b78" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "amount") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" stroke="#e94b78" strokeWidth="1.6" />
        <path d="M11 7.2v7.6M9.2 9.1c.4-.7 1-.9 1.8-.9 1.1 0 1.8.6 1.8 1.4 0 .9-.8 1.3-1.8 1.5s-1.8.6-1.8 1.5c0 .8.7 1.4 1.8 1.4.8 0 1.4-.3 1.8-.9" stroke="#e94b78" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "kyc") {
    return (
      <svg {...common}>
        <circle cx="11" cy="8" r="2.6" stroke="#e94b78" strokeWidth="1.6" />
        <path d="M5.5 17.2c.8-2.6 2.8-4 5.5-4s4.7 1.4 5.5 4" stroke="#e94b78" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bank") {
    return (
      <svg {...common}>
        <path d="M4 9.2L11 4.5l7 4.7" stroke="#e94b78" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 9.5v6.2M9.3 9.5v6.2M12.7 9.5v6.2M16 9.5v6.2M4.5 16.4h13" stroke="#e94b78" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "sign") {
    return (
      <svg {...common}>
        <rect x="4.5" y="3.5" width="10" height="13" rx="1.6" stroke="#e94b78" strokeWidth="1.6" />
        <path d="M7.2 8h5M7.2 11h3.2M12.5 14.5l4-4 1.6 1.6-4 4H12.5v-1.6Z" stroke="#e94b78" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12.2 3.5L6.5 12h4.2L9.2 18.5 16 9.2h-4.2L12.2 3.5Z" stroke="#e94b78" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function ApplicationProcess() {
  return (
    <section id="how-to-apply" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
          Step-by-Step Application Process
        </h2>

        <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-[760px] overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80')",
            }}
            role="img"
            aria-label="Family spending time together outdoors"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true" className="ml-1">
              <path d="M2 1.5L20.5 13L2 24.5V1.5Z" fill="#e94b78" />
            </svg>
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((item) => (
            <article key={item.step} className="rounded-2xl bg-[#fff4f6] px-4 py-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(233,75,120,0.08)]">
                <StepIcon type={item.icon} />
              </div>
              <p className="mt-4 text-[13px] text-[#8a8a8a]">{item.step}</p>
              <h3 className="mt-1 text-[16px] font-semibold leading-6 text-[#1f1f1f]">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-6 text-[#5a5a5a]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
