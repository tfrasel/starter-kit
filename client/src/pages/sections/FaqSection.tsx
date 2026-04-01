import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Is this template actually free?",
    answer:
      "Yes, the Starter Kit is completely free to use for personal and commercial projects. You can download, customize, and deploy it without any licensing fees.",
  },
  {
    id: "item-2",
    question: "Can I use it with Next.js or Vite?",
    answer:
      "Absolutely. The Starter Kit is framework-agnostic by design. It works seamlessly with Next.js, Vite, Remix, Astro, and any other modern React-based setup. Just install the dependencies and you're good to go.",
  },
  {
    id: "item-3",
    question: "How do I change the Ivory and Cocoa colors?",
    answer:
      "All design tokens are defined as CSS custom properties in your theme file. Simply update the --ivory and --cocoa variables to your preferred values and the changes propagate across the entire UI instantly.",
  },
  {
    id: "item-4",
    question: "Does it score 100/100 on Lighthouse?",
    answer:
      "Yes — the template is optimized for performance, accessibility, best practices, and SEO out of the box. We regularly audit every release to maintain a perfect Lighthouse score on the default configuration.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section id="faq" className="flex w-full max-w-[872px] self-center mt-[120px] flex-col items-center gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#232323] text-[61px] text-center tracking-[0.37px] leading-[85.4px] whitespace-nowrap">
          Frequently asked questions
        </h2>
        <p className="self-stretch [font-family:'Inter',Helvetica] font-normal text-[#23232399] text-lg text-center tracking-[-0.44px] leading-7">
          Got questions? We&#39;ve got answers.
        </p>
      </div>

      {/* FAQ Accordion */}
      <Accordion
        type="single"
        collapsible
        className="flex flex-col w-full gap-4"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-[#f5f4f1] rounded-2xl overflow-hidden border border-solid border-[#2323231a] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] px-6 min-h-20"
          >
            <AccordionTrigger className="[font-family:'Inter',Helvetica] font-bold text-[#232323] text-xl tracking-[-0.45px] leading-7 hover:no-underline py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="[font-family:'Inter',Helvetica] font-normal text-[#23232399] text-base leading-6 pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
