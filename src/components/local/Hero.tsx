import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function CirclePicture({
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
        "aspect-square rounded-full object-cover object-top max-w-25",
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
        <CirclePicture
          imgPath="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          className="absolute right-20 w-20"
        />
        <CirclePicture
          imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavM5p8t8RSx8tNIoFuYIKAhOXLy4mGMDflFAwQgG25DkT9PVnflZJbzj1&s=10"
          className="absolute top-35 right-40 w-16"
        />
        <CirclePicture
          imgPath="https://www.bee.id/wp-content/uploads/2024/05/Hanifa-Ambadar.jpeg"
          className="absolute top-55 right-10 w-13"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[50%]">
        <div className="mb-4">
          <h1 className="text-center text-4xl font-normal capitalize text-primary md:text-5xl">
            Your Business Journey Deserves Expert Support
          </h1>
        </div>

        <div className="mx-auto max-w-full md:max-w-[70%]">
          <p className="text-center text-sm leading-7 text-primary md:text-base">
            Whether you're launching a new product, modernizing existing
            systems, or simply have a question, our team is ready to deliver
            reliable technology solutions tailored to your goals.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <Button className="rounded-full px-6 font-thin md:px-5">
            Explore Our Service
          </Button>
        </div>
      </div>

      {/* Right decorations (desktop only) */}
      <div className="relative hidden md:block">
        <CirclePicture
          imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5kWoqt8pXInTZRZhM8XlTq24K1lqrYX2T_SBCbzBC_bdYN7_wwHTIw4&s=10"
          className="absolute left-20 w-20"
        />
        <CirclePicture
          imgPath="https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/hero-person-1.jpg"
          className="absolute top-35 left-40 w-16"
        />
        <CirclePicture
          imgPath="https://thumbs.dreamstime.com/b/asian-business-woman-smiling-middle-aged-over-white-background-79562683.jpg"
          className="absolute top-55 left-10 w-13"
        />
      </div>
    </section>
  );
}
