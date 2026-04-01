import { useState } from "react";

export const PricingTierSection = (): JSX.Element => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section id="pricing" className="flex w-full self-center flex-col items-center gap-14 mt-[120px] px-4">
      {/* Header */}
      <div className="inline-flex flex-col items-center gap-8">
        <div className="inline-flex flex-col items-center gap-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-[61px] text-center tracking-[0.35px] leading-[85.4px] whitespace-nowrap">
            Simple, transparent pricing for creators
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-xl text-center tracking-[-0.45px] leading-7 whitespace-nowrap">
            Choose the plan that fits your project scale. No hidden fees, just
            premium design.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-5 pl-2 pr-5 py-2 bg-white rounded-[100px] border border-solid border-[#c6baaf]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`inline-flex items-center gap-2 pt-2 pb-3 px-6 rounded-[100px] overflow-hidden transition-colors ${
              billingCycle === "monthly" ? "bg-dark" : "bg-transparent"
            }`}
          >
            <span
              className={`[font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-6 whitespace-nowrap ${
                billingCycle === "monthly" ? "text-white" : "text-[#606977]"
              }`}
            >
              Monthly
            </span>
          </button>

          <button
            onClick={() => setBillingCycle("yearly")}
            className="[font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4"
          >
            <span
              className={`font-medium leading-[0.1px] ${
                billingCycle === "yearly" ? "text-[#232323]" : "text-[#606977]"
              }`}
            >
              Yearly{" "}
            </span>
            <span className="font-medium text-[#232323] leading-6">
              (40% Off)
            </span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="flex items-center gap-6 w-full justify-center overflow-visible">
        <img
          className="w-[468px] h-[614px] mt-[-18px] mb-[-32px] ml-[-22px] flex-shrink-0"
          alt="Plan card container"
          src="/figmaAssets/plan-card-container.png"
        />

        <img
          className="w-[500px] h-[656px] mt-[-39px] mb-[-53px] flex-shrink-0"
          alt="Plan card container"
          src="/figmaAssets/plan-card-container-1.png"
        />

        <img
          className="w-[468px] h-[614px] mt-[-18px] mb-[-32px] mr-[-22px] flex-shrink-0"
          alt="Plan card container"
          src="/figmaAssets/plan-card-container-2.png"
        />
      </div>
    </section>
  );
};
