import Image from "next/image";

const protections = [
  {
    title: "Direct Funds Transfer",
    text: "All loan disbursals and EMI repayments occur directly between your bank account and RBI-registered NBFCs or banks. No third-party wallet transfers are involved.",
    icon: "/assets/Frame.png",
    column: "md:col-start-1",
  },
  {
    title: "Mandatory Key Fact Statement (KFS)",
    text: "You receive a clear breakdown of all costs, including processing fees, APR, interest charges, and default penalties prior to loan execution.",
    icon: "/assets/Frame (1).png",
    column: "md:col-start-2",
  },
  {
    title: "72-Hour Cool-Off Period",
    text: "Borrowers are provided a mandatory 3-day look-up period. If you decide to cancel the loan within 72 hours of disbursal, you can return the principal amount with pro-rata interest without incurring foreclosure charges.",
    icon: "/assets/Frame (7).png",
    column: "md:col-start-3",
  },
] as const;

export function BorrowerProtections() {
  return (
    <section
      id="protections"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#FFF1F2_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <h2 className="text-[28px] font-semibold text-[#171717] sm:text-[34px] lg:col-start-1 lg:row-start-1">
            RBI Compliance &amp; Borrower Protections
          </h2>

          <div className="overflow-hidden rounded-lg border border-[#F8E4E8] bg-white lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_minmax(220px,1.35fr)_minmax(0,1fr)] md:grid-rows-[auto_1fr]">
              {protections.map((item, index) => (
                <div
                  key={item.title}
                  className={`border-b border-[#F8E4E8] px-4 pb-4 pt-4 md:row-start-1 ${item.column} ${
                    index !== protections.length - 1 ? "md:border-r" : ""
                  }`}
                >
                  <Image src={item.icon} alt="" width={32} height={32} />
                  <h3 className="mt-3 whitespace-nowrap text-[14px] font-semibold leading-5 text-[#171717] xl:text-[15px]">
                    {item.title}
                  </h3>
                </div>
              ))}
              {protections.map((item, index) => (
                <p
                  key={`${item.title}-text`}
                  className={`px-4 py-4 text-[13.5px] leading-5 text-[#525252] md:row-start-2 ${item.column} ${
                    index !== protections.length - 1 ? "border-b border-[#F8E4E8] md:border-r md:border-b-0" : ""
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-xl lg:col-start-2 lg:row-start-2 lg:aspect-auto lg:h-full">
            <Image
              src="/assets/frame-76.png"
              alt="Family spending time together outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 300px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
