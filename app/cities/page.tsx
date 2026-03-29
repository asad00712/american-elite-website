import { CitiesHero } from "@/components/cities/cities-hero";
import { FeaturedCities } from "@/components/cities/featured-cities";
import { CitiesByRegion } from "@/components/cities/cities-by-region";
import { CitiesCta } from "@/components/cities/cities-cta";

export default function CitiesPage() {
  return (
    <>
      <CitiesHero />
      <FeaturedCities />
      <CitiesByRegion />
      <CitiesCta />
    </>
  );
}
