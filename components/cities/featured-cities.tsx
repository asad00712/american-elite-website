"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

const FEATURED_CITIES = [
  {
    name: "New York",
    country: "USA",
    airports: "JFK \u00B7 LGA \u00B7 EWR",
    areas: "Manhattan, Brooklyn, Queens",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=700&q=80",
  },
  {
    name: "London",
    country: "UK",
    airports: "LHR \u00B7 LGW \u00B7 STN",
    areas: "Westminster, City, Canary Wharf",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80",
  },
  {
    name: "Dubai",
    country: "UAE",
    airports: "DXB \u00B7 DWC",
    areas: "Downtown, Marina, Palm Jumeirah",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&q=80",
  },
  {
    name: "Paris",
    country: "France",
    airports: "CDG \u00B7 ORY",
    areas: "Champs-\u00C9lys\u00E9es, Montmartre, Le Marais",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80",
  },
  {
    name: "Tokyo",
    country: "Japan",
    airports: "NRT \u00B7 HND",
    areas: "Shibuya, Shinjuku, Ginza",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=80",
  },
  {
    name: "Los Angeles",
    country: "USA",
    airports: "LAX \u00B7 BUR",
    areas: "Hollywood, Beverly Hills, Santa Monica",
    image:
      "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=700&q=80",
  },
] as const;

export function FeaturedCities() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <ScrollReveal className="text-center mb-14">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Top Destinations
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Featured <em className="italic text-gold">Destinations</em>
        </h2>
        <div className="w-[90px] h-0.5 mx-auto my-[18px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          Premium chauffeured service in the world&apos;s most iconic cities,
          with local expertise and consistent luxury standards.
        </p>
      </ScrollReveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_CITIES.map((city, i) => (
          <ScrollReveal key={city.name} delay={i * 0.08}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/[0.88] via-navy/[0.3] to-navy/[0.1] group-hover:from-navy/[0.93] group-hover:via-navy/[0.45] group-hover:to-navy/[0.2] transition-all duration-500 flex flex-col justify-end p-7">
                <span className="text-[0.72rem] font-bold tracking-[2px] uppercase text-gold-3 mb-1">
                  {city.country}
                </span>
                <h3 className="font-heading text-[1.6rem] font-medium text-white leading-tight mb-1.5">
                  {city.name}
                </h3>
                <p className="text-[0.8rem] text-white/55 leading-relaxed">
                  {city.airports}
                </p>
                <p className="text-[0.78rem] text-white/45 leading-relaxed">
                  {city.areas}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold text-gold-3 tracking-widest uppercase mt-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 no-underline"
                >
                  Book a ride &#8594;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
