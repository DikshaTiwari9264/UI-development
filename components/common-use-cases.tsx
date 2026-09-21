const cases = [
  {
    title: "Debt Consolidation",
    text: "Combine high-interest credit card dues and short-term debt into one single EMI with a lower interest rate.",
    tone: "bg-[#f7f6e4]",
    icon: "debt",
  },
  {
    title: "Medical Emergencies",
    text: "Manage sudden medical costs, hospitalizations, or specialized care when insurance falls short.",
    tone: "bg-[#f3eef8]",
    icon: "medical",
  },
  {
    title: "Home Renovation",
    text: "Update kitchen spaces, repair structural issues, or buy home appliances without dipping into emergency funds.",
    tone: "bg-[#eef6e8]",
    icon: "home",
  },
  {
    title: "Education & Up-skilling",
    text: "Fund professional certifications, bootcamps, or higher education programs to accelerate your career growth.",
    tone: "bg-[#eef3f8]",
    icon: "education",
  },
  {
    title: "Life Events & Travel",
    text: "Finance weddings, family functions, or international travel with easy structured monthly repayments.",
    tone: "bg-[#fff1f4]",
    icon: "travel",
  },
] as const;

function CaseIcon({ type }: { type: (typeof cases)[number]["icon"] }) {
  if (type === "debt") {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="28" height="18" rx="3" fill="#fff" stroke="#e8a23a" strokeWidth="2" />
        <path d="M8 22h28" stroke="#e8a23a" strokeWidth="2" />
        <rect x="22" y="28" width="28" height="18" rx="3" fill="#fff7e8" stroke="#3db57a" strokeWidth="2" />
        <circle cx="36" cy="37" r="5" stroke="#3db57a" strokeWidth="2" />
        <path d="M36 34.5v5M34.2 36.2c.3-.5.7-.7 1.3-.7.8 0 1.3.4 1.3 1s-.5.9-1.3 1-1.3.4-1.3 1 .5 1 1.3 1c.6 0 1-.2 1.3-.6" stroke="#3db57a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "medical") {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="14" y="20" width="28" height="22" rx="6" fill="#ffe4e8" stroke="#e94b78" strokeWidth="2" />
        <path d="M28 26v10M23 31h10" stroke="#e94b78" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M40 24c6 2 10 8 10 14" stroke="#7c4dff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="40" r="6" fill="#7c4dff" />
        <path d="M48 37.5v5M45.5 40h5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M12 30L32 14l20 16v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V30Z" fill="#e8f8ee" stroke="#3db57a" strokeWidth="2" />
        <path d="M27 52V36h10v16" stroke="#3db57a" strokeWidth="2" />
        <circle cx="46" cy="22" r="7" fill="#7c4dff" />
        <path d="M46 19v6M43 22h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "education") {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M14 30c8 6 28 6 36 0v14c-8 6-28 6-36 0V30Z" fill="#fff" stroke="#e8a23a" strokeWidth="2" />
        <path d="M32 24l18 8-18 8-18-8 18-8Z" fill="#eef6ff" stroke="#5b8def" strokeWidth="2" />
        <path d="M44 18l6 3v8" stroke="#7c4dff" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 14h10l-2 6H44l-2-6Z" fill="#7c4dff" />
      </svg>
    );
  }

  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="24" width="30" height="22" rx="4" fill="#fff1f4" stroke="#e94b78" strokeWidth="2" />
      <path d="M20 24v-3a6 6 0 0 1 12 0v3" stroke="#e94b78" strokeWidth="2" />
      <path d="M44 20l6-4M46 16l2 6" stroke="#7c4dff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="18" r="3" fill="#e8a23a" />
    </svg>
  );
}

export function CommonUseCases() {
  const primary = cases.slice(0, 4);
  const travel = cases[4];

  return (
    <section id="use-cases" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]">
          Common Use Cases
        </h2>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {primary.map((item) => (
                <article key={item.title} className={`flex gap-4 rounded-2xl p-5 ${item.tone}`}>
                  <div className="shrink-0">
                    <CaseIcon type={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1f1f1f]">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#5c5c5c]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <article className={`mt-4 flex gap-4 rounded-2xl p-5 sm:w-[calc(50%-8px)] ${travel.tone}`}>
              <div className="shrink-0">
                <CaseIcon type={travel.icon} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f1f1f]">{travel.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#5c5c5c]">{travel.text}</p>
              </div>
            </article>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:min-h-[360px]">
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
