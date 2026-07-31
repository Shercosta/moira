import { ContactUs } from "@/components/local/Contact-Us";
import { FAQ } from "@/components/local/FAQ";
import { Hero } from "@/components/local/Hero";
import { QuickAccessCategories } from "@/components/local/Quick-Access-Categories";
import { SubHero } from "@/components/local/Sub-Hero";
import { Team } from "@/components/local/Team";

function HomePage() {
  return (
    <>
      <Hero />
      <SubHero />
      <QuickAccessCategories />
      <ContactUs />
      <Team />
      <FAQ />
    </>
  );
}

export default HomePage;
