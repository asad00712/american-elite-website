"use client";

import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { PlaneIcon } from "@/components/icons/contact-icons";
import type { CityData } from "@/lib/cities-data";

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
      <path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" />
      <path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  );
}

function PartyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" />
      <path d="M22 20h.01" /><path d="M22 2 12 12" /><path d="M16 8l-4.8 4.8" /><path d="M9 11.2 5.8 11.3" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CityServices({ city }: { city: CityData }) {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
            <span className="w-7 h-0.5 bg-gold shrink-0" />
            Our Services in {city.name}
          </div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
            What We <em className="italic text-gold">Offer</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Airport */}
          <ScrollReveal>
            <div className="h-full bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] border border-gold/15 rounded-xl p-7 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.1)] hover:border-gold/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-4">
                <PlaneIcon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-[1.15rem] font-medium text-navy mb-3">
                Airport Transfers
              </h3>
              <p className="text-[0.86rem] text-body-2 leading-7">
                Reliable service from {city.name} to Newark (EWR), JFK, and
                LaGuardia (LGA). Flight tracking included so we monitor your
                arrival and adjust pickup accordingly.
              </p>
            </div>
          </ScrollReveal>

          {/* Corporate */}
          <ScrollReveal delay={0.1}>
            <div className="h-full bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] border border-gold/15 rounded-xl p-7 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.1)] hover:border-gold/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-4">
                <BuildingIcon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-[1.15rem] font-medium text-navy mb-3">
                Corporate and Local Transportation
              </h3>
              <p className="text-[0.86rem] text-body-2 leading-7">
                {city.corporateText}
              </p>
            </div>
          </ScrollReveal>

          {/* Party */}
          <ScrollReveal delay={0.2}>
            <div className="h-full bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] border border-gold/15 rounded-xl p-7 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.1)] hover:border-gold/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-4">
                <PartyIcon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-[1.15rem] font-medium text-navy mb-3">
                Party Transportation
              </h3>
              <p className="text-[0.86rem] text-body-2 leading-7">
                {city.partyText}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Special Events */}
        <ScrollReveal className="mt-10">
          <div className="bg-ivory rounded-xl border border-ivory-3 p-7">
            <h3 className="font-heading text-[1.15rem] font-medium text-navy mb-4">
              Special Events We Cover in {city.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {city.specialEvents.map((event) => (
                <div
                  key={event}
                  className="flex items-center gap-2 text-[0.88rem] text-body-2 bg-white border border-ivory-3 rounded-full px-4 py-2"
                >
                  <CheckIcon className="w-4 h-4 text-gold shrink-0" />
                  {event}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
