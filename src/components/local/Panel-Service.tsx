import { useState } from "react";
import { services } from "@/pages/Services";

export function PanelService() {
  const [showAll, setShowAll] = useState(false);

  const filteredServices = [...services]
    .filter((s) => !s.isQuickAccess)
    .reverse();

  // Show only 4 items on mobile unless expanded; always show all on desktop
  const visibleServices = filteredServices.map((s, i) => ({
    ...s,
    hiddenOnMobile: !showAll && i >= 4,
  }));

  return (
    <section className="flex flex-col px-6 pb-12 md:px-8 md:pb-10 gap-y-5">
      <h2 className="font-thin text-teal">[ Contact Us ]</h2>
      <h3 className="text-2xl font-medium text-primary md:text-4xl max-w-[85%] lg:max-w-[50%]">
        Elevate Every Experience, Simplify Your Everyday Needs.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleServices.map((s, index) => (
          <div
            key={s.h4 || index}
            className={`flex flex-col bg-black/5 rounded-lg p-5 ${
              s.hiddenOnMobile ? "hidden md:flex" : "flex"
            }`}
          >
            <span className="font-medium">{s.h4}</span>
            <p>{s.subtitle}</p>
            <div className="rounded-xl max-w-[100%] overflow-hidden mt-auto">
              <img
                src={s.image}
                alt=""
                className="w-full aspect-[5/3] object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredServices.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="self-center mt-2 px-6 py-2.5 text-sm font-medium rounded-full bg-black/5 hover:bg-black/10 md:hidden"
        >
          Show All Services ({filteredServices.length})
        </button>
      )}
    </section>
  );
}
