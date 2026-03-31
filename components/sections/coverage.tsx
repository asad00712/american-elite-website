"use client";

import { COVERAGE_STATS, COVERAGE_FEATURES } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { PlaneIcon, HeadphonesIcon } from "@/components/icons/contact-icons";
import { ScrollReveal } from "./scroll-reveal";

const ICON_MAP: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  plane: PlaneIcon,
  building: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
      <path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" />
      <path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  ),
  party: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" />
      <path d="M22 20h.01" /><path d="M22 2 12 12" /><path d="M16 8l-4.8 4.8" /><path d="M9 11.2 5.8 11.3" />
    </svg>
  ),
  car: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.4A1 1 0 0 0 14.5 6h-5a1 1 0 0 0-.8.4L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
    </svg>
  ),
};

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
            Our Services
          </div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5">
            Your Journey,
            <br />
            <em className="italic text-gold">Our Priority</em>
          </h2>

          <p className="text-base text-white/50 leading-7 max-w-[580px]">
            Whether you need an airport pickup, corporate transportation,
            or a ride for a special event, American Elite Limousine has you
            covered across New Jersey and the TriState area.
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
                <div className="w-[42px] h-[42px] rounded-lg shrink-0 bg-gold/[0.14] flex items-center justify-center">
                  {(() => {
                    const Icon = ICON_MAP[feat.icon];
                    return Icon ? <Icon className="w-5 h-5 text-gold" /> : null;
                  })()}
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
