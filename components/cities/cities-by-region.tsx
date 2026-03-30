import { ScrollReveal } from "@/components/sections/scroll-reveal";

const REGIONS = [
  {
    name: "North America",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Miami",
      "Las Vegas",
      "San Francisco",
      "Washington DC",
      "Toronto",
      "Vancouver",
      "Montreal",
    ],
  },
  {
    name: "Europe",
    cities: [
      "London",
      "Paris",
      "Berlin",
      "Rome",
      "Barcelona",
      "Amsterdam",
      "Zurich",
      "Vienna",
      "Madrid",
      "Dublin",
    ],
  },
  {
    name: "Middle East & Asia",
    cities: [
      "Dubai",
      "Tokyo",
      "Singapore",
      "Hong Kong",
      "Bangkok",
      "Mumbai",
      "Istanbul",
      "Doha",
      "Abu Dhabi",
      "Seoul",
    ],
  },
  {
    name: "Oceania & Africa",
    cities: [
      "Sydney",
      "Melbourne",
      "Auckland",
      "Cape Town",
      "Johannesburg",
      "Nairobi",
    ],
  },
] as const;

export function CitiesByRegion() {
  return (
    <section className="py-24 px-[5%] bg-navy">
      <ScrollReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center">
          <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          Worldwide Reach
          <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5">
          Available <em className="italic text-gold-3">Worldwide</em>
        </h2>

      </ScrollReveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {REGIONS.map((region, ri) => (
          <ScrollReveal key={region.name} delay={ri * 0.1}>
            <h3 className="font-heading text-lg text-gold font-medium mb-5 pb-3 border-b border-white/10">
              {region.name}
            </h3>
            <ul className="space-y-2.5">
              {region.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2.5 text-[0.9rem] text-white/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-white/40 text-sm mt-14 max-w-[500px] mx-auto">
          Don&apos;t see your city? We cover 600+ destinations worldwide.
          Contact us for availability in your area.
        </p>
      </ScrollReveal>
    </section>
  );
}
