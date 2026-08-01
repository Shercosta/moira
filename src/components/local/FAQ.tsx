import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQinterface {
  id: number;
  q: string;
  a: string;
}

const faqs: FAQinterface[] = [
  {
    id: 1,
    q: "What kind of software do you develop?",
    a: "We build custom software tailored to your business needs, including web applications, mobile applications, enterprise systems, APIs, system integrations, and other digital solutions.",
  },
  {
    id: 2,
    q: "Can you work with our existing development team?",
    a: "Yes. We can collaborate with your in-house developers, provide dedicated engineers, or handle specific parts of a project while working alongside your existing team.",
  },
  {
    id: 3,
    q: "How do you estimate project cost and timeline?",
    a: "Every project is different. After understanding your requirements, we'll provide an estimate based on the project's scope, complexity, technology stack, and expected delivery timeline.",
  },
  {
    id: 4,
    q: "Do you provide maintenance and support after launch?",
    a: "Yes. We offer post-launch maintenance, bug fixes, performance improvements, feature enhancements, and technical support based on your project's needs.",
  },
  {
    id: 5,
    q: "How do we get started?",
    a: "Simply contact us with your project idea or business challenge. We'll schedule a discussion to understand your requirements and recommend the best approach.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-5 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-7">
        {/* Left */}
        <div className="lg:col-span-3">
          <h2 className="font-thin text-teal">[ FAQ ]</h2>

          <p className="mt-2 text-3xl font-medium md:text-4xl">
            <span className="text-muted">You Have </span>
            <span>Questions,</span>
          </p>
          <p className="mt-2 text-3xl font-medium md:text-4xl">
            <span className="text-muted">We Have </span>
            <span>Answers</span>
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4 lg:col-span-4">
          <Accordion type="single" className="gap-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                className="border-none bg-primary/10 rounded-xl px-4"
                key={faq.id}
                value={String(faq.id)}
              >
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent className="pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
