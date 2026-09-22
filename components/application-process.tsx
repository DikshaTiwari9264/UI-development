import Image from "next/image";

const steps = [
  {
    step: "Step 1",
    title: "Check Your Eligibility",
    text: "Enter basic personal details, PAN, and monthly income to view your pre-approved loan offer in under 60 seconds.",
    icon: "/assets/Frame(11).png",
  },
  {
    step: "Step 2",
    title: "Select Amount & Tenure",
    text: "Choose your loan amount (up to ₹10 Lakhs) and repayment tenure (6–60 months) to adjust your preferred monthly EMI.",
    icon: "/assets/Frame (10).png",
  },
  {
    step: "Step 3",
    title: "Complete Digital e-KYC",
    text: "Perform instant Aadhaar-based OTP verification and take a live selfie for identity matching.",
    icon: "/assets/Frame (9).png",
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
    icon: "/assets/Frame (6).png",
  },
] as const;

export function ApplicationProcess() {
  return (
    <section id="how-to-apply" className="bg-white px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[20px] font-semibold leading-7 text-[#171717] sm:text-[24px] lg:text-[36px] lg:leading-tight">
          Step-by-Step Application Process
        </h2>

        <div className="relative mx-auto mt-4 aspect-[16/9] w-full max-h-[220px] max-w-[760px] overflow-hidden rounded-lg sm:mt-5 sm:max-h-[320px] sm:rounded-xl lg:mt-6 lg:max-h-[430px] lg:rounded-2xl">
          <Image
            src="/assets/frame-76.png"
            alt="Family spending time together outdoors"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 760px, 100vw"
          />
        </div>

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:mt-8 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((item) => (
            <article key={item.step} className="rounded-sm bg-[#fff4f6] px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(233,75,120,0.08)] sm:h-10 sm:w-10 lg:h-11 lg:w-11">
                <Image src={item.icon} alt="" width={22} height={22} className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <p className="mt-2 text-[11px] font-medium text-[#737373] sm:text-[12px]">{item.step}</p>
              <h3 className="mt-1 text-[13px] font-semibold leading-5 text-[#262626] sm:text-[14px]">{item.title}</h3>
              <p className="mt-1.5 text-[12px] font-medium leading-5 text-[#5a5a5a] sm:mt-2 sm:text-[13px]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
