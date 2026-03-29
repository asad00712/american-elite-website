import Link from "next/link";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

export function AirportHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/92 to-navy/85" />
      </div>
      <div className="relative z-10 text-center px-[5%]">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            Premium Airport Transfers
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-normal text-white leading-[1.15] -tracking-wide">
            Airport Car & Limo{" "}
            <em className="italic text-gold-3">Service</em>
          </h1>
          <p className="text-[1.05rem] text-white/55 mt-4 max-w-[600px] mx-auto leading-7">
            Premium airport transfers with flight tracking, meet &amp; greet,
            and door-to-door luxury service worldwide
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gradient-to-br from-gold-2 to-gold text-white px-8 py-3.5 rounded-[5px] text-[0.92rem] font-bold no-underline tracking-wide uppercase hover:shadow-[0_8px_28px_rgba(184,144,46,0.5)] hover:-translate-y-px transition-all"
          >
            Book Now
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
