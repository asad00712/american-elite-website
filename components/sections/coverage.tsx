"use client";

import { COVERAGE_STATS, COVERAGE_FEATURES } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "./scroll-reveal";

export function Coverage() {
  return (
    <section
      className="bg-navy py-[90px] px-[5%] relative overflow-hidden"
      id="services"
    >
      {/* Decorative glow */}
      <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,144,46,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-[1]">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3">
            <span className="w-7 h-0.5 bg-gold-3 shrink-0" />
            Global Reach
          </div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5">
            Your Journey,
            <br />
            <em className="italic text-gold">Our Network</em>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent my-[18px]" />
          <p className="text-base text-white/50 leading-7 max-w-[580px]">
            Whether you&apos;re arriving from or leaving on a trip,
            Limousine.com is there — with Sedans, SUVs, Vans, or Buses. We have
            you covered anywhere in the world.
          </p>

          <div className="grid grid-cols-2 gap-[18px] mt-10">
            {COVERAGE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] border border-white/[0.07] rounded-[10px] p-[22px] hover:bg-gold/[0.07] hover:border-gold/20 transition-all"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-heading text-[1.9rem] font-semibold text-gold-3"
                />
                <div className="text-[0.8rem] text-white/40 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Features */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-3.5">
            {COVERAGE_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="flex gap-3.5 items-start bg-white/[0.03] border border-white/[0.06] rounded-[10px] p-[18px] hover:border-gold/25 transition-colors"
              >
                <div className="w-[42px] h-[42px] rounded-lg shrink-0 bg-gold/[0.14] flex items-center justify-center text-[1.1rem]">
                  {feat.icon}
                </div>
                <div>
                  <div className="font-semibold text-white text-[0.92rem] mb-[3px]">
                    {feat.title}
                  </div>
                  <div className="text-[0.81rem] text-white/[0.42] leading-relaxed">
                    {feat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
