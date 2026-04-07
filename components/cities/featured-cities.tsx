"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { CITIES } from "@/lib/cities-data";

export function FeaturedCities() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <ScrollReveal className="text-center mb-14">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Our Service Areas
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Cities We <em className="italic text-gold">Serve</em>
        </h2>

        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          Professional limousine and car service across New Jersey.
          Select your city to learn more about our services in your area.
        </p>
      </ScrollReveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {CITIES.map((city, i) => (
          <ScrollReveal key={city.slug} delay={i * 0.06}>
            <Link
              href={`/cities/${city.slug}`}
              className="block relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group no-underline"
            >
              <Image
                src={city.image}
                alt={`Limousine service in ${city.name}, NJ`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/[0.88] via-navy/[0.3] to-navy/[0.1] group-hover:from-navy/[0.93] group-hover:via-navy/[0.45] group-hover:to-navy/[0.2] transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-[0.72rem] font-bold tracking-[2px] uppercase text-gold-3 mb-1">
                  New Jersey
                </span>
                <h3 className="font-heading text-[1.4rem] font-medium text-white leading-tight mb-1">
                  {city.name}
                </h3>
                <p className="text-[0.78rem] text-white/50 leading-relaxed">
                  {city.nearbyAreas.slice(0, 3).join(" \u00B7 ")}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold text-gold-3 tracking-widest uppercase mt-2.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View details &#8594;
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
