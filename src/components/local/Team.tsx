import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Member = {
  imageUrl: string;
  caption: string;
};

const TeamMembers: Member[] = [
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    caption: "Person 1",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavM5p8t8RSx8tNIoFuYIKAhOXLy4mGMDflFAwQgG25DkT9PVnflZJbzj1&s=10",
    caption: "Person 2",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxoJOzDhj-8nkfEfAibh9ZBeMDnUplrTgTBnScLo39A&s=10",
    caption: "Person 3",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12u4IvjDG4jXP3Ope-Iw_gTLKwFu_LTnfMFLtwwrdYkKnCxD17bnvlec&s=10",
    caption: "Person 4",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/23/62/91/360_F_523629123_RpAModBJXgCTPfilfYaCIbPaalFIjbvv.jpg",
    caption: "Person 5",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-emeGnpTpd6K_O3l6EzM7asbcuVZeEgD7-ueuNoHnw&s=10",
    caption: "Person 6",
  },
];

export function TeamCarousel({ data }: { data: Member[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
    };

    update();

    emblaApi.on("select", update);

    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {data.map((member, index) => (
          <div
            key={index}
            className="flex-[0_0_33%] md:flex-[0_0_27%] lg:flex-[0_0_20%] px-3"
          >
            <div
              className={cn(
                "aspect-square rounded-3xl bg-black transition-all duration-500",
                selected === index ? "scale-100" : "scale-75",
              )}
            >
              <img
                src={member.imageUrl}
                className={cn(
                  "aspect-square w-full rounded-3xl object-cover transition-all duration-500",
                  selected === index ? "opacity-100" : "opacity-80",
                )}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-7 flex justify-around gap-x-10 text-muted lg:justify-center">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full p-2 transition hover:bg-white/10"
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full p-2 transition hover:bg-white/10"
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="flex mx-auto max-w-[80%] lg:max-w-[30%] mt-8">
        <p className="text-center text-text-light font-thin text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente
          fugiat distinctio cum labore quibusdam cumque asperiores ex
          reprehenderit ullam.
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <Button className="rounded-full px-6 font-thin">Check Our Team</Button>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section className="bg-subtle-dark py-12">
      <div className="mx-auto">
        <h2 className="text-center font-thin text-muted">
          [ Our Support Team ]
        </h2>

        <h3 className="mt-2 text-center text-3xl text-text-light md:text-4xl">
          Experts Ready to Help
        </h3>

        <div className="mt-3">
          <TeamCarousel data={[...TeamMembers, ...TeamMembers]} />
        </div>
      </div>
    </section>
  );
}
