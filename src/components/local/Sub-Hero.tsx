import { shuffleArray } from "@/lib/common";
import { services } from "@/pages/Services";

export function SubHero() {
  const [image1, image2, image3] = shuffleArray(services).map((s) => s.image);
  return (
    <div className="hidden md:flex justify-center gap-5 my-10">
      <img
        src={image1}
        alt="tech-meeting-flatlay.jpg"
        className="object-cover aspect-5/4 w-60 rounded-lg rounded-tr-none"
      />
      <img
        src={image2}
        alt="sample-sub-hero.jpg"
        className="object-cover aspect-5/4 w-60 rounded-lg"
      />
      <img
        src={image3}
        alt="sample-sub-hero0.jpg"
        className="object-cover aspect-5/4 w-60 rounded-lg rounded-tl-none"
      />
    </div>
  );
}
