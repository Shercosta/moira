import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  FormspreeHook,
  type FormspreeContactInterface,
} from "../hooks/Formspree.hook";

function SpanContact({ text }: { text: string }) {
  return (
    <span className="whitespace-nowrap text-lg md:text-xl lg:text-2xl">
      {text}
    </span>
  );
}

type FormInputContactProps = React.ComponentProps<typeof Input>;

function FormInputContact({ placeholder, ...props }: FormInputContactProps) {
  return (
    <Input
      className="min-w-[160px] flex-1 rounded-full border-none bg-black/5 text-accent"
      placeholder={placeholder}
      {...props}
    />
  );
}

export function ContactUs() {
  const Formspreehook = new FormspreeHook();
  const [userFormInfo, setUserFormInfo] = useState<FormspreeContactInterface>({
    name: "",
    job: "",
    city: "",
    question: "",
    email: "",
  });

  const handleChange =
    (field: keyof typeof userFormInfo) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserFormInfo((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <section id="contactUs" className="px-5 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-7">
        {/* Left */}
        <div className="lg:col-span-3">
          <h2 className="font-thin text-teal">[ Contact Us ]</h2>

          <p className="mt-2 text-3xl font-medium md:text-4xl">
            Reach Out Your Way
          </p>

          <p className="mt-4 max-w-md text-sm text-muted-foreground lg:max-w-[65%]">
            Have more specific questions? Contact us through your preferred
            channel
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4 lg:col-span-4">
          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="Hi! I'm" />
            <FormInputContact
              placeholder="Your Name"
              value={userFormInfo.name}
              onChange={handleChange("name")}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="a" />
            <FormInputContact
              placeholder="Your Job"
              value={userFormInfo.job}
              onChange={handleChange("job")}
            />

            <SpanContact text="from" />
            <FormInputContact
              placeholder="Your City"
              value={userFormInfo.city}
              onChange={handleChange("city")}
            />

            {/* <SpanContact text="that" /> */}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="that needs help. I have a question:" />
          </div>

          <Textarea
            className="min-h-[140px] border-none bg-black/5 text-accent"
            placeholder="State your questions here"
            value={userFormInfo.question}
            onChange={handleChange("question")}
          />

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="You can reach me at" />
            <FormInputContact
              placeholder="Email address"
              type="email"
              value={userFormInfo.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpanContact text="to get things started." />
          </div>

          <Button
            onClick={() => {
              Formspreehook.post(userFormInfo);
              setUserFormInfo({
                name: "",
                city: "",
                email: "",
                job: "",
                question: "",
              });
            }}
            disabled={
              !userFormInfo.name ||
              !userFormInfo.email ||
              !userFormInfo.question
            }
            className="rounded-full px-6 font-thin"
            size="sm"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
