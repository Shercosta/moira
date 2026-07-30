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
    <div id="hero" className="flex justify-center pb-10">
      <div className="relative">
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-20 right-20"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-16 right-40 top-35"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-13 right-10 top-55"
        />
      </div>
      <div className="w-[50%]">
        <div className="mb-3">
          <h1 className="text-center text-5xl font-normal text-primary capitalize">
            Lorem ipsum dolor sit amet consectetur
          </h1>
        </div>
        <div className="max-w-[70%] mx-auto">
          <p className="text-center text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            quidem culpa iste repellat blanditiis quos reiciendis fugiat.
            Expedita, nam assumenda.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="rounded-full font-thin px-5">
            Lorem ipsum dolor
          </Button>
        </div>
      </div>
      <div className="relative">
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-20 left-20"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-16 left-40 top-35"
        />
        <HeroPersonPicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute w-13 left-10 top-55"
        />
      </div>
    </div>
  );
}
