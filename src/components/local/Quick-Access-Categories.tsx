import { Rocket } from "lucide-react";
import { Button } from "../ui/button";

function QuickAccessBox() {
  return (
    <div className="rounded-lg bg-white p-4 max-w-80 m-3">
      <div className="rounded-full bg-primary text-white p-2 flex w-min">
        <Rocket size={20} />
      </div>

      <h4 className="font-medium text-md mt-3">Accounts & Improvements</h4>

      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Button className="rounded-full px-6 font-thin md:px-5 mt-3">
        Explore Our Support
      </Button>
    </div>
  );
}

export function QuickAccessCategories() {
  return (
    <div className="flex flex-col bg-subtle-dark justify-center p-5">
      <div className="flex justify-center">
        <h2 className="font-thin text-muted text-center">
          [ Quick Access Categories ]
        </h2>
      </div>
      <div className="flex justify-center">
        <h3 className="text-text-light text-4xl text-center">
          Find What You Need Faster
        </h3>
      </div>
      <div className="flex justify-center">
        <div>
          <QuickAccessBox />
        </div>
        <div>
          <QuickAccessBox />
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <QuickAccessBox />
        </div>
        <div>
          <QuickAccessBox />
        </div>
      </div>
    </div>
  );
}
