"use client";

import { useState } from "react";

const navItems = [
  { label: "Personal Loan", hasMenu: true },
  { label: "Credit Score", hasMenu: false },
  { label: "TrackMyPF", hasMenu: false },
  { label: "Products", hasMenu: true },
  { label: "Calculators", hasMenu: true },
];

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinkCar() {
  return (
    <svg width="92" height="34" viewBox="0 0 92 34" fill="none" aria-hidden="true">
      <ellipse cx="46" cy="30" rx="28" ry="3" fill="#ead7d2" />
      <path
        d="M18 22c1.2-6.2 6.4-11.5 16.8-13.2 8.4-1.4 18.2-.4 24.6 2.4 4.2 1.8 9.6 6.2 12.4 9.6 1.2 1.4 1 3.2-.6 3.8H20.2c-2.2 0-2.8-1.2-2.2-2.6Z"
        fill="url(#carBody)"
      />
      <path d="M28 11.4c4.6-1.2 12.6-1.6 19.2-.2 2.8.6 4.2 2.8 4.6 5.2H32.2c-2.2 0-3.6-2.4-4.2-5Z" fill="#f7e6e1" />
      <path d="M53.4 16.6c.6-3.4 3.8-5.8 8.8-4.6 3.4.8 6.4 3.6 7.8 6.2H54.2c-.6 0-.9-.6-.8-1.6Z" fill="#f4d4ce" />
      <circle cx="30" cy="24.5" r="5.2" fill="#2b2b2b" />
      <circle cx="30" cy="24.5" r="2.4" fill="#d9d9d9" />
      <circle cx="68" cy="24.5" r="5.2" fill="#2b2b2b" />
      <circle cx="68" cy="24.5" r="2.4" fill="#d9d9d9" />
      <circle cx="20" cy="20.5" r="1.6" fill="#f8d4cc" />
      <defs>
        <linearGradient id="carBody" x1="18" y1="10" x2="74" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3b7b0" />
          <stop offset="1" stopColor="#e98b86" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0f0f0] bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-10">
        <div className="flex min-w-0 items-center gap-8">
          <a href="#overview" className="shrink-0 text-[28px] font-extrabold leading-none tracking-[-0.06em] text-[#f05678]">
            finnable
          </a>

          <nav className="hidden items-center gap-6 text-[14.5px] font-medium text-[#2f2f2f] xl:flex">
            {navItems.map((item) => (
              <button key={item.label} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <span>{item.label}</span>
                {item.hasMenu ? <ChevronDown /> : null}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden h-11 w-[168px] items-center justify-center rounded-full border border-[#ececec] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] md:flex">
            <PinkCar />
          </div>

          <button className="hidden h-11 items-center rounded-full border border-[#ececec] bg-white px-5 text-[14px] font-medium text-[#2b2b2b] shadow-[0_2px_10px_rgba(0,0,0,0.04)] lg:inline-flex">
            What is Credit Score?
          </button>

          <button
            aria-label="Notifications"
            className="hidden h-10 w-10 items-center justify-center text-[#4a4a4a] md:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 9.5A6 6 0 0 1 18 9.5c0 6 2 7.5 2 7.5H4s2-1.5 2-7.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f0a0d8_0%,#c56bff_45%,#8a3ad6_100%)] text-white shadow-[0_6px_16px_rgba(138,58,214,0.28)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececec] text-[#2b2b2b] xl:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#f0f0f0] bg-white px-5 py-4 xl:hidden">
          <nav className="flex flex-col gap-3 text-[15px] font-medium text-[#2f2f2f]">
            {navItems.map((item) => (
              <button key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                {item.hasMenu ? <ChevronDown /> : null}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
