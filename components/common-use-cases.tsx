import Image from "next/image";

const cases = [
  {
    title: "Debt Consolidation",
    text: "Combine high-interest credit card dues and short-term debt into one single EMI with a lower interest rate.",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#FEFCE8_100%)]",
    icon: "/assets/debt-consolidation.png",
  },
  {
    title: "Medical Emergencies",
    text: "Manage sudden medical costs, hospitalizations, or specialized care when insurance falls short.",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F9F5FF_100%)]",
    icon: "/assets/medical.png",
  },
  {
    title: "Home Renovation",
    text: "Update kitchen spaces, repair structural issues, or buy home appliances without dipping into emergency funds.",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F0FDF4_100%)]",
    icon: "/assets/home-renovation.png",
  },
  {
    title: "Education & Up-skilling",
    text: "Fund professional certifications, bootcamps, or higher education programs to accelerate your career growth.",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#F0F9FF_100%)]",
    icon: "/assets/education-upskilling.png",
  },
  {
    title: "Life Events & Travel",
    text: "Finance weddings, family functions, or international travel with easy structured monthly repayments.",
    tone: "bg-[linear-gradient(180deg,#F5F5F5_0%,#FEF2F2_100%)]",
    icon: "/assets/life-events-travel.png",
  },
] as const;

function UseCaseCard({ item }: { item: (typeof cases)[number] }) {
  return (
    <article className={`flex items-center gap-4 rounded-xl p-4 sm:p-5 ${item.tone}`}>
      <Image src={item.icon} alt="" width={84} height={84} className="h-[84px] w-[84px] shrink-0 object-contain" />
      <div>
        <h3 className="text-[16px] font-semibold text-[#171717]">{item.title}</h3>
        <p className="mt-1 text-[13.5px] leading-5 text-[#525252]">{item.text}</p>
      </div>
    </article>
  );
}

export function CommonUseCases() {
  const primary = cases.slice(0, 4);
  const travel = cases[4];

  return (
    <section id="use-cases" className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[28px] font-semibold text-[#171717] sm:text-[34px]">Common Use Cases</h2>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-start-1 lg:row-start-1">
            {primary.map((item) => (
              <UseCaseCard key={item.title} item={item} />
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-xl lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:h-full">
            <Image
              src="/assets/frame-76.png"
              alt="Family spending time together outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 300px, 100vw"
            />
          </div>

          <div className="lg:col-start-1 lg:row-start-2 sm:max-w-[calc(50%-8px)]">
            <UseCaseCard item={travel} />
          </div>
        </div>
      </div>
    </section>
  );
}
