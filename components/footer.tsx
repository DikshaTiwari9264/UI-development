import Image from "next/image";

const searches = [
  ["Personal Loan", "Marriage Loan", "Vehicle Loan", "Travel Loan", "Shopping Loan"],
  ["Medical Loan", "Home Renovation Loan", "Education Loan"],
];

const company = [
  "About Us",
  "Privacy Policy",
  "Lending Partners",
  "Terms & Conditions",
  "DLG Disclosure",
  "Grievance Redressal Policy",
  "Insurance Partners",
  "Discontinued Service Partners",
  "Responsible Vulnerability Disclosure",
];

const products = [
  "Personal Loan",
  "Loan against Property",
  "TrackMyPF",
  "Free Credit Score",
  "Marriage Loan",
  "Vehicle Loan",
  "Travel Loan",
  "Shopping Loan",
  "Medical Loan",
  "Home Renovation Loan",
  "Education Loan",
];

const calculators = [
  "EMI Calculator",
  "Bike Loan EMI Calculator",
  "Education Loan EMI Calculator",
  "Vehicle Loan EMI Calculator",
  "Personal Loan EMI Calculator",
];

const resources = ["Finn-Advice", "Newsroom", "FAQs", "Sitemap"];

const socials = [
  { name: "YouTube", src: "/assets/Icon.png" },
  { name: "Facebook", src: "/assets/Icon (1).png" },
  { name: "X", src: "/assets/Icon (2).png" },
  { name: "Instagram", src: "/assets/Icon (3).png" },
  { name: "LinkedIn", src: "/assets/Icon (4).png" },
];

const badges = [
  { label: "Indian Fintech", src: "/assets/Container_margin.png" },
  { label: "ISO 27001 Certified", src: "/assets/Container_margin (1).png" },
  { label: "FIDC Certified", src: "/assets/Container_margin (2).png" },
  { label: "Member", src: "/assets/Container_margin (3).png" },
];

function LinkList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
      {items.map((item) => (
        <li key={item}>
          <a href={item === "FAQs" ? "#faqs" : "#"} className="text-[13px] text-[#d5d5d5] hover:text-white sm:text-[14px]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-[22px] font-semibold sm:text-[26px] lg:text-[28px]">
          People also search for
        </h2>

        <div className="mx-auto mt-4 flex max-w-[760px] flex-col items-center gap-2 sm:mt-6 sm:gap-3">
          {searches.map((row) => (
            <div key={row[0]} className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {row.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full bg-[#3a3a3a] px-3 py-1.5 text-[12px] hover:bg-[#4a4a4a] sm:px-4 sm:py-2 sm:text-[13.5px]"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 lg:mt-14 lg:grid-cols-[minmax(280px,1.3fr)_1fr_1fr_1fr] lg:gap-8">
          <div>
            <div className="hidden h-20 lg:block"></div>
            <div className="flex gap-1.5 sm:gap-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  aria-label={item.name}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2e2e2e] sm:h-9 sm:w-9"
                >
                  <Image src={item.src} alt="" width={16} height={16} className="h-4 w-4" />
                </a>
              ))}
            </div>

            <p className="mt-6 text-[14px] font-medium sm:mt-8 sm:text-[15px]">Any queries</p>
            <a
              href="#"
              className="mt-2 inline-flex h-9 items-center rounded-full bg-[#e94b78] px-4 text-[13px] font-semibold sm:mt-3 sm:h-10 sm:px-5 sm:text-[14px]"
            >
              Raise a Ticket with us
            </a>

            <p className="mt-6 text-[14px] font-medium sm:mt-8 sm:text-[15px]">Download Our App</p>
            <div className="mt-1 flex items-start gap-3 sm:mt-3 lg:flex-row lg:items-center mt-2">
              <a href="#">
                <Image
                  src="/assets/Link - Download on the App Store.png"
                  alt="Download on the App Store"
                  width={220}
                  height={64}
                  className="h-auto w-[150px] sm:w-[170px] lg:w-[135px]"
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/Link - Download on the Play Store.png"
                  alt="Get it on Google Play"
                  width={220}
                  height={64}
                  className="h-auto w-[150px] sm:w-[170px] lg:w-[135px]"
                />
              </a>
            </div>

            <div className="mt-5 grid  grid-cols-1 gap-2 sm:mt-8 sm:gap-3 sm:grid-cols-2">
              {badges.map((badge) => (
                <div key={badge.label} className="text-start ">
                  <p className="mb-1 text-[10px] font-medium sm:mb-1.5 sm:text-[11px]">{badge.label}</p>
                  <div className="flex h-10 items-center justify-center rounded-md bg-white px-2 sm:h-12">
                    <Image
                      src={badge.src}
                      alt={badge.label}
                      width={110}
                      height={36}
                      className="h-7 w-auto object-contain sm:h-8"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.08em] sm:text-[13px]">THE COMPANY</h3>
            <LinkList items={company} />
            <h3 className="mt-6 text-[12px] font-semibold tracking-[0.08em] sm:mt-8 sm:text-[13px]">RESOURCES</h3>
            <LinkList items={resources} />
          </div>

          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.08em] sm:text-[13px]">PRODUCTS</h3>
            <LinkList items={products} />
            <h3 className="mt-6 text-[12px] font-semibold tracking-[0.08em] sm:mt-8 sm:text-[13px]">CONTACT US</h3>
            <a
              href="mailto:makeiteasy@finnable.com"
              className="mt-3 block text-[13px] text-[#d5d5d5] hover:text-white sm:mt-4 sm:text-[14px]"
            >
              makeiteasy@finnable.com
            </a>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.08em] sm:text-[13px]">CALCULATOR</h3>
            <LinkList items={calculators} />
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 sm:mt-10 sm:pt-5 lg:mt-12 lg:pt-6">
          <div className="flex flex-col gap-3 text-[12px] text-[#cfcfcf] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-[13.5px]">
            <p>All Rights Reserved © 2026 Finnable</p>
            <div className="flex flex-wrap gap-3 sm:gap-6">
              <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-white">Grievance Redressal Policy</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
