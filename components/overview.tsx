import Image from "next/image";

const features = [
  {
    title: "Zero Collateral",
    text: "No asset, property, or deposit pledge required.",
  },
  {
    title: "Instant Processing",
    text: "Automated underwriting enables credit approval in seconds.",
  },
  {
    title: "100% Paperless",
    text: "Upload digital documents or verify identity using secure APIs.",
  },
  {
    title: "Flexible Repayment",
    text: "Choose a loan tenure of 6 to 60 months.",
  },
  {
    title: "Transparent Pricing",
    text: "Clear Annual Percentage Rate (APR) and Key Fact Statement (KFS) provided prior to loan execution.",
  },
];

export function Overview() {
  return (
    <section id="overview" className="bg-[linear-gradient(180deg,#F5F5F5_0%,#FFF1F2_100%)] px-5 py-8 sm:px-8 sm:py-16 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="max-w-[560px]">
          <h2 className="text-[26px] font-bold  tracking-[-0.02em] text-[#111111] sm:text-[32px]">
            What is an Instant Personal loan?
          </h2>
          <p className="mt-2 text-[15px] text-[#262626]">
            An instant personal loan is an unsecured credit facility extended by
            Reserve Bank of India (RBI) registered Non-Banking Financial
            Companies (NBFCs) and banks. Unlike traditional loans with slow
            paperwork and branch visits, modern digital credit leverages instant
            e-KYC, Account Aggregators, and automated underwriting for seamless,
            same-day payouts.
          </p>

          <p className="mt-3 text-[15px] font-medium text-[##262626]">
            Key Features of Digital Lending:
          </p>

          <ul className="mt-1 list-disc space-y-1 pl-5 text-[14px] text-[#4a4a4a]">
            {features.map((feature) => (
              <li key={feature.title}>
                <span className="font-semibold text-[#1a1a1a]">{feature.title}:</span>{" "}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src="/assets/Frame 76.png"
            alt="Watch how an instant personal loan works"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
