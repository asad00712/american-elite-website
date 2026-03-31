import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const HERO_STATS = [
  { value: "600+", label: "Cities" },
  { value: "60+", label: "Countries" },
  { value: "6", label: "Continents" },
  { value: "24/7", label: "Dispatch" },
] as const;

export function CitiesHero() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/92 to-navy/85" />
      </div>
      <div className="relative z-10 text-center px-[5%]">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            Global Network
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-normal text-white leading-[1.15] -tracking-wide">
            Our Global <em className="italic text-gold-3">Network</em>
          </h1>
          <p className="text-[1.05rem] text-white/55 mt-4 max-w-[640px] mx-auto leading-7">
            Premium chauffeured transportation in 600+ cities across 60+
            countries. Wherever you travel, we&apos;re there
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <AnimatedCounter
                  value={stat.value}
                  className="text-[clamp(1.8rem,3vw,2.4rem)] font-heading font-medium text-gold-3 leading-none"
                />
                <span className="text-[0.78rem] text-white/50 mt-1 uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
