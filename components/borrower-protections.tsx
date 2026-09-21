const protections = [
  {
    title: "Direct Funds Transfer",
    text: "All loan disbursals and EMI repayments occur directly between your bank account and RBI-registered NBFCs or banks. No third-party wallet transfers are involved.",
    icon: "transfer",
  },
  {
    title: "Mandatory Key Fact Statement (KFS)",
    text: "You receive a clear breakdown of all costs, including processing fees, APR, interest charges, and default penalties prior to loan execution.",
    icon: "kfs",
  },
  {
    title: "72-Hour Cool-Off Period",
    text: "Borrowers are provided a mandatory 3-day look-up period. If you decide to cancel the loan within 72 hours of disbursal, you can return the principal amount with pro-rata interest without incurring foreclosure charges.",
    icon: "cooloff",
  },
] as const;

function ProtectionIcon({ type }: { type: (typeof protections)[number]["icon"] }) {
  if (type === "transfer") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="6" r="2.2" stroke="#e94b78" strokeWidth="1.5" />
        <path d="M4.8 14.2c.6-2.1 2.2-3.2 4.2-3.2s3.6 1.1 4.2 3.2" stroke="#e94b78" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="10" height="12" rx="1.5" stroke="#e94b78" strokeWidth="1.5" />
      <path d="M6.5 7h5M6.5 10h5M6.5 12.5h3" stroke="#e94b78" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BorrowerProtections() {
  return (
    <section id="protections" className="bg-[#fff6f8] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] items-start gap-6 lg:grid-cols-[1.45fr_0.5fr]">
        <div>
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
            RBI Compliance &amp; Borrower Protections
          </h2>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#f3e4e8] bg-white">
            <div className="grid md:grid-cols-3">
              {protections.map((item) => (
                <div key={item.title} className="border-b border-[#f6eef1] px-5 py-5 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0">
                  <ProtectionIcon type={item.icon} />
                  <h3 className="mt-3 text-[15px] font-semibold leading-6 text-[#1f1f1f]">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#5a5a5a]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[240px] overflow-hidden rounded-2xl lg:mt-16 lg:min-h-[280px]">
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
