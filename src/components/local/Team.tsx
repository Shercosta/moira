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
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/zul-reconstruct.png",
    caption: "Zulfian Fachru Reza",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/jiro.jpg",
    caption: "Ahmad Sarjono Aljiro",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQH7rSaekcyQsA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729880492067?e=1787184000&v=beta&t=oPACBuVZ7zyEdCgeH4mUvxk1eov3gLMS7UURBQuoEeQ",
    caption: "Muhammad Ridwan Ramadhan",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/dery.jpeg",
    caption: "Dery Yulian Sarean",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQHWDJlZ5g_bxw/profile-displayphoto-shrink_400_400/B56ZTO047LGoAo-/0/1738636759485?e=1787184000&v=beta&t=nAB2PcXyk81lSNJ9lvUq40-hMJLno8LMfZKyzPl0Eh4",
    caption: "Geizka Rozilia Ruicosta",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQHKyobMoj2PrQ/profile-displayphoto-shrink_800_800/B56ZTPIMZSGoAc-/0/1738641819645?e=1787184000&v=beta&t=ue-bFuQbGNRv-TFRmCH7COSAaYovvsB85OKy-aLGNlU",
    caption: "Meisya Amanda Aldi",
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
