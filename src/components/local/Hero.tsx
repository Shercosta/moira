import { Button } from "../ui/button";

function HeroPersonPicture({ imgPath }: { imgPath: string }) {
  return (
    <>
      <img src={imgPath} alt={imgPath} />
    </>
  );
}

export function Hero() {
  return (
    <div id="hero" className="flex justify-center">
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

        <HeroPersonPicture imgPath="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/1.jpg" />
      </div>
    </div>
  );
}
