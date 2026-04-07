import { ScrollReveal } from "@/components/sections/scroll-reveal";
import Link from "next/link";
import type { CityData } from "@/lib/cities-data";

export function CityHero({ city }: { city: CityData }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${city.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/92 to-navy/85" />
      </div>
      <div className="relative z-10 text-center px-[5%]">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            {city.name}, New Jersey
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-normal text-white leading-[1.15] -tracking-wide">
            Limousine Service in{" "}
            <em className="italic text-gold-3">{city.name}</em>
          </h1>
          <p className="text-[1.05rem] text-white/55 mt-4 max-w-[600px] mx-auto leading-7">
            {city.tagline}
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 rounded-[5px] text-[0.9rem] font-semibold no-underline hover:bg-gold-2 hover:shadow-[0_6px_20px_rgba(154,120,36,0.4)] transition-all"
          >
            Book a Ride
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
