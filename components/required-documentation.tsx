import Image from "next/image";

const documents = [
  {
    label: "Identity Proof",
    icon: "/assets/documentation-identity.png",
    lines: [
      "PAN Card (mandatory for credit bureau verification) + Aadhaar Card (for instant e-KYC OTP verification).",
    ],
  },
  {
    label: "Address Proof",
    icon: "/assets/documentation-address.png",
    lines: [
      "Aadhaar Card, Passport, Voter ID, Driving License, or recent utility bill (less than 3 months old).",
    ],
  },
  {
    label: "Income Proof",
    icon: "/assets/documentation-income.png",
    lines: [
      "Bank statements for the last 3 to 6 months showing salary credits.",
      "Optional: Direct permission via the RBI-regulated Account Aggregator (AA) network for instant, encrypted bank statement fetching without manual PDF uploads.",
    ],
  },
];

export function RequiredDocumentation() {
  return (
    <section
      id="documents"
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#F0FDF4_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[20px] font-semibold leading-7 text-[#171717] sm:text-[24px] lg:text-[34px] lg:leading-tight">
          Required Documentation
        </h2>
        <p className="mt-1.5 text-[13px] font-medium leading-5 text-[#262626] sm:mt-2 sm:text-[14px]">
          The application relies on a 100% digital documentation stack. No physical paperwork or branch visits are required:
        </p>

        <div className="mt-4 flex flex-col-reverse gap-4 sm:gap-5 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_405px] lg:items-start lg:gap-8">
          <div className="overflow-hidden rounded-sm bg-white">
            {documents.map((item) => (
              <div
                key={item.label}
                className="grid border-b border-[#DCEFE3] last:border-b-0 sm:grid-cols-[160px_1fr] lg:grid-cols-[180px_1fr]"
              >
                <div className="flex items-start gap-1.5 border-[#DCEFE3] px-3 py-2.5 text-[13px] font-semibold leading-5 text-[#262626] sm:border-r sm:px-4 sm:py-3 sm:text-[14px] sm:whitespace-nowrap lg:text-[14.5px]">
                  <span className="mt-0.5 shrink-0">
                    <Image src={item.icon} alt="" width={18} height={18} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  {item.label}
                </div>
                <div className="text-[12px] leading-5 text-[#262626] sm:text-[13px]">
                  {item.lines.map((line, index) => (
                    <p
                      key={line}
                      className={`px-3 py-2 sm:px-4 ${index > 0 ? "border-t border-[#DCEFE3]" : ""}`}
                    >
                      {line.startsWith("Optional:") ? (
                        <>
                          <span className="font-semibold">Optional:</span>
                          {line.slice("Optional:".length)}
                        </>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/9] max-h-[220px] w-full overflow-hidden rounded-lg sm:max-h-[280px] lg:aspect-auto lg:h-[270px] lg:max-h-none lg:w-[405px] lg:rounded-xl">
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
