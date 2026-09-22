import Image from "next/image";

const protections = [
  {
    title: "Direct Funds Transfer",
    text: "All loan disbursals and EMI repayments occur directly between your bank account and RBI-registered NBFCs or banks. No third-party wallet transfers are involved.",
    icon: "/assets/Frame.png",
    column: "lg:col-start-1",
  },
  {
    title: "Mandatory Key Fact Statement (KFS)",
    text: "You receive a clear breakdown of all costs, including processing fees, APR, interest charges, and default penalties prior to loan execution.",
    icon: "/assets/Frame (1).png",
    column: "lg:col-start-2",
  },
  {
    title: "72-Hour Cool-Off Period",
    text: "Borrowers are provided a mandatory 3-day look-up period. If you decide to cancel the loan within 72 hours of disbursal, you can return the principal amount with pro-rata interest without incurring foreclosure charges.",
    icon: "/assets/Frame (7).png",
    column: "lg:col-start-3",
  },
] as const;

export function BorrowerProtections() {
  return (
    <section
      id="protections"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#FFF1F2_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <h2 className="text-[20px] font-semibold leading-7 text-[#171717] sm:text-[24px] lg:col-start-1 lg:row-start-1 lg:text-[34px] lg:leading-tight">
            RBI Compliance &amp; Borrower Protections
          </h2>

          <div className="overflow-hidden rounded-lg border border-[#F8E4E8] bg-white lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,1.35fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr]">
              {protections.map((item, index) => (
                <div key={item.title} className="contents">
                  <div
                    className={`flex items-center gap-2.5 border-b border-[#F8E4E8] px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5 lg:block lg:row-start-1 lg:px-4 lg:pb-4 lg:pt-4 ${item.column} ${
                      index !== protections.length - 1 ? "lg:border-r" : ""
                    }`}
                  >
                    <Image src={item.icon} alt="" width={32} height={32} className="h-6 w-6 shrink-0 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    <h3 className="text-[13px] font-semibold leading-5 text-[#171717] sm:text-[14px] lg:mt-3 lg:whitespace-nowrap lg:text-[14px] xl:text-[15px]">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`px-3 py-2.5 text-[12px] leading-5 text-[#525252] sm:px-4 sm:py-3 sm:text-[13px] lg:row-start-2 lg:px-4 lg:py-4 lg:text-[13.5px] ${item.column} ${
                      index !== protections.length - 1 ? "border-b border-[#F8E4E8] lg:border-b-0 lg:border-r" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
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
