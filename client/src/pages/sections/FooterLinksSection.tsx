import { Separator } from "@/components/ui/separator";

// Data for navigation columns
const pagesLinks = ["Authors", "Categories", "Tags", "FAQ"];

const productLinks = ["Features", "Pricing", "Guide"];

const legalLinks = ["Privacy Policy", "Terms of Service"];

const communityLinks = [
  {
    label: "GitHub",
    icon: "/figmaAssets/icon.svg",
    alt: "Icon",
  },
  {
    label: "Discord",
    icon: "/figmaAssets/icon---24-px---discordlogo-.svg",
    alt: "Icon px",
  },
  {
    label: "Twitter",
    icon: "/figmaAssets/icon-10.svg",
    alt: "Icon",
  },
];

export const FooterLinksSection = (): JSX.Element => {
  return (
    <footer className="w-full mt-[120px] flex flex-col items-center bg-black rounded-t-[24px] overflow-hidden">
      {/* Main footer content */}
      <div className="flex w-full max-w-[1320px] mt-[120px] items-start justify-between px-0">
        {/* Brand / Description */}
        <div className="flex flex-col w-[313px] items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon-1.svg" />
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#f1eee6] text-2xl tracking-[-0.44px] leading-7 whitespace-nowrap">
              Starter Kit
            </span>
          </div>

          <p className="self-stretch [font-family:'Inter',Helvetica] font-normal text-[#f1eee6b2] text-base tracking-[-0.15px] leading-[26px]">
            A minimalist starter template designed for developers who value
            clean aesthetics and rapid deployment.
          </p>
        </div>

        {/* Navigation columns */}
        <nav className="inline-flex items-start gap-[120px]">
          {/* Pages column */}
          <div className="flex flex-col w-[83px] items-start gap-8">
            <span className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#f1eee6] text-xl tracking-[-0.31px] leading-6">
              Pages
            </span>
            <ul className="flex flex-col items-start gap-4 w-full list-none p-0 m-0">
              {pagesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-medium text-[#f1eee699] text-base tracking-[-0.15px] leading-5 whitespace-nowrap no-underline hover:text-[#f1eee6] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product column */}
          <div className="inline-flex flex-col items-start gap-8">
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#f1eee6] text-xl tracking-[-0.31px] leading-6 whitespace-nowrap">
              Product
            </span>
            <ul className="flex flex-col items-start gap-2 w-full list-none p-0 m-0">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-medium text-[#f1eee6cc] text-base tracking-[-0.15px] leading-5 whitespace-nowrap no-underline hover:text-[#f1eee6] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="flex flex-col w-[127px] items-start gap-8">
            <span className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#f1eee6] text-xl tracking-[-0.31px] leading-6">
              Legal
            </span>
            <ul className="flex flex-col items-start gap-4 w-full list-none p-0 m-0">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-medium text-[#f1eee6cc] text-base tracking-[-0.15px] leading-5 no-underline hover:text-[#f1eee6] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community column */}
          <div className="flex flex-col w-28 items-start gap-8">
            <span className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#f1eee6] text-xl tracking-[-0.31px] leading-6">
              Community
            </span>
            <ul className="flex flex-col w-[82px] items-center gap-4 list-none p-0 m-0">
              {communityLinks.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 self-stretch w-full"
                >
                  <img className="w-4 h-4" alt={item.alt} src={item.icon} />
                  <a
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-medium text-[#f1eee6cc] text-base tracking-[-0.15px] leading-5 whitespace-nowrap no-underline hover:text-[#f1eee6] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1320px] mt-[119px]">
        <Separator className="bg-[#f1eee620] h-px" />
      </div>

      {/* Copyright */}
      <div className="w-full max-w-[1320px] mt-8 mb-8 flex items-start">
        <p className="[font-family:'Inter',Helvetica] font-normal text-[#f1eee699] text-base tracking-[-0.15px] leading-5 whitespace-nowrap">
          © 2026 Starter Kit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
