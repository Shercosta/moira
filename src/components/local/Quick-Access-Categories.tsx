import { Rocket } from "lucide-react";
import { Button } from "../ui/button";
import type { JSX } from "react";

interface QACProps {
  icon: JSX.Element;
  h4: string;
  p: string;
  buttonText?: string;
}

const qacs: QACProps[] = [
  {
    icon: <Rocket size={20} />,
    h4: "Lorem, ipsum dolor",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, optio.",
    buttonText: "Lorem ipsum dolor",
  },
  {
    icon: <Rocket size={20} />,
    h4: "Lorem, ipsum dolor",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, optio.",
    buttonText: "Lorem ipsum dolor",
  },
  {
    icon: <Rocket size={20} />,
    h4: "Lorem, ipsum dolor",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, optio.",
    buttonText: "Lorem ipsum dolor",
  },
  {
    icon: <Rocket size={20} />,
    h4: "Lorem, ipsum dolor",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, optio.",
    buttonText: "Lorem ipsum dolor",
  },
];

function QuickAccessBox(props: QACProps) {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        {props.icon}
      </div>

      <h4 className="mt-4 text-lg font-medium">{props.h4}</h4>

      <p className="mt-2 text-sm text-muted-foreground">{props.p}</p>

      {props.buttonText && (
        <Button className="mt-5 rounded-full px-6 font-thin">
          {props.buttonText}
        </Button>
      )}
    </div>
  );
}

export function QuickAccessCategories() {
  return (
    <section className="bg-subtle-dark px-5 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-thin text-muted">
          [ Quick Access Categories ]
        </h2>

        <h3 className="mt-2 text-center text-3xl text-text-light md:text-4xl">
          Find What You Need Faster
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {qacs.map((qac, qacX) => (
            <QuickAccessBox key={qacX} {...qac} />
          ))}
        </div>
      </div>
    </section>
  );
}
