import { ScrollReveal } from "@/components/sections/scroll-reveal";
import Link from "next/link";
import { CITIES } from "@/lib/cities-data";

const REGIONS = [
  {
    name: "North Jersey",
    slugs: ["parsippany", "morristown", "livingston", "paterson", "ridgewood"],
  },
  {
    name: "Hudson County",
    slugs: ["jersey-city", "hoboken"],
  },
  {
    name: "Central Jersey",
    slugs: ["edison", "short-hills", "newark", "princeton"],
  },
  {
    name: "South Jersey",
    slugs: ["atlantic-city"],
  },
];

export function CitiesByRegion() {
  return (
    <section className="py-24 px-[5%] bg-navy">
      <ScrollReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center">
          <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          By Region
          <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5">
          Serving All of <em className="italic text-gold-3">New Jersey</em>
        </h2>
      </ScrollReveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {REGIONS.map((region, ri) => (
          <ScrollReveal key={region.name} delay={ri * 0.1}>
            <h3 className="font-heading text-lg text-gold font-medium mb-5 pb-3 border-b border-white/10">
              {region.name}
            </h3>
            <ul className="space-y-2.5">
              {region.slugs.map((slug) => {
                const city = CITIES.find((c) => c.slug === slug);
                if (!city) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/cities/${slug}`}
                      className="flex items-center gap-2.5 text-[0.9rem] text-white/70 no-underline hover:text-gold-3 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-white/40 text-sm mt-14 max-w-[500px] mx-auto">
          Don&apos;t see your city? We serve all of New Jersey and the TriState
          area. Contact us for availability in your area.
        </p>
      </ScrollReveal>
    </section>
  );
}
