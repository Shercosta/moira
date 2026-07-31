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
    q: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, harum adipisci quaerat iure neque dolores? Cumque quisquam assumenda quibusdam error.",
  },
  {
    id: 2,
    q: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, harum adipisci quaerat iure neque dolores? Cumque quisquam assumenda quibusdam error.",
  },
  {
    id: 3,
    q: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, harum adipisci quaerat iure neque dolores? Cumque quisquam assumenda quibusdam error.",
  },
  {
    id: 4,
    q: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, harum adipisci quaerat iure neque dolores? Cumque quisquam assumenda quibusdam error.",
  },
  {
    id: 5,
    q: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, harum adipisci quaerat iure neque dolores? Cumque quisquam assumenda quibusdam error.",
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
