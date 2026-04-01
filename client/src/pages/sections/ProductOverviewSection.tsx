import { Button } from "@/components/ui/button";

const featureItems = [
  "Zero JS, by default: No JavaScript runtime overhead to slow you down.",
  "Customizable: Tailwind, MDX, and 100+ other integrations to choose from.",
  "UI-agnostic: Supports React, Vue, Svelte, and more.",
];

export const ProductOverviewSection = (): JSX.Element => {
  return (
    <section id="about" className="w-full self-center flex bg-section-bg rounded-3xl overflow-hidden py-[120px]">
      <div className="flex w-full max-w-[1320px] mx-auto px-0 flex-col items-start gap-[140px]">
        {/* Top block: text left, UI mockup right */}
        <div className="flex items-center gap-[68px] w-full">
          {/* Left: text content */}
          <div className="flex flex-col w-[692px] items-start gap-12 shrink-0">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#23232380] text-sm tracking-[2.65px] leading-5">
                    BUILT FOR PERFORMANCE
                  </p>
                  <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-[61px] tracking-[0.35px] leading-[85.4px]">
                    Fast, modern, and easy to work with
                  </h2>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-xl tracking-[-0.44px] leading-7">
                  This component starter takes full advantage of our
                  zero-JS-by-default approach. You get fast pages, simple
                  routing, and a component system that stays easy to use as your
                  site grows.
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col items-start gap-4">
                {featureItems.map((item, index) => (
                  <li key={index} className="inline-flex items-start gap-4">
                    <img
                      className="w-6 h-6 shrink-0 mt-0.5"
                      alt="Icon"
                      src="/figmaAssets/icon-3.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-base tracking-[-0.44px] leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              className="w-[235px] h-[60px] bg-black rounded-[80px] flex items-center justify-center gap-2 hover:bg-black/90"
              asChild
            >
              <a href="#">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#ece5d8] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
                  Get Started Now
                </span>
                <img
                  className="w-4 h-4"
                  alt="Text"
                  src="/figmaAssets/text.svg"
                />
              </a>
            </Button>
          </div>

          {/* Right: UI mockup card */}
          <div className="relative w-[560px] h-[468px] bg-[#e7e4dc] rounded-3xl overflow-hidden border border-solid border-[#2323231a] shadow-[0px_25px_50px_-12px_#00000040,0px_25px_50px_-12px_#00000040] shrink-0">
            <div className="flex flex-col w-[478px] h-[370px] items-start gap-[39.99px] pl-8 pr-0 pt-8 pb-0 absolute top-[calc(50%_-_185px)] left-[41px] bg-[#23232305] rounded-2xl border-[1.54px] border-dashed border-[#23232333]">
              {/* Placeholder header skeleton */}
              <div className="flex flex-col w-[411.42px] h-[87.98px] items-center gap-3">
                <div className="w-[137.14px] h-4 bg-[#2323231a] rounded-[25811100px]" />
                <div className="w-[308.56px] h-8 bg-[#2323230d] rounded-[10px]" />
                <div className="w-[205.71px] h-4 bg-[#2323230d] rounded-[25811100px]" />
              </div>

              {/* Placeholder cards row */}
              <div className="relative w-[411.42px] h-[177.48px]">
                {/* Left card */}
                <div className="absolute top-0 left-0 w-[179px] h-[177px] flex flex-col bg-[#f2efeb] rounded-[14px] border-[0.77px] border-solid border-[#2323231a] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
                  <div className="ml-[20.8px] w-8 h-8 mt-[20.8px] bg-[#23232333] rounded-lg" />
                  <div className="ml-[20.8px] w-[137.14px] h-[7.99px] mt-[16px] bg-[#2323231a] rounded-[25811100px]" />
                  <div className="ml-[20.8px] w-[109.71px] h-[7.99px] mt-[16px] bg-[#2323231a] rounded-[25811100px]" />
                  <div className="ml-[20.8px] w-[137.14px] h-8 mt-[24px] bg-[#2323230d] rounded-lg" />
                </div>

                {/* Right card (dashed, add placeholder) */}
                <div className="absolute top-0 left-[202px] w-[209px] h-[177px] bg-[#ffffff80] rounded-[14px] overflow-hidden border-[1.54px] border-dashed border-[#2323231a]">
                  <div className="absolute top-[69px] left-[93px] w-[22px] h-10 flex">
                    <span className="mt-[0.5px] w-6 h-10 [font-family:'Inter',Helvetica] font-light text-[#23232333] text-4xl tracking-[0.37px] leading-10 whitespace-nowrap">
                      +
                    </span>
                  </div>
                  <div className="absolute top-0.5 left-0.5 w-[206px] h-[174px] bg-[linear-gradient(45deg,rgba(0,0,0,0)_25%,rgba(50,27,21,0.02)_50%,rgba(0,0,0,0)_75%,rgba(0,0,0,0)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom block: illustration left, text right */}
        <div className="flex items-center gap-28">
          <img
            className="w-[600px] h-[530px] mb-[-40px] ml-[-20px] shrink-0"
            alt="Container"
            src="/figmaAssets/container.svg"
          />

          <div className="flex flex-col items-start justify-center gap-12">
            <div className="flex flex-col items-start gap-4">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#23232380] text-sm tracking-[2.65px] leading-5">
                CLOUDCANNON READY
              </p>

              <div className="flex flex-col items-start gap-10 w-full">
                <h2 className="mt-[-1px] text-[#232323] text-[61px] tracking-[0.35px] leading-[61px] [font-family:'Inter',Helvetica] font-normal">
                  <span className="font-bold tracking-[0.21px]">
                    Everything you need
                    <br />
                    to{" "}
                  </span>
                  <span className="font-bold tracking-[0.21px] leading-[85.4px] underline">
                    ship your next app
                  </span>
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-xl tracking-[-0.44px] leading-7">
                  This component starter takes full advantage of our
                  zero-JS-by-default approach. You get fast pages, simple
                  routing, and a component system that stays easy to use as your
                  site grows.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-[235px] h-[60px] bg-black rounded-[80px] flex items-center justify-center gap-2 hover:bg-black/90"
              asChild
            >
              <a href="#">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#ece5d8] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
                  Get Started Now
                </span>
                <img
                  className="w-4 h-4"
                  alt="Text"
                  src="/figmaAssets/text.svg"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
