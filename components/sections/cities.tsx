"use client";

import { SERVICE_AREAS, AIRPORT_SERVICES } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function Cities() {
  const marqueeAreas = [...SERVICE_AREAS, ...SERVICE_AREAS];

  return (
    <section className="py-24 px-[5%] bg-white" id="cities">
      <ScrollReveal className="text-center mb-[50px]">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Service Areas
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Serving <em className="italic text-gold">New Jersey</em> &amp; Beyond
        </h2>

        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          We proudly provide limo services and transportation car services
          throughout New Jersey and the TriState area.
        </p>
      </ScrollReveal>

      {/* Marquee - NJ service areas */}
      <div className="overflow-hidden mb-13">
        <div className="flex gap-0 w-max animate-marquee">
          {marqueeAreas.map((area, i) => (
            <div
              key={`${area}-${i}`}
              className="flex items-center gap-2.5 py-2.5 px-5.5 mx-1.5 border border-ivory-3 rounded-full text-[0.84rem] font-medium text-body-2 bg-ivory whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {area}, NJ
            </div>
          ))}
        </div>
      </div>

      {/* Airport service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AIRPORT_SERVICES.map((airport, i) => (
          <ScrollReveal key={airport.name} delay={i * 0.08}>
            <div className="bg-ivory border border-ivory-3 rounded-xl p-6 text-center hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(13,21,38,0.12)] hover:border-gold/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
              </div>
              <h3 className="font-heading text-[1.1rem] font-medium text-navy mb-1">
                {airport.name}
              </h3>
              <p className="text-[0.82rem] text-body-3">{airport.area}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
