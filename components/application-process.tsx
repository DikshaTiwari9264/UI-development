import Image from "next/image";

const steps = [
  {
    step: "Step 1",
    title: "Check Your Eligibility",
    text: "Enter basic personal details, PAN, and monthly income to view your pre-approved loan offer in under 60 seconds.",
    icon: "/assets/Frame (6).png",
  },
  {
    step: "Step 2",
    title: "Select Amount & Tenure",
    text: "Choose your loan amount (up to ₹10 Lakhs) and repayment tenure (6–60 months) to adjust your preferred monthly EMI.",
    icon: "/assets/Frame(11).png",
  },
  {
    step: "Step 3",
    title: "Complete Digital e-KYC",
    text: "Perform instant Aadhaar-based OTP verification and take a live selfie for identity matching.",
    icon: "/assets/Frame (10).png",
  },
  {
    step: "Step 4",
    title: "Link Bank Account",
    text: "Connect your primary bank account via the Account Aggregator or upload your digital bank statement.",
    icon: "/assets/Frame (8).png",
  },
  {
    step: "Step 5",
    title: "Sign Agreement & Set Up Auto-Debit",
    text: "Review your Key Fact Statement (KFS), e-sign the loan contract using Aadhaar OTP, and register an e-NACH/e-Mandate for automated EMI clearing.",
    icon: "/assets/Frame (7).png",
  },
  {
    step: "Step 6",
    title: "Receive Instant Disbursal",
    text: "The approved net loan amount is transferred straight to your bank account within minutes.",
    icon: "/assets/Frame (9).png",
  },
] as const;

export function ApplicationProcess() {
  return (
    <section id="how-to-apply" className="bg-white px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[12px] font-semibold text-[##171717] sm:text-[36px]">
          Step-by-Step Application Process
        </h2>

        <div className="relative mx-auto mt-6 aspect-[16/9] w-full max-w-[760px] overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80')",
            }}
            role="img"
            aria-label="Family spending time together outdoors"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true" className="ml-1">
              <path d="M2 1.5L20.5 13L2 24.5V1.5Z" fill="#e94b78" />
            </svg>
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((item) => (
            <article key={item.step} className="rounded-sm bg-[#fff4f6] px-[16px] py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(233,75,120,0.08)]">
                <Image src={item.icon} alt="" width={24} height={24} />
              </div>
              <p className="mt-2 text-[12px] font-medium text-[##737373]">{item.step}</p>
              <h3 className="mt-1 text-[14px] font-semibold  text-[##262626]">{item.title}</h3>
              <p className="mt-2 text-[13px] font-medium text-[#5a5a5a]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
