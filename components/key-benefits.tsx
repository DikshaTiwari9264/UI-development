function SpeedIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="16" y="12" width="28" height="48" rx="6" fill="#fff7e8" stroke="#e8a23a" strokeWidth="2" />
      <path d="M27 22h8M27 28h6" stroke="#e8a23a" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 34l-4 8h6l-3 8 10-12h-6l4-4H30Z" fill="#3db57a" />
      <circle cx="50" cy="46" r="12" fill="#fff" stroke="#3db57a" strokeWidth="2" />
      <path d="M50 40v7l4 2" stroke="#3db57a" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 18c8-2 14 2 16 8" stroke="#7ad0a4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="14" y="16" width="26" height="36" rx="4" fill="#ffe8d6" stroke="#f08a5a" strokeWidth="2" />
      <path d="M20 26h14M20 32h10" stroke="#f08a5a" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 28l14 6v8c0 8-6 14-14 16-8-2-14-8-14-16v-8l14-6Z" fill="#7c4dff" />
      <rect x="48" y="40" width="10" height="8" rx="2" fill="#fff" />
      <path d="M51 40v-2a2 2 0 0 1 4 0v2" stroke="#7c4dff" strokeWidth="1.6" />
      <circle cx="53" cy="44" r="1.2" fill="#7c4dff" />
    </svg>
  );
}

function CreditScoreIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M18 42a18 18 0 0 1 36 0" stroke="#3db57a" strokeWidth="6" strokeLinecap="round" />
      <path d="M22 42a14 14 0 0 1 10-13" stroke="#e8a23a" strokeWidth="6" strokeLinecap="round" />
      <path d="M36 42l10-12" stroke="#2b2b2b" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="36" cy="42" r="3" fill="#2b2b2b" />
      <rect x="22" y="48" width="6" height="10" rx="1" fill="#e8a23a" />
      <rect x="31" y="44" width="6" height="14" rx="1" fill="#3db57a" />
      <rect x="40" y="40" width="6" height="18" rx="1" fill="#2f9e6b" />
      <path d="M48 36l4-6 2 3 4-2" stroke="#3db57a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TopUpIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M22 16h22l8 8v32a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" fill="#fff8ee" stroke="#e8a23a" strokeWidth="2" />
      <path d="M44 16v8h8" stroke="#e8a23a" strokeWidth="2" />
      <path d="M28 36h12M28 42h8" stroke="#e8a23a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="48" r="10" fill="#3db57a" />
      <path d="M42.5 48.2l2.4 2.4 5-5.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="54" cy="24" r="8" fill="#7c4dff" />
      <path d="M54 20v8M50 24h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const benefits = [
  {
    title: "Speed & Convenience",
    text: "Funds are disbursed directly to your bank account via IMPS/NEFT as soon as your digital loan agreement is e-signed.",
    icon: SpeedIcon,
    tone: "bg-[#f6f4df]",
  },
  {
    title: "Data Security & Privacy",
    text: "Applications are secured using 256-bit SSL encryption. Platforms follow strict RBI Digital Lending Guidelines (DLG).",
    icon: SecurityIcon,
    tone: "bg-[#f3eef8]",
  },
  {
    title: "Credit Score Improvement",
    text: "Timely repayment of structured monthly EMIs builds your credit history and improves your long-term CIBIL score.",
    icon: CreditScoreIcon,
    tone: "bg-[#eef6e6]",
  },
  {
    title: "Pre-Approved Top-Ups",
    text: "Maintaining a consistent repayment track record unlocks hassle-free top-up loans with zero additional paperwork.",
    icon: TopUpIcon,
    tone: "bg-[#eef3f8]",
  },
];

export function KeyBenefits() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[34px]">
          Key Benefits of Applying Online
        </h2>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[1.35fr_0.72fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article key={benefit.title} className={`flex gap-4 rounded-2xl p-5 ${benefit.tone}`}>
                <div className="shrink-0">
                  <benefit.icon />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1f1f1f]">{benefit.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-[#5c5c5c]">{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:min-h-full">
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
      </div>
    </section>
  );
}
