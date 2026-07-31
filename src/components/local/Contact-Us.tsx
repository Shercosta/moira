import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function SpanContact({ text }: { text: string }) {
  return (
    <span className="text-lg md:text-xl lg:text-2xl whitespace-nowrap">
      {text}
    </span>
  );
}

function FormInputContact({ placeholder }: { placeholder: string }) {
  return (
    <Input
      className="min-w-[160px] flex-1 rounded-full border-none bg-surface text-accent"
      placeholder={placeholder}
    />
  );
}

export function ContactUs() {
  return (
    <section id="contactUs" className="px-5 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-7">
        {/* Left */}
        <div className="lg:col-span-3">
          <h2 className="font-thin text-teal">[ Contact Us ]</h2>

          <p className="mt-2 text-3xl font-medium md:text-4xl">
            Reach Out Your Way
          </p>

          <p className="mt-4 max-w-md lg:max-w-[65%] text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            perferendis!
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4 lg:col-span-4">
          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="Hi! I'm" />
            <FormInputContact placeholder="Your Name" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="a" />
            <FormInputContact placeholder="Your Job" />

            <SpanContact text="from" />
            <FormInputContact placeholder="Your City" />

            <SpanContact text="that" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="needs help. I have a question:" />
          </div>

          <Textarea
            className="min-h-[140px] border-none bg-surface text-accent"
            placeholder="State your questions here"
          />

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="You can reach me at" />
            <FormInputContact placeholder="Email address" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="to get things started." />
          </div>
        </div>
      </div>
    </section>
  );
}
