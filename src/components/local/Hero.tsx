import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function HeroPersonPicture({
  imgPath,
  className,
}: {
  imgPath: string;
  className?: string;
}) {
  return (
    <img
      src={imgPath}
      alt={imgPath}
      className={cn([
        "aspect-square rounded-full object-fill max-w-25",
        className,
      ])}
    />
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-center px-6 pb-12 md:px-8 md:pb-10"
    >
      {/* Left decorations (desktop only) */}
      <div className="relative hidden md:block">
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute right-20 w-20"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute top-35 right-40 w-16"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute top-55 right-10 w-13"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[50%]">
        <div className="mb-4">
          <h1 className="text-center text-4xl font-normal capitalize text-primary md:text-5xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
        </div>

        <div className="mx-auto max-w-full md:max-w-[70%]">
          <p className="text-center text-sm leading-7 text-primary md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            quidem culpa iste repellat blanditiis quos reiciendis fugiat.
            Expedita, nam assumenda.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <Button className="rounded-full px-6 font-thin md:px-5">
            Lorem ipsum dolor
          </Button>
        </div>
      </div>

      {/* Right decorations (desktop only) */}
      <div className="relative hidden md:block">
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute left-20 w-20"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute top-35 left-40 w-16"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute top-55 left-10 w-13"
        />
      </div>
    </section>
  );
}
