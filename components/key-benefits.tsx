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
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[28px] font-semibold  text-[#171717] sm:text-[34px]">
          Key Benefits of Applying Online
        </h2>

        <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-[1.35fr_0.72fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`flex gap-4 rounded-sm px-5 py-6 ${benefit.tone}`}
              >
                <div className="shrink-0">
                  <Image src={benefit.icon} alt="" width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#262626]">
                    {benefit.title}
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#262626]">
                    {benefit.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative aspect-[405/270] w-full overflow-hidden rounded-sm lg:aspect-auto lg:h-[270px] lg:w-[405px]">
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
