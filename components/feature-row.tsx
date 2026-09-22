import Image from 'next/image';

const features = [
  { title: "Zero Paperwork", icon: "/assets/zero-paperwork.png" },
  { title: "No Collateral", icon: "/assets/no-collateral.png" },
  { title: "Loan in 60 Minutes", icon: "/assets/loan-in-minutes.png" },
  { title: "Flexible Repayment", icon: "/assets/flexible-repayment.png" },
  { title: "Simple and Transparent", icon: "/assets/simple-transparent.png" },
];

export function FeatureRow() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff7f8_0%,#fdecef_100%)] px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[30px] font-medium tracking-[-0.03em] sm:text-[36px] text-[#000000]">
          Access instant credit when it matters most
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-5 sm:gap-x-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex w-[180px] flex-col items-center text-center">
              <Image 
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-2"
              />
              <p className="text-[15px] font-medium text-[#2b2b2b]">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}