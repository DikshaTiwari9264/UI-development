const documents = [
  {
    label: "Identity Proof",
    icon: "identity" as const,
    text: "PAN Card (mandatory for credit bureau verification) + Aadhaar Card (for instant e-KYC OTP verification).",
  },
  {
    label: "Address Proof",
    icon: "address" as const,
    text: "Aadhaar Card, Passport, Voter ID, Driving License, or recent utility bill (less than 3 months old).",
  },
  {
    label: "Income Proof",
    icon: "income" as const,
    text: "Bank statements for the last 3 to 6 months showing salary credits.",
  },
];

function DocIcon({ type }: { type: "identity" | "address" | "income" }) {
  if (type === "identity") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="3.5" width="12" height="11" rx="1.6" stroke="#e94b78" strokeWidth="1.5" />
        <circle cx="7" cy="8" r="1.4" stroke="#e94b78" strokeWidth="1.3" />
        <path d="M5.2 12.2c.4-1.2 1.1-1.8 1.8-1.8s1.4.6 1.8 1.8M11 7.5h2.2M11 10h2.2" stroke="#e94b78" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "address") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3.5 8.2L9 3.5l5.5 4.7V14.5a1 1 0 0 1-1 1h-3.2v-3.4H7.7v3.4H4.5a1 1 0 0 1-1-1V8.2Z" stroke="#e94b78" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 7.2L9 3.5l6 3.7" stroke="#e94b78" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4.2 7.6v6.2M7.4 7.6v6.2M10.6 7.6v6.2M13.8 7.6v6.2" stroke="#e94b78" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 14.2h12" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RequiredDocumentation() {
  return (
    <section id="documents" className="bg-[#f3f8f4] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
            Required Documentation
          </h2>
          <p className="mt-3 max-w-[640px] text-[15px] leading-7 text-[#4a4a4a]">
            The application relies on a 100% digital documentation stack. No physical paperwork or branch visits are required.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#e3eee6] bg-white">
            {documents.map((item) => (
              <div key={item.label} className="grid border-b border-[#e7f0ea] sm:grid-cols-[220px_1fr]">
                <div className="flex items-start gap-2 px-4 py-4 text-[14.5px] font-semibold text-[#1f1f1f]">
                  <span className="mt-0.5">
                    <DocIcon type={item.icon} />
                  </span>
                  {item.label}
                </div>
                <p className="px-4 py-4 text-[14.5px] leading-6 text-[#3d3d3d]">{item.text}</p>
              </div>
            ))}
            <div className="grid sm:grid-cols-[220px_1fr]">
              <div className="hidden sm:block" />
              <p className="px-4 py-4 text-[14.5px] leading-6 text-[#3d3d3d]">
                <span className="font-semibold text-[#1f1f1f]">Optional:</span> Direct permission via the RBI-regulated Account Aggregator (AA) network for instant, encrypted bank statement fetching without manual PDF uploads.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:mt-16 lg:min-h-[320px]">
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
