import { Hero } from "@/components/local/Hero";
import { QuickAccessCategories } from "@/components/local/Quick-Access-Categories";
import { SubHero } from "@/components/local/Sub-Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <SubHero />
      <QuickAccessCategories />
    </>
  );
}

export default HomePage;
