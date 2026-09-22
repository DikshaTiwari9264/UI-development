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

      <section className="relative min-h-[640px] overflow-hidden lg:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%]"
          style={{
            backgroundImage: "url('/assets/hero-banner.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.72)_0%,rgba(12,10,9,0.38)_38%,rgba(12,10,9,0.18)_100%)]" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-16">
          <div className="max-w-[640px] text-white">
            <p className="text-[14px] font-medium text-white/90">Vehicle Loan</p>
            <h1 className="mt-5 max-w-[560px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[56px] lg:text-[64px]">
              Turn the key. We&apos;ll handle the loan.
            </h1>
            <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-white/85">
              Whether it&apos;s a sleek two-wheeler or a powerful four-wheeler,
              Finnable deposits fast, hassle-free funds right into your bank
              account. Enjoy a 100% digital, zero-collateral application process
              with absolute transparency. 
            </p>
            <a
              href="#eligibility"
              className="mt-8 inline-flex h-12 items-center rounded-xl bg-[#e94b78] px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(233,75,120,0.35)] transition hover:bg-[#d63e6c]"
            >
              Check Loan Offer
            </a>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:ml-auto">
            <LoanCalculator />
          </div>
        </div>
      </section>

      <div id="features">
        <FeatureRow />
      </div>

      <section className="border-t border-[#f0f0f0] bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-5 py-4 lg:px-10">
          <nav className="flex min-w-0 flex-1 items-center gap-6 overflow-x-auto text-[14.5px] text-[#4a4a4a]">
            {pageLinks.map((item) => (
              <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#1a1a1a]">
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
