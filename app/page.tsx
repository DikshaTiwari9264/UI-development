import { ApplicationProcess } from "@/components/application-process";
import { BorrowerProtections } from "@/components/borrower-protections";
import { CommonUseCases } from "@/components/common-use-cases";
import { EligibilityCriteria } from "@/components/eligibility-criteria";
import { Faqs } from "@/components/faqs";
import { FeatureRow } from "@/components/feature-row";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KeyBenefits } from "@/components/key-benefits";
import { LoanCalculator } from "@/components/loan-calculator";
import { Overview } from "@/components/overview";
import { PricingStructure } from "@/components/pricing-structure";
import { RequiredDocumentation } from "@/components/required-documentation";

const pageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#how-to-apply", label: "How to apply" },
  { href: "#features", label: "Features" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#fees", label: "Fees and charges" },
  { href: "#faqs", label: "FAQs" },

];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden lg:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%]"
          style={{
            backgroundImage: "url('/assets/banner.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.72)_0%,rgba(12,10,9,0.38)_38%,rgba(12,10,9,0.18)_100%)]" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:min-h-[720px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-16">
          <div className="max-w-[640px] text-white">
            <p className="text-[12px] font-medium text-white/90 sm:text-[13px] lg:text-[14px]">Vehicle Loan</p>
            <h1 className="mt-3 max-w-[560px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.045em] sm:mt-4 sm:text-[40px] lg:mt-5 lg:text-[64px] lg:leading-[1.05]">
              Turn the key. We&apos;ll handle the loan.
            </h1>
            <p className="mt-3 max-w-[520px] text-[13px] leading-5 text-white/85 sm:mt-4 sm:text-[15px] sm:leading-6 lg:mt-6 lg:text-[16px] lg:leading-7">
              Whether it&apos;s a sleek two-wheeler or a powerful four-wheeler,
              Finnable deposits fast, hassle-free funds right into your bank
              account. Enjoy a 100% digital, zero-collateral application process
              with absolute transparency.
            </p>
            <a
              href="#eligibility"
              className="mt-5 inline-flex items-center rounded-sm bg-[#CD2E54] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(233,75,120,0.35)] transition hover:bg-[#d63e6c] sm:mt-6 sm:px-6 sm:py-3 sm:text-[14px] lg:mt-8 lg:px-8 lg:text-[15px]"
            >
              Check Loan Offer
            </a>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-[420px] lg:ml-auto">
            <LoanCalculator />
          </div>
        </div>
      </section>

      <div id="features">
        <FeatureRow />
      </div>

      <section className="overflow-x-hidden border-t border-[#f0f0f0] bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-10">
          <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-[#4a4a4a] sm:gap-x-4 sm:text-[14px] lg:flex-nowrap lg:gap-6 lg:text-[14.5px]">
            {pageLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#1a1a1a]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#eligibility"
            className="hidden py-[10px] shrink-0 items-center rounded-sm bg-[#e94b78] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(233,75,120,0.25)] transition hover:bg-[#d63e6c] sm:inline-flex"
          >
            Check Loan Offer
          </a>
        </div>
      </section>

      <Overview />
      <KeyBenefits />
      <EligibilityCriteria />
      <RequiredDocumentation />
      <ApplicationProcess />
      <PricingStructure />
      <CommonUseCases />
      <BorrowerProtections />
      <Faqs />
      <Footer />
    </main>
  );
}
