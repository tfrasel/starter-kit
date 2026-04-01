import { Button } from "@/components/ui/button";

export const FinalCtaSection = (): JSX.Element => {
  return (
    <section className="w-full mt-[120px] flex justify-center px-4">
      <div className="w-full max-w-[1320px] h-auto min-h-[500px] flex flex-col items-center justify-center gap-12 bg-[#e7e4dc] rounded-3xl overflow-hidden border border-solid border-[#2323231a] shadow-[0px_25px_60px_-12px_#00000029] py-[120px]">
        {/* Heading and subtitle block */}
        <div className="flex flex-col items-center gap-6 max-w-[755px] w-full px-4">
          <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-black text-[61px] text-center tracking-[-1.68px] leading-[72px]">
            Stop building from scratch
          </h2>

          <p className="max-w-[621px] [font-family:'Inter',Helvetica] font-medium text-[#232323cc] text-xl text-center tracking-[-0.45px] leading-7">
            Join thousands of developers building faster, leaner, and more
            beautiful applications today.
          </p>
        </div>

        {/* CTA Button */}
        <Button className="h-auto inline-flex items-center gap-2 px-9 py-[18px] bg-black hover:bg-black/90 rounded-[80px] cursor-pointer">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#ece5d8] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
            Download the Starter Kit
          </span>
          <img className="w-4 h-4" alt="Text" src="/figmaAssets/text.svg" />
        </Button>
      </div>
    </section>
  );
};
