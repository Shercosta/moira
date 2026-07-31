import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function SpanContact({ text }: { text: string }) {
  return <span className="text-2xl">{text}</span>;
}

function FormInputContact({ placeholder }: { placeholder: string }) {
  return (
    <Input
      className="w-min rounded-full text-accent bg-surface border-none h-[80%]"
      placeholder={placeholder}
    />
  );
}

export function ContactUs() {
  return (
    <section id="contactUs" className="px-5 py-12 md:px-8 lg:px-16">
      <div className="grid grid-cols-7 mx-auto max-w-5xl">
        <div className="col-span-3 flex flex-col gap-y-3">
          <h2 className="font-thin text-teal">[ Contact Us ]</h2>
          <p className="font-medium text-4xl">Reach Out Your Way</p>
          <p className="text-sm max-w-[50%] mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            perferendis!
          </p>
        </div>
        <div className="col-span-4">
          <div className="flex items-center gap-x-2">
            <SpanContact text="Hi! I'm" />
            <FormInputContact placeholder="Your Name" />
          </div>
          <div className="flex items-center gap-x-2">
            <SpanContact text="a" />
            <FormInputContact placeholder="Your Job" />
            <SpanContact text="from" />
            <FormInputContact placeholder="Your City" />
            <SpanContact text="that" />
          </div>
          <div className="flex items-center gap-x-2">
            <SpanContact text="need help. I have a question which are" />
          </div>
          <div className="flex items-center gap-x-2">
            <Textarea
              className="text-accent bg-surface border-none h-[80%] min-h-[100px]"
              placeholder="State your Questions here"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <SpanContact text="You can reach me at" />
            <FormInputContact placeholder="Email address" />
          </div>
          <div className="flex items-center gap-x-2">
            <SpanContact text="to get things started." />
          </div>
        </div>
      </div>
    </section>
  );
}
