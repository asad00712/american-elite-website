import { ScrollReveal } from "@/components/sections/scroll-reveal";
import Link from "next/link";
import Limousine from '@/public/Limousine.jpg'

export function FleetHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${Limousine.src})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/92 to-navy/85" />
      </div>
      <div className="relative z-10 text-center px-[5%]">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            Premium Vehicles
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-normal text-white leading-[1.15] -tracking-wide">
            Our <em className="italic text-gold-3">Fleet</em>
          </h1>
          <p className="text-[1.05rem] text-white/55 mt-4 max-w-[600px] mx-auto leading-7">
            Explore a variety of vehicles we offer at American Elite Limousine,
            from Lincoln Town Cars and SUVs to 14 Passenger Vans, specially
            tailored for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 rounded-[5px] text-[0.9rem] font-semibold no-underline hover:bg-gold-2 hover:shadow-[0_6px_20px_rgba(184,144,46,0.4)] transition-all"
          >
            Contact Us
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
