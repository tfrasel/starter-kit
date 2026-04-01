import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/figmaAssets/home.svg",
    title: "Sophisticated Theming",
    description:
      "Pre-configured with a premium Ivory and Cocoa color palette. Easily customizable typography and spacing to match your brand's DNA.",
  },
  {
    icon: "/figmaAssets/home.svg",
    title: "Clean & Modular Code",
    description:
      "Built with modern development standards. A developer-friendly structure that makes extending and maintaining your site a breeze.",
  },
  {
    icon: "/figmaAssets/home.svg",
    title: "Search Engine Ready",
    description:
      "Out-of-the-box SEO optimization, semantic HTML, and ARIA support to ensure your content is visible and accessible to everyone.",
  },
];

export const ScaleFeatureGridSection = (): JSX.Element => {
  return (
    <section id="elements" className="w-full bg-[#f1eee6] rounded-3xl overflow-hidden py-[120px] px-8">
      <div className="flex flex-col items-center gap-16 max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 max-w-[527px] w-full">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-[61px] text-center tracking-[0.35px] leading-[85.4px] whitespace-nowrap">
            Designed for scale
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-xl text-center tracking-[-0.45px] leading-7">
            Everything you need to launch a beautiful web application,
            <br />
            meticulously crafted and packed into one layout.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex items-start gap-6 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col flex-1 items-start gap-40 p-8 bg-[#f5f4f1] rounded-3xl overflow-hidden border border-solid border-[#23232333] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
            >
              <CardContent className="flex flex-col w-full items-start p-0 gap-0">
                <img
                  className="w-12 h-12 mb-40"
                  alt={feature.title}
                  src={feature.icon}
                />
                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-2xl tracking-[0.07px] leading-8 whitespace-nowrap">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#232323b2] text-base tracking-[-0.31px] leading-[26px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
