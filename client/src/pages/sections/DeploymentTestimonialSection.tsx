import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Testimonial data array for mapping
const testimonials = [
  {
    id: 1,
    quote:
      '"This starter template completely changed my workflow. I saved weeks of setup time, and the design system is a masterpiece of minimalism."',
    authorInitial: "A",
    authorName: "Alex Rivera",
    authorTitle: "Frontend Engineer",
  },
  {
    id: 2,
    quote:
      '"This starter template completely changed my workflow. I saved weeks of setup time, and the design system is a masterpiece of minimalism."',
    authorInitial: "A",
    authorName: "Alex Rivera",
    authorTitle: "Frontend Engineer",
  },
  {
    id: 3,
    quote:
      '"This starter template completely changed my workflow. I saved weeks of setup time, and the design system is a masterpiece of minimalism."',
    authorInitial: "A",
    authorName: "Alex Rivera",
    authorTitle: "Frontend Engineer",
  },
];

export const DeploymentTestimonialSection = (): JSX.Element => {
  return (
    <section className="w-full self-center mt-[120px] flex justify-center bg-section-bg rounded-3xl overflow-hidden py-[120px]">
      <div className="flex w-full max-w-[1320px] px-0 flex-col items-center gap-16">
        {/* Section heading */}
        <div className="inline-flex flex-col items-center gap-6">
          <h2 className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#232323] text-[61px] text-center tracking-[0.35px] leading-[85.4px] whitespace-nowrap">
            From idea to deployment
          </h2>

          <p className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#232323cc] text-xl text-center tracking-[-0.45px] leading-7 whitespace-nowrap">
            Three simple steps to launch your next big project without the
            headache.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="flex items-stretch gap-6 self-stretch w-full">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex-1 bg-[#f5f4f1] rounded-3xl border border-solid border-[#23232314] shadow-[0px_4px_26px_-4px_#0000000f,0px_10px_25px_-3px_#0000000f]"
            >
              <CardContent className="flex flex-col justify-between h-full p-8 gap-6">
                {/* Stars and quote */}
                <div className="flex flex-col items-start gap-6">
                  {/* Star rating image */}
                  <img
                    className="flex-shrink-0"
                    alt="Frame"
                    src="/figmaAssets/frame-62.svg"
                  />

                  {/* Quote text */}
                  <p className="self-stretch [font-family:'Inter',Helvetica] font-normal italic text-[#232323cc] text-lg tracking-[-0.44px] leading-[29.2px]">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Divider and author */}
                <div className="flex flex-col items-start gap-4">
                  <Separator className="w-full bg-[#23232314] h-px" />

                  <div className="inline-flex items-center gap-4">
                    {/* Avatar circle */}
                    <div className="flex w-12 h-12 items-center justify-center bg-[#232323] rounded-full flex-shrink-0">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#ece5d8] text-lg tracking-[-0.44px] leading-7">
                        {testimonial.authorInitial}
                      </span>
                    </div>

                    {/* Author info */}
                    <div className="flex flex-col items-start gap-px">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-base tracking-[-0.31px] leading-6">
                        {testimonial.authorName}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#23232399] text-sm tracking-[-0.15px] leading-5">
                        {testimonial.authorTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
