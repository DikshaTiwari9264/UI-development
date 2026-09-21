const searches = [
  ["Personal Loan", "Marriage Loan", "Vehicle Loan", "Travel Loan", "Shopping Loan"],
  ["Medical Loan", "Home Renovation Loan", "Education Loan"],
];

const company = [
  "About Us",
  "Privacy Policy",
  "Lending Partners",
  "Terms & Conditions",
  "DLG Disclosure",
  "Grievance Redressal Policy",
  "Insurance Partners",
  "Discontinued Service Partners",
  "Responsible Vulnerability Disclosure",
];

const products = [
  "Personal Loan",
  "Loan against Property",
  "TrackMyPF",
  "Free Credit Score",
  "Marriage Loan",
  "Vehicle Loan",
  "Travel Loan",
  "Shopping Loan",
  "Medical Loan",
  "Home Renovation Loan",
  "Education Loan",
];

const calculators = [
  "EMI Calculator",
  "Bike Loan EMI Calculator",
  "Education Loan EMI Calculator",
  "Vehicle Loan EMI Calculator",
  "Personal Loan EMI Calculator",
];

const resources = ["Finn-Advice", "Newsroom", "FAQs", "Sitemap"];

function SocialIcon({ type }: { type: "youtube" | "facebook" | "x" | "instagram" | "linkedin" }) {
  const common = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true as const };
  if (type === "youtube") {
    return (
      <svg {...common}>
        <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 6.2L10.2 8L7 9.8V6.2Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg {...common}>
        <path d="M9 14V8.6h1.6L11 6.6H9V5.5c0-.6.2-1 .9-1H11V2.6C10.7 2.6 10 2.5 9.2 2.5 7.6 2.5 6.5 3.5 6.5 5.3v1.3H5V8.6h1.5V14H9Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg {...common}>
        <path d="M3 3.2h2.2l2.5 3.4L10.6 3.2H13l-4 5.1L13.2 13H11L8.3 9.3 5.5 13H3.1l4.2-5.3L3 3.2Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="2.5" y="2.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11.2" cy="4.8" r="0.7" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 6.8V12M4.5 4.6v.1M7.2 12V9.2c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4V12M10 7.8V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LinkList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item}>
          <a href={item === "FAQs" ? "#faqs" : "#"} className="text-[14px] text-[#d5d5d5] hover:text-white">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-[28px] font-semibold tracking-[-0.03em]">People also search for</h2>
        <div className="mx-auto mt-6 flex max-w-[760px] flex-col items-center gap-3">
          {searches.map((row) => (
            <div key={row[0]} className="flex flex-wrap justify-center gap-3">
              {row.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full bg-[#3a3a3a] px-4 py-2 text-[13.5px] text-white hover:bg-[#4a4a4a]"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1.05fr]">
          <div>
            <div className="flex gap-2">
              {(["youtube", "facebook", "x", "instagram", "linkedin"] as const).map((type) => (
                <a
                  key={type}
                  href="#"
                  aria-label={type}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2e2e2e] text-white"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>

            <p className="mt-8 text-[15px] font-medium">Any queries</p>
            <a
              href="#"
              className="mt-3 inline-flex h-10 items-center rounded-full bg-[#e94b78] px-5 text-[14px] font-semibold text-white"
            >
              Raise a Ticket with us
            </a>

            <p className="mt-8 text-[15px] font-medium">Download Our App</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href="#" className="inline-flex h-11 items-center gap-2 rounded-lg bg-black px-3 ring-1 ring-white/20">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true">
                  <path d="M12.7 9.5c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8s-1.7-.8-2.9-.8c-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.8-2.2-3.6Z" />
                  <path d="M10.4 2.8c.6-.7 1-1.7.9-2.8-.9 0-1.9.6-2.5 1.3-.6.6-1.1 1.7-.9 2.7 1 .1 1.9-.5 2.5-1.2Z" />
                </svg>
                <span className="leading-tight">
                  <span className="block text-[9px] text-white/80">Download on the</span>
                  <span className="block text-[13px] font-semibold">App Store</span>
                </span>
              </a>
              <a href="#" className="inline-flex h-11 items-center gap-2 rounded-lg bg-black px-3 ring-1 ring-white/20">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 1.6c0-.5.4-.8.8-.6l8.6 4.9-1.8 1.8L1 1.6Z" fill="#34a853" />
                  <path d="M1 14.4V1.6l6.6 6.4L1 14.4Z" fill="#4285f4" />
                  <path d="M10.4 6l2.4 1.4c.6.3.6 1.1 0 1.4L10.4 10.2 8.4 8.2 10.4 6Z" fill="#fbbc04" />
                  <path d="M1 14.4c.2.3.6.4.9.2l8.5-4.4-1.8-1.8L1 14.4Z" fill="#ea4335" />
                </svg>
                <span className="leading-tight">
                  <span className="block text-[9px] text-white/80">GET IT ON</span>
                  <span className="block text-[13px] font-semibold">Google Play</span>
                </span>
              </a>
            </div>

            <div className="mt-6 grid max-w-[280px] grid-cols-2 gap-3 text-center text-[11px] font-semibold text-[#1a1a1a]">
              <div className="rounded-md bg-white px-2 py-3">
                <p className="text-[10px] font-medium text-[#666]">Indian Fintech</p>
                <p className="mt-1 text-[12px] font-extrabold tracking-tight text-[#1d4ed8]">INDIA FINTECH</p>
              </div>
              <div className="rounded-md bg-white px-2 py-3">
                <p className="text-[10px] font-medium text-[#666]">ISO 27001 Certified</p>
                <p className="mt-1 text-[12px] font-extrabold text-[#1a1a1a]">ISO 27001</p>
              </div>
              <div className="rounded-md bg-white px-2 py-3">
                <p className="text-[10px] font-medium text-[#666]">FIDC Certified</p>
                <p className="mt-1 text-[18px] font-black tracking-tight text-[#1e3a8a]">FIDC</p>
              </div>
              <div className="rounded-md bg-white px-2 py-3">
                <p className="text-[10px] font-medium text-[#666]">Member</p>
                <p className="mt-1 text-[12px] font-extrabold text-[#1a1a1a]">FACE</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.08em]">THE COMPANY</h3>
            <LinkList items={company} />
            <h3 className="mt-8 text-[13px] font-semibold tracking-[0.08em]">RESOURCES</h3>
            <LinkList items={resources} />
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.08em]">PRODUCTS</h3>
            <LinkList items={products} />
            <h3 className="mt-8 text-[13px] font-semibold tracking-[0.08em]">CONTACT US</h3>
            <a href="mailto:makeiteasy@finnable.com" className="mt-4 block text-[14px] text-[#d5d5d5] hover:text-white">
              makeiteasy@finnable.com
            </a>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.08em]">CALCULATOR</h3>
            <LinkList items={calculators} />
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-4 text-[13.5px] text-[#cfcfcf] sm:flex-row sm:items-center sm:justify-between">
            <p>All Rights Reserved © 2026 Finnable</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-white">Grievance Redressal Policy</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
