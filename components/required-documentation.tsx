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
      className="bg-[linear-gradient(180deg,#F5F5F5_0%,#F0FDF4_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[28px] font-semibold text-[#171717] sm:text-[34px]">
          Required Documentation
        </h2>
        <p className="mt-2 text-[15px] font-medium text-[#262626]">
          The application relies on a 100% digital documentation stack. No physical paperwork or branch visits are required:
        </p>

        <div className="mt-4 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_405px]">
          <div className="overflow-hidden rounded-sm bg-white">
            {documents.map((item) => (
              <div
                key={item.label}
                className="grid border-b border-[#DCEFE3] last:border-b-0 sm:grid-cols-[180px_1fr]"
              >
                <div className="flex items-start gap-1.5 border-[#DCEFE3] px-4 py-3 text-[14.5px] font-semibold text-[#262626] sm:border-r sm:whitespace-nowrap">
                  <span className="mt-0.5 shrink-0">
                    <Image src={item.icon} alt="" width={18} height={18} />
                  </span>
                  {item.label}
                </div>
                <div className="text-[13px] text-[#262626]">
                  {item.lines.map((line, index) => (
                    <p
                      key={line}
                      className={`px-4 py-2 ${index > 0 ? "border-t border-[#DCEFE3]" : ""}`}
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

          <div className="relative aspect-[405/270] w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-[270px] lg:w-[405px]">
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
