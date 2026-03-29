import { TRUST_STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function TrustStrip() {
  return (
    <div className="bg-navy grid grid-cols-2 md:grid-cols-4 border-b-[3px] border-gold">
      {TRUST_STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`py-[26px] px-5 text-center ${
            i < TRUST_STATS.length - 1
              ? "border-r border-white/[0.07]"
              : ""
          }`}
        >
          <AnimatedCounter
            value={stat.value}
            className="font-heading text-[2.1rem] font-semibold text-gold-3 leading-none"
          />
          <div className="text-[0.76rem] text-white/45 mt-1.5 tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
