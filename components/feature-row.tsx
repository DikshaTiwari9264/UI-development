import Image from 'next/image';

const features = [
  { title: "Zero Paperwork", icon: "/assets/flexible-repayment.png" },
  { title: "No Collateral", icon: "/assets/zero-paperwork.png" },
  { title: "Loan in 60 Minutes", icon: "/assets/simple-transparent.png" },
  { title: "Flexible Repayment", icon: "/assets/loan-in-minutes.png" },
  { title: "Simple and Transparent", icon: "/assets/no-collateral.png" },
];

export function FeatureRow() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff7f8_0%,#fdecef_100%)] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-6">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[20px] font-medium tracking-[-0.03em] text-[#000000] sm:text-[24px] lg:text-[36px]">
          Access instant credit when it matters most
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 sm:mt-5 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-5 lg:mt-6 lg:grid-cols-5 lg:gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-1.5 text-[12px] font-medium leading-4 text-[#2b2b2b] sm:mt-2 sm:text-[13px] lg:text-[15px]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}