import { services } from "@/pages/Services";

export function PanelService() {
  return (
    <section className="flex flex-col px-6 pb-12 md:px-8 md:pb-10">
      <h2 className="text-2xl font-medium text-primary md:text-4xl max-w-[85%] lg:max-w-[50%]">
        Elevate Every Experience, Simplify Your Everyday Needs.
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {[...services]
          .filter((s) => !s.isQuickAccess)
          .reverse()
          .map((s) => (
            <div className="flex flex-col bg-black/5 rounded-lg p-5">
              <span className="font-medium">{s.h4}</span>
              <p>{s.subtitle}</p>
              <div className="rounded-xl max-w-[100%] overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="w-full aspect-[5/3] object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
