import { services } from "@/pages/Services";

export function HeroService() {
  return (
    <section id="hero" className="flex flex-col px-6 pb-12 md:px-8 md:pb-10">
      <h1 className="text-3xl font-medium text-black md:text-5xl">
        Elevate Your System,
      </h1>

      <h1 className="text-3xl font-medium text-black md:text-5xl">
        Simplify Your Business
      </h1>

      <div className="mt-3 lg:max-w-[30%]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          dolores.
        </p>
      </div>

      {/* quick access services */}
      <div className="mt-10 flex gap-5 overflow-x-auto flex-nowrap snap-x snap-mandatory pb-2 md:justify-around md:overflow-visible md:pb-0">
        {services
          .filter((s) => s.isQuickAccess)
          .map((s, sX) => (
            <div
              className="w-[75%] shrink-0 snap-start md:w-auto md:max-w-[20%]"
              key={sX}
            >
              <span className="font-bold text-primary">{s.h4}</span>

              <div className="my-2 overflow-hidden rounded-3xl border border-surface">
                <img
                  src={s.image}
                  alt={s.h4}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <p className="text-sm font-normal text-secondary">{s.p}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
