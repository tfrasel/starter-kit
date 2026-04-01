import { Button } from "@/components/ui/button";

// Trusted companies data
const trustedCompanies = [
  { icon: "/figmaAssets/icon-2.svg", name: "Acme Corp" },
  { icon: "/figmaAssets/icon-16.svg", name: "Vertex" },
  { icon: "/figmaAssets/icon-6.svg", name: "Orbit" },
  { icon: "/figmaAssets/icon-6.svg", name: "Orbit" },
  { icon: "/figmaAssets/icon-6.svg", name: "Orbit" },
  { icon: "/figmaAssets/icon-4.svg", name: "Blocks" },
  { icon: "/figmaAssets/icon-8.svg", name: "Nexus" },
];

// Navigation links with scroll targets
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Elements", href: "#elements" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const handleScrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const HeroMessagingSection = (): JSX.Element => {
  return (
    <div className="w-full self-center flex flex-col bg-[#ebe8e2] rounded-[0px_0px_16px_16px]">
      {/* Navigation Header */}
      <header className="flex self-center w-full max-w-[1320px] h-[88px] flex-col items-center px-8 py-0 bg-[#f1eee6] rounded-[0px_0px_16px_16px] border-b border-solid border-[#321b151a]">
        <div className="flex w-full items-center justify-between px-8 py-6">
          {/* Logo — icon placed on dark background so it's visible */}
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-[#232323] rounded-lg flex items-center justify-center flex-shrink-0">
              <img className="w-5 h-5" alt="Starter Kit logo" src="/figmaAssets/icon-1.svg" />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#232323] text-2xl tracking-[-0.44px] leading-7 whitespace-nowrap">
              Starter Kit
            </span>
          </div>

          {/* Nav Links */}
          <nav className="inline-flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleScrollTo(link.href); }}
                className="[font-family:'Inter',Helvetica] font-medium text-[#232323] text-base tracking-[-0.15px] leading-5 whitespace-nowrap hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="inline-flex items-center gap-0.5 cursor-pointer hover:opacity-70 transition-opacity duration-200">
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#232323] text-base tracking-[-0.15px] leading-5 whitespace-nowrap">
                Pages
              </span>
              <img
                className="w-4 h-4"
                alt="Icon px arrow"
                src="/figmaAssets/icon---24-px---arrow-down-.svg"
              />
            </div>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => handleScrollTo("#pricing")}
            className="h-auto inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-[#232323] rounded-[25811100px] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] [font-family:'Inter',Helvetica] font-medium text-[#ece5d8] text-base tracking-[-0.15px] leading-5 whitespace-nowrap hover:bg-[#3a3a3a] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex w-full max-w-[1096px] self-center mt-[140px] flex-col items-center gap-16">
        {/* Text Content */}
        <div className="flex flex-col w-full max-w-[1021px] items-center gap-10">
          {/* Version Badge */}
          <div className="relative w-[211px] h-9 bg-[#f7f5f0] rounded-[25811100px] border border-solid border-[#23232333] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] flex items-center">
            <div className="inline-flex items-center gap-2 pl-3.5">
              <div className="w-3.5 h-3.5 bg-[#232323] rounded-[100px] border-[3px] border-solid border-[#e7e3de] flex-shrink-0" />
              <div className="inline-flex items-center gap-2">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#232323] text-sm text-center tracking-[-0.15px] leading-5 whitespace-nowrap">
                  Version 1.0 is now live
                </span>
                <img
                  className="w-3.5 h-3.5"
                  alt="Icon"
                  src="/figmaAssets/icon-15.svg"
                />
              </div>
            </div>
          </div>

          {/* Headline + Subtitle + Buttons */}
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-col items-center gap-4 w-full">
                <h1 className="w-full [font-family:'Inter',Helvetica] font-bold text-[#232323] text-[88px] text-center tracking-[-2.20px] leading-[92.4px]">
                  Build faster with a
                </h1>
                {/* Gradient transparent text for second headline line */}
                <h1
                  className="w-full [font-family:'Inter',Helvetica] font-bold text-[88px] text-center tracking-[-2.20px] leading-[92.4px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #232323 0%, rgba(35,35,35,0.15) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  foundation that breathes
                </h1>
              </div>

              <p className="w-[644px] [font-family:'Inter',Helvetica] font-normal text-[#232323b2] text-2xl text-center tracking-[0.07px] leading-[39px]">
                A minimalist starter template designed for developers who value
                clean aesthetics and rapid deployment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="inline-flex items-center gap-4">
              {/* Primary CTA */}
              <Button
                onClick={() => handleScrollTo("#pricing")}
                className="h-auto w-[235px] h-[60px] bg-black rounded-[80px] flex items-center justify-center gap-2 [font-family:'Inter',Helvetica] font-medium text-[#ece5d8] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap hover:bg-[#333333] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started for Free
                <img
                  className="w-4 h-4"
                  alt="Text"
                  src="/figmaAssets/text.svg"
                />
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline"
                onClick={() => handleScrollTo("#about")}
                className="h-auto w-[242px] h-[60px] rounded-[80px] border border-solid border-[#23232333] bg-transparent flex items-center justify-center gap-2 [font-family:'Inter',Helvetica] font-medium text-[#232323] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap hover:bg-[#23232308] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <img
                  className="w-4 h-4"
                  alt="Icon"
                  src="/figmaAssets/icon-5.svg"
                />
                View Documentation
              </Button>
            </div>
          </div>
        </div>

        {/* Code Editor Mockup — with hover lift animation */}
        <div className="relative w-full h-[540px] overflow-hidden flex items-center justify-center group">
          {/* Dark code editor window */}
          <div className="w-[1101px] h-[542px] bg-[#232323] rounded-[20px] overflow-hidden border-[0.94px] border-solid border-[#ffffff1a] shadow-[0px_30.58px_61.16px_-14.68px_#321b1566] relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0px_40px_80px_-14px_#321b1580]">
            {/* Editor title bar */}
            <div className="absolute top-px left-px w-[1091px] h-[93px] bg-[#ffffff0d] border-b-[0.94px] border-solid border-[#ffffff1a]">
              {/* Traffic light buttons */}
              <div className="flex w-[67px] h-4 items-start gap-[9.76px] absolute top-10 left-7">
                <div className="w-[15.99px] h-[15.07px] bg-[#ff5f56] rounded-[31574194px]" />
                <div className="w-[15.91px] h-[15.04px] bg-[#ffbd2e] rounded-[31574194px]" />
                <div className="w-[15.83px] h-[15.02px] bg-[#27c93f] rounded-[31574194px]" />
              </div>

              {/* Tab bar */}
              <div className="flex w-[958px] h-[54px] items-start justify-center pl-[430.01px] pr-[398.11px] pt-[11.96px] pb-0 absolute top-[21px] left-[93px]">
                <div className="relative w-[129.94px] h-[31.67px] bg-[#ffffff0d] rounded-[9.79px]">
                  <img
                    className="absolute top-[7px] left-4 w-[15px] h-[15px]"
                    alt="Icon"
                    src="/figmaAssets/icon-11.svg"
                  />
                  <div className="absolute top-[5px] left-[35px] [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d866] text-[14.7px] text-center tracking-[0] leading-[19.6px] whitespace-nowrap">
                    {" "}
                    index.tsx
                  </div>
                </div>
              </div>
            </div>

            {/* Code lines */}
            <div className="absolute top-[65px] -left-px w-[1110px] h-[496px]">
              {/* Line 1 */}
              <div className="flex w-[1003px] h-[52px] items-start gap-[19.55px] absolute top-10 left-[43px]">
                <div className="relative w-[13.59px] h-[32.35px]">
                  <div className="absolute -top-px -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="relative w-[526.87px] h-[42.45px]">
                  <div className="absolute -top-1 left-[-5px] [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[19.6px]">
                    <span className="text-[#ff7b72] leading-[31.8px]">
                      import
                    </span>
                    <span className="text-[#ece5d8cc] leading-[0.1px]">
                      {" "}
                      {"{"}{" "}
                    </span>
                    <span className="text-[#d2a8ff] leading-[31.8px]">
                      StarterTemplate
                    </span>
                    <span className="text-[#ece5d8cc] leading-[31.8px]">
                      {" "}
                      {"}"}{" "}
                    </span>
                    <span className="text-[#ff7b72] leading-[31.8px]">
                      from
                    </span>
                    <span className="text-[#ece5d8cc] leading-[0.1px]">
                      &nbsp;
                    </span>
                    <span className="text-[#a5d6ff] leading-[31.8px]">
                      &#39;@ivory/ui&#39;
                    </span>
                    <span className="text-[#ece5d8cc] leading-[31.8px]">;</span>
                  </div>
                </div>
              </div>

              {/* Line 2 */}
              <div className="flex w-[1005px] h-[50px] items-start gap-[19.6px] absolute top-[76px] left-[43px]">
                <div className="relative w-[13.63px] h-[32.49px]">
                  <div className="absolute -top-px -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="relative w-[257.45px] h-[36.63px]">
                  <div className="absolute -top-0.5 -left-1.5 [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[19.6px]">
                    <span className="text-[#ff7b72] leading-[31.8px]">
                      import
                    </span>
                    <span className="text-[#ece5d8cc] leading-[0.1px]">
                      &nbsp;
                    </span>
                    <span className="text-[#a5d6ff] leading-[31.8px]">
                      &#39;./theme.css&#39;
                    </span>
                    <span className="text-[#ece5d8cc] leading-[31.8px]">;</span>
                  </div>
                </div>
              </div>

              {/* Line 3 (empty) */}
              <div className="flex w-[1007px] h-[47px] items-start absolute top-28 left-[43px]">
                <div className="relative w-[13.67px] h-[32.62px]">
                  <div className="absolute -top-px -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    3
                  </div>
                </div>
              </div>

              {/* Line 4 */}
              <div className="flex w-[1010px] h-[45px] items-start gap-[19.7px] absolute top-[149px] left-[43px]">
                <div className="relative w-[13.71px] h-[32.76px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    4
                  </div>
                </div>
                <div className="relative w-[378.32px] h-[37.11px]">
                  <div className="absolute -top-0.5 left-[-7px] [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[19.6px]">
                    <span className="text-[#ff7b72] leading-[31.8px]">
                      export default function
                    </span>
                    <span className="text-[#ece5d8cc] leading-[0.1px]">
                      &nbsp;
                    </span>
                    <span className="text-[#d2a8ff] leading-[31.8px]">App</span>
                    <span className="text-[#ece5d8cc] leading-[31.8px]">
                      () {"{"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Line 5 */}
              <div className="flex w-[1012px] h-[42px] items-start gap-[40.57px] absolute top-[185px] left-[43px]">
                <div className="relative w-[13.75px] h-[32.89px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    5
                  </div>
                </div>
                <div className="relative w-[100.28px] h-[33.6px]">
                  <div className="absolute -top-0.5 left-[-3px] [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    <span className="text-[#ff7b72]">return</span>
                    <span className="text-[#ece5d8cc]"> (</span>
                  </div>
                </div>
              </div>

              {/* Line 6 */}
              <div className="flex w-[1015px] h-10 items-start gap-[61.5px] absolute top-[222px] left-[43px]">
                <div className="relative w-[13.79px] h-[33.03px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    6
                  </div>
                </div>
                <div className="relative w-[198.07px] h-[34.14px]">
                  <div className="absolute -top-px left-[-5px] [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    <span className="text-[#79c0ff]">&lt;</span>
                    <span className="text-[#7ee787]">StarterTemplate</span>
                  </div>
                </div>
              </div>

              {/* Line 7 */}
              <div className="flex w-[1018px] h-[38px] items-start gap-[82.48px] absolute top-[258px] left-[42px]">
                <div className="relative w-[13.83px] h-[33.16px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    7
                  </div>
                </div>
                <div className="relative w-[234.34px] h-[33.91px]">
                  <div className="absolute -top-px -left-1.5 [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    <span className="text-[#a5d6ff]">theme</span>
                    <span className="text-[#ece5d8]">=</span>
                    <span className="text-[#a5d6ff]">
                      &#34;ivory-cocoa&#34;
                    </span>
                  </div>
                </div>
              </div>

              {/* Line 8 */}
              <div className="flex w-[1020px] h-[35px] items-start gap-[82.69px] absolute top-[295px] left-[42px]">
                <div className="relative w-[13.87px] h-[33.3px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    8
                  </div>
                </div>
                <div className="relative w-[210.71px] h-[33.42px]">
                  <div className="absolute -top-px left-[-5px] [font-family:'Menlo-Regular',Helvetica] font-normal text-transparent text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    <span className="text-[#a5d6ff]">performance</span>
                    <span className="text-[#ece5d8]">=</span>
                    <span className="text-[#a5d6ff]">{"{"}</span>
                    <span className="text-[#79c0ff]">100</span>
                    <span className="text-[#a5d6ff]">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Line 9 */}
              <div className="flex w-[1023px] h-[33px] items-start gap-[61.98px] absolute top-[333px] left-[42px]">
                <div className="relative w-[13.91px] h-[33.45px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    9
                  </div>
                </div>
                <div className="relative w-[26.15px] h-[33.28px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#7ee787] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    /&gt;
                  </div>
                </div>
              </div>

              {/* Line 10 */}
              <div className="flex w-[1025px] h-[35px] items-start gap-[41.06px] pt-[1.18px] pb-0 px-0 absolute top-[371px] left-[42px]">
                <div className="relative w-[26.66px] h-[33.66px]">
                  <div className="absolute -top-0.5 -left-0.5 [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    10
                  </div>
                </div>
                <div className="relative w-[26.27px] h-[33.5px]">
                  <div className="absolute -top-0.5 -left-px [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d8cc] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    );
                  </div>
                </div>
              </div>

              {/* Line 11 */}
              <div className="absolute top-[409px] left-[42px] w-[1028px] h-[38px] flex">
                <div className="mt-[7.1px] w-[26.74px] h-[33.9px] ml-[-7.2px] flex">
                  <div className="mt-[-1.9px] w-6 h-8 ml-[-1.6px] [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d84c] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    11
                  </div>
                </div>
                <div className="mt-[6.9px] w-[13.8px] h-[33.75px] ml-[19.0px] flex">
                  <div className="mt-[-1.9px] w-3 h-8 ml-[-0.6px] [font-family:'Menlo-Regular',Helvetica] font-normal text-[#ece5d8cc] text-[19.6px] tracking-[0] leading-[31.8px] whitespace-nowrap">
                    {"}"}
                  </div>
                </div>
                <div className="mt-[6.6px] w-[13.94px] h-[25.92px] ml-[4.5px] bg-[#ece5d8cc] opacity-[0.01]" />
              </div>
            </div>
          </div>

          {/* Centered overlay image — with hover animation */}
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[168px] h-[168px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            alt="Container"
            src="/figmaAssets/container-1.svg"
          />
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="flex w-full max-w-[1320px] self-center mt-20 mb-10 flex-col items-center gap-8">
        <p className="w-full [font-family:'Inter',Helvetica] font-semibold text-[#232323cc] text-sm text-center tracking-[2.65px] leading-5">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>

        <div className="flex items-center justify-between w-full">
          {trustedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              <img className="w-8 h-8" alt="Icon" src={company.icon} />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#23232380] text-xl tracking-[-0.45px] leading-7 whitespace-nowrap">
                {" "}
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
