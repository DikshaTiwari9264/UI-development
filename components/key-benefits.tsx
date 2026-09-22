import Image from "next/image";

const benefits = [
  {
    title: "Speed & Convenience",
    text: "Funds are disbursed directly to your bank account via IMPS/NEFT as soon as your digital loan agreement is e-signed.",
    icon: "/assets/speed-convenience.png",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#FEFCE8_100%)]",
  },
  {
    title: "Data Security & Privacy",
    text: "Applications are secured using 256-bit SSL encryption. Platforms follow strict RBI Digital Lending Guidelines (DLG).",
    icon: "/assets/data-security.png",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F9F5FF_100%)]",
  },
  {
    title: "Credit Score Improvement",
    text: "Timely repayment of structured monthly EMIs builds your credit history and improves your long-term CIBIL score.",
    icon: "/assets/credit-score.png",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F0FDF4_100%)]",
  },
  {
    title: "Pre-Approved Top-Ups",
    text: "Maintaining a consistent repayment track record unlocks hassle-free top-up loans with zero additional paperwork.",
    icon: "/assets/pre-approved-topups.png",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F0F9FF_100%)]",
  },
];

export function KeyBenefits() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[20px] font-semibold leading-7 text-[#171717] sm:text-[24px] lg:text-[34px] lg:leading-tight">
          Key Benefits of Applying Online
        </h2>

        <div className="mt-4 flex flex-col-reverse gap-4 sm:mt-5 sm:gap-5 lg:grid lg:grid-cols-[1.35fr_0.72fr] lg:items-stretch lg:gap-5">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`flex items-start gap-2.5 rounded-sm px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 lg:gap-4 lg:px-5 lg:py-6 ${benefit.tone}`}
              >
                <div className="shrink-0">
                  <Image src={benefit.icon} alt="" width={64} height={64} className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold leading-5 text-[#262626] sm:text-[15px] lg:text-[18px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-medium leading-5 text-[#262626] sm:text-[13px] lg:text-[13.5px]">
                    {benefit.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative aspect-[16/9] max-h-[220px] w-full overflow-hidden rounded-lg sm:max-h-[280px] lg:aspect-auto lg:h-[270px] lg:max-h-none lg:w-[405px] lg:rounded-sm">
            <Image
              src="/assets/frame-76.png"
              alt="Watch how an instant personal loan works"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 405px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
