function ZeroPaperworkIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="20" y="14" width="28" height="44" rx="6" fill="#dff6ea" stroke="#3db57a" strokeWidth="2" />
      <rect x="24" y="20" width="20" height="32" rx="3" fill="#fff" />
      <circle cx="34" cy="36" r="8" fill="#3db57a" />
      <path d="M30.5 36.2L33.1 38.8L38.2 33.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 18l4-6M52 24l8-2M18 22l-7-2" stroke="#7ad0a4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="53" cy="14" r="2" fill="#7ad0a4" />
    </svg>
  );
}

function NoCollateralIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M22 18h24l8 8v30a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4Z" fill="#fff3e0" stroke="#f0a14a" strokeWidth="2" />
      <path d="M46 18v8h8" stroke="#f0a14a" strokeWidth="2" />
      <path d="M26 34h16M26 42h12" stroke="#f0a14a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="22" r="10" fill="#b07cff" />
      <path d="M50 16v8M46 22h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LoanInMinutesIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="18" y="20" width="28" height="36" rx="6" fill="#ffe4d6" stroke="#f08a5a" strokeWidth="2" />
      <circle cx="32" cy="38" r="8" fill="#fff" />
      <path d="M32 34v5h4" stroke="#f08a5a" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 44c6 1 14-2 18-10" stroke="#5ec8c0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="54" cy="28" r="8" fill="#5ec8c0" />
      <path d="M51 28h6M54 25v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="48" r="5" fill="#ffd36b" />
      <circle cx="24" cy="52" r="4" fill="#ffe08a" />
    </svg>
  );
}

function FlexibleRepaymentIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="16" y="18" width="34" height="36" rx="6" fill="#e8fbf4" stroke="#3ecf8e" strokeWidth="2" />
      <path d="M22 28h22M22 34h14M22 40h18" stroke="#3ecf8e" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="22" r="10" fill="#ffd36b" />
      <path d="M48 17v6l4 2" stroke="#c98912" strokeWidth="2" strokeLinecap="round" />
      <circle cx="52" cy="50" r="8" fill="#5ec8c0" />
      <path d="M49 50h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SimpleTransparentIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M22 16h20l10 10v30a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" fill="#e9f8ee" stroke="#4caf7a" strokeWidth="2" />
      <path d="M42 16v10h10" stroke="#4caf7a" strokeWidth="2" />
      <path d="M26 34h16M26 40h12" stroke="#4caf7a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="46" r="12" stroke="#f0a14a" strokeWidth="3" fill="#fff8ee" />
      <path d="M54 54l8 8" stroke="#f0a14a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="38" cy="28" r="7" fill="#4caf7a" />
      <path d="M35 28.2l2.2 2.2L42 25.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features = [
  { title: "Zero Paperwork", icon: ZeroPaperworkIcon },
  { title: "No Collateral", icon: NoCollateralIcon },
  { title: "Loan in 60 Minutes", icon: LoanInMinutesIcon },
  { title: "Flexible Repayment", icon: FlexibleRepaymentIcon },
  { title: "Simple and Transparent", icon: SimpleTransparentIcon },
];

export function FeatureRow() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff7f8_0%,#fdecef_100%)] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[32px] font-medium tracking-[-0.03em] text-[#2b2b2b] sm:text-[36px]">
          Access instant credit when it matters most
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-3 text-center">
              <feature.icon />
              <p className="text-[15px] font-medium text-[#2b2b2b]">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
