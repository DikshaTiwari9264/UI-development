"use client";

import Image from "next/image";
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

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0f0f0] bg-white">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-5 lg:h-[68px] lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-18">
          <a href="#overview" className="shrink-0 text-[20px] font-extrabold leading-none tracking-[-0.06em] text-[#f05678] sm:text-[22px] lg:text-[24px]">
            finnable
          </a>

          <nav className="hidden items-center gap-3 text-[12px] font-medium text-[#2f2f2f] lg:flex xl:gap-5 xl:text-[13px]">
            {navItems.map((item) => (
              <button key={item.label} className="inline-flex items-center gap-1 whitespace-nowrap">
                <span>{item.label}</span>
                {item.hasMenu ? <ChevronDown /> : null}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-center gap-1 ">
          <div className="hidden  items-center justify-center sm:flex ">
            <Image
              src="/assets/Link (1).png"
              alt=""
              width={300}
              height={80}
              className="h-14 w-auto object-contain md:h-16 lg:h-[72px]"
            />
          </div>

          <div className="flex h-9 w-[76px] shrink-0 items-center justify-between rounded-full bg-[#ffffff] px-1.5 shadow-md sm:h-10 sm:w-auto sm:justify-start sm:gap-1 sm:px-0 sm:pl-4 sm:pr-1 lg:h-11 lg:pl-5">
            <span className="hidden whitespace-nowrap pr-1 text-[11px] font-medium text-[#9a9a9a] sm:inline lg:text-[13px]">
              What is Credit Score?
            </span>
            <button aria-label="Voice search" className="flex h-7 w-7 shrink-0 items-center justify-center text-[#7a7a7a] sm:h-8 sm:w-6">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="9" y="3.5" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.7" />
                <path d="M7 11.5a5 5 0 0 0 10 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M12 16.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
            <button
              aria-label="Search"
              className="flex h-7 w-7 min-w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#f7b7e8_0%,#e07bff_42%,#8b7bff_100%)] text-white shadow-md sm:h-8 sm:w-8 sm:min-w-8"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="2" />
                <path d="M15.8 15.8L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            aria-label="Open menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ececec] text-[#2b2b2b] sm:h-9 sm:w-9 lg:hidden"
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
        <div className="border-t border-[#f0f0f0] bg-white px-3 py-3 sm:px-5 lg:hidden">
          <nav className="flex flex-col gap-2.5 text-[13px] font-medium text-[#2f2f2f]">
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
